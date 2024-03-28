import { SubTask, Task } from "@/types";
import FormSubtask from "./form-subtask";
import useTodoStore from "../stores/useTodoStore";
import { Button } from "./ui/button";

import { Input } from "./ui/input";
import { useState } from "react";

import Modal from "./ui/modal";
import FormLabel from "./ui/form-label";
import ModalClose from "./ui/modal-close";
import InputGroup from "./ui/input-group";
import ModalAccept from "./ui/modal-accept";

export default function EditDialog({ task }: { task: Task }) {
  const { updateTask } = useTodoStore();

  const [title, setTitle] = useState<string>(task.title);
  const [subTasks, setSubtasks] = useState<SubTask[]>(task.subtasks);
  const [deadline, setDeadline] = useState<string>(task.deadline);

  const [subtask, setSubtask] = useState<string>("");

  function handleAddSubtask() {
    const task: SubTask = {
      id: subTasks.length === 0 ? 0 : subTasks.length + 1,
      content: subtask,
      checked: false,
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
      state: task.state,
      deadline,
      subtasks: subTasks,
    };

    updateTask(task.id, newTask);
  }

  function handleRemoveSubtask(id: number) {
    const updatedList = subTasks.filter(
      (subtask: SubTask) => subtask.id !== id
    );
    setSubtasks(updatedList);
  }

  return (
    <Modal>
      <form className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg text-slate-900">Editar tarea</h3>
        <InputGroup>
          <FormLabel htmlFor="title">TITULO</FormLabel>
          <Input
            id="title"
            className="h-10 border-0 border-b-[1px] border-slate-300 rounded-none focus-visible:ring-0 shadow-none"
            placeholder="Title"
            type="text"
            onChange={handleChangeTitle}
            value={title}
          />
        </InputGroup>
        <InputGroup>
          <FormLabel>SUBTAREAS</FormLabel>
          <div className="w-full min-h-20 bg-slate-100 rounded-[0.25rem] outline-[3px] outline-slate-200 p-3 py-4">
            {subTasks?.map((st: SubTask, i: number) => {
              return (
                <FormSubtask
                  key={i}
                  subtask={st}
                  onRemoveSubtask={handleRemoveSubtask}
                />
              );
            })}
          </div>
        </InputGroup>
        <InputGroup>
          <FormLabel htmlFor="subtask">AGREGAR SUBTAREA</FormLabel>
          <div className="flex">
            <Input
              id="subtask"
              type="text"
              placeholder="Tarea"
              onChange={handleChangeSubtask}
              value={subtask}
              className="h-10 border-0 border-b-[1px] border-slate-300 rounded-none focus-visible:ring-0 shadow-none"
              minLength={2}
            />
            <Button
              className="h-10 border border-[#bfffe8] bg-[#bfffe8] text-zinc-700 text-[1.4rem] rounded-none shadow-none hover:bg-[#181A1F] hover:text-zinc-50 relative translate-y-[1px]"
              type="button"
              onClick={handleAddSubtask}
            >
              +
            </Button>
          </div>
        </InputGroup>
        <InputGroup>
          <FormLabel>DEADLINE: </FormLabel>
          <input
            type="date"
            className="w-1/2"
            data-testid="calendar"
            onChange={handleChangeDate}
            value={deadline?.toString()}
          />
        </InputGroup>
        <div className="flex justify-end mt-3 gap-2">
          <ModalClose />
          <ModalAccept onClick={handleSubmit} label="Confirmar" />
        </div>
      </form>
    </Modal>
  );
}
