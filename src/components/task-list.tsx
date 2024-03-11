// import Task from "./task";
import { Task } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ScrollArea } from "./ui/scroll-area";
import TaskCard from "./task";

import moment from "moment";

import "moment/locale/es";

moment.updateLocale("es", {
  monthsShort: "Ene.Feb._Mar.Abr._May_Jun_Jul._Ago.Sep.Oct.Nov._Dic.".split(
    "_"
  ),
});

export default function TaskList({ tasks, state }: { tasks: any; state: any }) {
  return (
    <ScrollArea
      className="w-[33.6666666666%] relative rounded-[1rem] m-3 flex flex-col px-3 mt-5 gap-3 border border-zinc-200"
      data-testid={state}
    >
      <Accordion type="single" collapsible className="w-full mt-3 relative">
        {tasks.map((task: Task, i: number) => {
          if (task.state !== state) return;

          return (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="task max-w-full border border-zinc-300 rounded-md mb-2 hover:bg-[#F0FBF7]"
            >
              <AccordionTrigger className="font-bold text-zinc-700">
                <div
                  className="flex justify-between w-full px-4"
                  data-testid="task-card"
                >
                  <h3 data-testid="task-title">{task.title}</h3>
                  <div data-testid="deadline">
                    {moment(task.deadline).format("LL")}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent data-testid="open-task-card">
                <TaskCard task={task} />
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </ScrollArea>
  );
}
