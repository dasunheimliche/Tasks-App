import { SubTask, Task } from "@/types";
import useTodoStore from "../stores/useTodoStore";
import DeleteAlertDialog from "./delete-alert-dialog";
import EditDialog from "./edit-dialog";
import DoneAlertDialog from "./done-alert-dialog";

import moment from "moment";
import "moment/locale/es";
import { Checkbox } from "./ui/checkbox";

moment.updateLocale("es", {
  monthsShort: "Ene.Feb._Mar.Abr._May_Jun_Jul._Ago.Sep.Oct.Nov._Dic.".split(
    "_"
  ),
});

export default function TaskCard({ task }: { task: Task }) {
  const { deleteTask, updateTask } = useTodoStore();

  function handleDeleteTask() {
    deleteTask(task.id);
  }

  function handleTaskDone() {
    const newTask = {
      id: task.id,
      title: task.title,
      state: task.state === "todo" ? ("complete" as const) : ("todo" as const),
      deadline: task.deadline,
      subtasks: task.subtasks,
    };

    updateTask(task.id, newTask);
  }

  return (
    <div className="w-full px-4 mt-1">
      <div className="flex flex-col gap-3">
        {task.subtasks.length === 1 ? (
          <div className="flex items-center space-x-2 subtask">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {task.subtasks[0].content}
            </label>
          </div>
        ) : (
          task.subtasks.map((subtask: SubTask, i: number) => {
            return (
              <div key={i} className="subtask">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {subtask.content}
                  </label>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="flex justify-end gap-3 mt-4">
        <DeleteAlertDialog onClick={handleDeleteTask} />
        <EditDialog task={task} />
        <DoneAlertDialog onClick={handleTaskDone} />
      </div>
    </div>
  );
}
