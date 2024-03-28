import Header from "./components/header";
import DateTabs from "./components/date-tabs";
import StateTabs from "./components/state-tabs";
import TaskList from "./components/task-list";
import { Separator } from "./components/ui/separator";

const NoteApp = () => {
  return (
    <main className="max-w-[80rem] max-h-[100dvh] h-[100dvh] ml-auto mr-auto relative bg-zinc-900 text-zinc-50 p-4 rounded-[1rem] border-zinc-50 border-[0.3rem]">
      <Header />
      <div className="bg-white rounded-[1rem] text-zinc-800 h-[80%] relative">
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
