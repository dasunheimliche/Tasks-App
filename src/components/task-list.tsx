// import Task from "./task";
import { Task } from "@/types";
import { Accordion } from "./ui/accordion";
import { ScrollArea } from "./ui/scroll-area";
import TaskCard from "./task-card";

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

          return <TaskCard task={task} key={i} />;
        })}
      </Accordion>
    </ScrollArea>
  );
}
