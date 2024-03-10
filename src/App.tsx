import { useState } from "react";
import Header from "@/components/header";
import DateTabs from "@/components/date-tabs";
import StateTabs from "@/components/state-tabs";
import TaskList from "@/components/task-list";

const taskList = [
  {
    id: 0,
    title: "ASDF",
    state: "todo",
    limit: "24/08/24",
    tasks: [
      { id: 0, content: "adf" },
      { id: 1, content: "cvb" },
    ],
  },
  {
    id: 1,
    title: "QWER",
    state: "complete",
    limit: "24/08/24",
    tasks: [
      { id: 0, content: "fjfghjfghj" },
      { id: 1, content: "3535345" },
    ],
  },
  {
    id: 2,
    title: "QWER",
    state: "todo",
    limit: "24/08/24",
    tasks: [
      { id: 0, content: "fghfgh" },
      { id: 1, content: "78678" },
    ],
  },
  {
    id: 3,
    title: "QWER",
    state: "overdue",
    limit: "24/08/24",
    tasks: [
      { id: 0, content: "fghfgh" },
      { id: 1, content: "78678" },
    ],
  },
];

const NoteApp = () => {
  const [tasks, setTasks] = useState(taskList);

  return (
    <main className="max-w-[80rem] ml-auto mr-auto relative">
      <Header />
      <DateTabs />
      <StateTabs />
      <div className="w-full flex">
        <TaskList state="todo" tasks={tasks} />
        <TaskList state="complete" tasks={tasks} />
        <TaskList state="overdue" tasks={tasks} />
      </div>
    </main>
  );
};

export default NoteApp;
