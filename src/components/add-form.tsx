import { useState } from "react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function AddForm() {
  const [subTasks] = useState<any>([]);
  //   const [title, setTitle] = useState<string>("");
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

  return (
    <form>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Crear tarea</AlertDialogTitle>
          <Label htmlFor="title">Título</Label>
          <Input id="title" placeholder="Title" type="text" />
          <div className="w-full my-3 min-h-16 bg-zinc-100 rounded">
            {subTasks?.map((t: any) => {
              return <div data-testid="subtask">{t.content}</div>;
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
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction type="submit">Agregar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </form>
  );
}
