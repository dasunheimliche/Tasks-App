import Header from "./components/header";
import DateTabs from "./components/date-tabs";
import StateTabs from "./components/state-tabs";
import TaskList from "./components/task-list";
import { Separator } from "./components/ui/separator";
import { useEffect } from "react";
import useTodoStore from "./stores/useTodoStore";
import useUpdateStateTasks from "./hooks/useUpdateStateTasks";
import { Task } from "./types";

const NoteApp = () => {
  const { taskList, updateTask } = useTodoStore();
  useUpdateStateTasks();

  useEffect(() => {
    taskList.forEach((task: Task) => {
      const deadline = new Date(task.deadline);
      const today = new Date();
      const isOverdue =
        new Date(
          deadline.getFullYear(),
          deadline.getMonth(),
          deadline.getDay()
        ).getTime() >
        new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDay()
        ).getTime() +
          24 * 60 * 60 * 1000;

      if (isOverdue) {
        const copy = { ...task };
        copy.state = "overdue";
        updateTask(task.id, copy);
      }
    });
  }, []);

  return (
    <main className="max-w-[80rem] max-h-[100dvh] h-[100dvh] ml-auto mr-auto relative bg-zinc-900 text-zinc-50 p-4 rounded-[1rem] border-zinc-50 border-[0.3rem] overflow-hidden">
      <Header />
      <div className="bg-white rounded-[1rem] text-zinc-800 h-[80%] relative overflow-hidden">
        <DateTabs />
        <Separator />
        <StateTabs />
        <Separator />
        <div className="flex items-stretch relative h-[84%] max-sm:flex-col">
          <TaskList state="todo" key={1} />
          <TaskList state="completed" key={2} />
          <TaskList state="overdue" key={3} />
        </div>
      </div>
    </main>
  );
};

export default NoteApp;
