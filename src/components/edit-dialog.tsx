import { SubTask, Task } from "@/types";
import useTodoStore from "../stores/useTodoStore";
import Subtask from "./subtask";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { SquarePen } from "lucide-react";

export default function EditDialog({ task }: { task: Task }) {
  const { updateTask } = useTodoStore();

  const [title, setTitle] = useState<string>(task.title);
  const [subTasks] = useState<SubTask[]>(task.subtasks);
  const [deadline, setDeadline] = useState<string>(task.deadline);

  const [subtask, setSubtask] = useState<string>("");

  function handleAddSubtask() {
    const task = {
      id: subTasks.length === 0 ? 0 : subTasks.length + 1,
      content: subtask,
    };

    subTasks.push(task);
    setSubtask("");
  }

  function handleChangeSubtask(e: React.ChangeEvent<HTMLInputElement>) {
    setSubtask(e.target.value);
  }

  function handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function handleChangeDate(e: React.ChangeEvent<HTMLInputElement>) {
    setDeadline(e.target.value.split("T")[0]);
  }

  function handleSubmit() {
    const newTask = {
      id: task.id,
      title,
      state: "todo" as const,
      deadline,
      subtasks: subTasks,
    };

    updateTask(task.id, newTask);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <SquarePen
          data-testid="edit"
          className="hover:text-orange-400 cursor-pointer h-5"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <h3>Editar tarea</h3>
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          placeholder="Title"
          type="text"
          onChange={handleChangeTitle}
          value={title}
        />
        <div className="w-full my-3 min-h-16 bg-zinc-100 rounded p-3">
          {subTasks?.map((t: SubTask, i: number) => {
            return <Subtask key={i} content={t.content} />;
          })}
        </div>
        <div className="w-full flex">
          <Input
            type="text"
            placeholder="Tarea"
            onChange={handleChangeSubtask}
            value={subtask}
          />
          <Button type="button" onClick={handleAddSubtask}>
            +
          </Button>
        </div>
        <div>
          Deadline:{" "}
          <input
            value={deadline?.toString()}
            type="date"
            data-testid="calendar"
            onChange={handleChangeDate}
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleSubmit}>Confirmar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
