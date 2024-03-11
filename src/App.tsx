import Header from "./components/header";
import DateTabs from "./components/date-tabs";
import StateTabs from "./components/state-tabs";
import TaskList from "./components/task-list";
import useTodoStore from "./stores/useTodoStore";
import { Separator } from "./components/ui/separator";
// import { useState } from "react";

const NoteApp = () => {
  const { taskList } = useTodoStore();
  // const [time, setTime] = useState();
  // const [state, setState] = useState();

  console.log("TASKLIST: ", taskList);

  return (
    <main className="max-w-[80rem] max-h-[100dvh] h-[100dvh] ml-auto mr-auto relative bg-zinc-900 text-zinc-50 p-4 rounded-[1rem] border-zinc-50 border-[0.3rem]">
      <Header />
      <div className="bg-white rounded-[1rem] text-zinc-800 h-[80%] relative">
        <DateTabs />
        <Separator />
        <StateTabs />
        <Separator />
        <div className="flex items-stretch relative h-[84%]">
          <TaskList state="todo" tasks={taskList} key={1} />
          <TaskList state="complete" tasks={taskList} key={2} />
          <TaskList state="overdue" tasks={taskList} key={3} />
        </div>
      </div>
    </main>
  );
};

export default NoteApp;
