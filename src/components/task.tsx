export default function Task({ task }: any) {
  return (
    <div>
      <div className="flex justify-between">
        <h3>{task.title}</h3>
        <button>Fijar</button>
      </div>

      {task.tasks.map((task: any) => {
        return <div>{task.content}</div>;
      })}
      <div className="flex justify-end gap-3">
        <div>Eliminar</div>
        <button>Completado</button>
      </div>
    </div>
  );
}
