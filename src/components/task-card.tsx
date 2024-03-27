import { SubTask, Task } from "@/types";
import useTodoStore from "../stores/useTodoStore";
import DeleteAlertDialog from "./delete-alert-dialog";
import EditDialog from "./edit-dialog";
import DoneAlertDialog from "./done-alert-dialog";

import moment from "moment";
import "moment/locale/es";
import { Checkbox } from "./ui/checkbox";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import ModalTrigger from "./ui/modal-trigger";
import { Bomb, SquareCheckBig, SquarePen } from "lucide-react";

moment.locale("es");

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
    <TaskContainer id={task.id}>
      <TaskHeader title={task.title} deadline={task.deadline} />
      <TaskContent>
        <div className="flex flex-col gap-3">
          {task.subtasks.map((subtask: SubTask) => {
            return <Subtask subtask={subtask} key={subtask.id} />;
          })}
        </div>
        <div className="flex justify-end gap-3 mt-4">
          <ModalTrigger
            modal={<DeleteAlertDialog onClick={handleDeleteTask} />}
          >
            <Bomb
              data-testid="delete"
              className="hover:text-rose-600 cursor-pointer h-5"
            />
          </ModalTrigger>
          <ModalTrigger modal={<EditDialog task={task} />}>
            <SquarePen
              data-testid="edit"
              className="hover:text-orange-400 cursor-pointer h-5"
            />
          </ModalTrigger>
          <ModalTrigger modal={<DoneAlertDialog onClick={handleTaskDone} />}>
            <SquareCheckBig
              data-testid="done"
              className="hover:text-emerald-600 cursor-pointer h-5"
            />
          </ModalTrigger>
          {/* <DoneAlertDialog onClick={handleTaskDone} /> */}
        </div>
      </TaskContent>
    </TaskContainer>
  );
}

/** SUB COMPONENTS */

function TaskContainer({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) {
  return (
    <AccordionItem
      value={`item-${id}`}
      className="task max-w-full border border-zinc-300 rounded-md mb-2 bg-[#F0FBF7]"
    >
      {children}
    </AccordionItem>
  );
}

function TaskHeader({ title, deadline }: { title: string; deadline: string }) {
  return (
    <AccordionTrigger className="font-bold text-zinc-700">
      <div className="flex justify-between w-full px-4" data-testid="task-card">
        <h3 data-testid="task-title">{title}</h3>
        <div data-testid="deadline">{moment(deadline).format("LL")}</div>
      </div>
    </AccordionTrigger>
  );
}

function TaskContent({ children }: { children: React.ReactNode }) {
  return (
    <AccordionContent data-testid="open-task-card">
      <div className="w-full px-4 mt-1">{children}</div>
    </AccordionContent>
  );
}

function Subtask({ subtask }: { subtask: SubTask }) {
  return (
    <div className="subtask">
      <div className="flex items-center space-x-2 cursor-pointer">
        <Checkbox id={`terms-${subtask.id}`} />
        <label
          htmlFor={`terms-${subtask.id}`}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {subtask.content}
        </label>
      </div>
    </div>
  );
}
