import Task from "./task";

export default function TaskList({ tasks, state }: { tasks: any; state: any }) {
  return (
    <div className="w-[33.6666666666%] flex flex-col px-3 mt-5 gap-3">
      {tasks.map((task: any) => {
        if (task.state !== state) return;

        return <Task task={task} />;
      })}
    </div>
  );
}
