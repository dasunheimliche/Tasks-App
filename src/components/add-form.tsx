import { useState } from "react";
import useTodoStore from "../stores/useTodoStore";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";

import Modal from "./ui/modal";
import ModalClose from "./ui/modal-close";
import ModalConfirm from "./ui/modal-confirm";
import FormLabel from "./ui/form-label";
import FormSubtask from "./form-subtask";
import InputGroup from "./ui/input-group";

var fechaActual = new Date();

// Obtiene el año, mes y día
var año = fechaActual.getFullYear();
var mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2); // Suma 1 al mes, ya que los meses se indexan desde 0
var dia = ("0" + fechaActual.getDate()).slice(-2);

// Formatea la fecha en "yyyy/mm/dd"
var fechaFormateada = año + "-" + mes + "-" + dia;

export default function AddForm() {
  const { taskList, addTask } = useTodoStore();

  const [title, setTitle] = useState<string>("");
  const [subTasks, setSubTasks] = useState<any>([]);
  const [deadline, setDeadline] = useState<string>(fechaFormateada);

  const [subtask, setSubtask] = useState<string>("");

  function handleAddSubtask() {
    if (subtask.length < 3) return;

    const task = {
      id: subTasks.length === 0 ? 0 : subTasks[subTasks.length - 1].id + 1,
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
    if (!deadline) return;
    if (subTasks.length < 1) return;

    const newTask = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      title,
      state: "todo" as const,
      deadline,
      subtasks: subTasks,
    };

    addTask(newTask);

    setTitle("");
    setDeadline("");
    setSubTasks([]);
  }

  function handleCancel() {
    setTitle("");
    setDeadline("");
    setSubTasks([]);
  }

  return (
    <Modal>
      <form className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg text-slate-900">Crear tarea</h3>
        <InputGroup>
          <FormLabel htmlFor="title">TITULO</FormLabel>
          <Input
            id="title"
            className="h-10 border-0 border-b-[1px] border-slate-300 rounded-none focus-visible:ring-0 shadow-none"
            placeholder="Title"
            type="text"
            onChange={handleChangeTitle}
            value={title}
            required
          />
        </InputGroup>
        <InputGroup>
          <FormLabel>SUBTAREAS</FormLabel>
          <div className="w-full min-h-20 bg-slate-100 rounded-[0.25rem] outline-[3px] outline-slate-200 p-3 py-4">
            {subTasks?.map((t: any, i: number) => {
              return <FormSubtask key={i} content={t.content} />;
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
            value={deadline}
            required
          />
        </InputGroup>
        <div className="flex justify-end mt-3 gap-2">
          <ModalClose onClick={handleCancel} />
          <ModalConfirm onClick={handleSubmit} />
        </div>
      </form>
    </Modal>
  );
}
