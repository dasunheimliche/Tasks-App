// import Task from "./task";
import { Task, TaskState } from "../types";
import { Accordion } from "./ui/accordion";
import { ScrollArea } from "./ui/scroll-area";
import TaskCard from "./task-card";

import moment from "moment";

import "moment/locale/es";
import useTodoStore from "@/stores/useTodoStore";
import useIsSmallScreen from "@/hooks/useIsFullScreen";
import { cn } from "../lib/utils";

moment.updateLocale("es", {
  monthsShort: "Ene.Feb._Mar.Abr._May_Jun_Jul._Ago.Sep.Oct.Nov._Dic.".split(
    "_"
  ),
});

export default function TaskList({ state }: { state: TaskState }) {
  const { taskList, selectedTimeRange, selectedTaskState } = useTodoStore();
  const isSmallScreen = useIsSmallScreen();

  return (
    <ScrollArea
      className={cn(
        "w-[33.6666666666%] max-sm:w-full m-0 flex flex-col px-3 mt-5 gap-3 border-l border-t border-zinc-200",
        isSmallScreen ? selectedTaskState !== state && "hidden" : ""
      )}
      data-testid={state}
      id={state}
    >
      <Accordion type="single" collapsible className="w-full mt-3 relative">
        {taskList.map((task: Task, i: number) => {
          if (task.state !== state) return;

          if (selectedTimeRange === "today") {
            const isSameDay =
              new Date(task.deadline).toLocaleDateString() ===
              new Date().toLocaleDateString();
            return isSameDay && <TaskCard task={task} key={i} />;
          } else if (selectedTimeRange === "montly") {
            const isSameMonth =
              new Date(task.deadline)
                .toLocaleDateString()
                .split("/")
                .slice(1) ===
              new Date().toLocaleDateString().split("/").slice(1);
            return isSameMonth && <TaskCard task={task} key={i} />;
          } else if (selectedTimeRange === "anually") {
            const isSameYear =
              new Date(task.deadline)
                .toLocaleDateString()
                .split("/")
                .slice(2) ===
              new Date().toLocaleDateString().split("/").slice(2);
            return isSameYear && <TaskCard task={task} key={i} />;
          } else {
            return <TaskCard task={task} key={i} />;
          }
        })}
      </Accordion>
    </ScrollArea>
  );
}
