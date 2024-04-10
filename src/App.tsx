import Header from "./components/header";
import DateTabs from "./components/date-tabs";
import StateTabs from "./components/state-tabs";
import TaskList from "./components/task-list";
import { Separator } from "./components/ui/separator";
import useUpdateStateTasks from "./hooks/useUpdateStateTasks";

const NoteApp = () => {
  useUpdateStateTasks();

  return (
    <main className="max-w-[80rem] max-h-[100dvh] h-[100dvh] ml-auto mr-auto relative bg-black text-zinc-50 p-4 px-5 max-sm:px-2 rounded-[1rem] border-[#1d1d1d] border-[0.5rem] overflow-hidden">
      <Header />
      <div className="bg-white rounded-[1rem] text-[#181A1F] h-[80%] relative overflow-hidden">
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
