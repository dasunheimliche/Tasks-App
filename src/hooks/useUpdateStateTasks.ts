import { Task } from "../types";
import useTodoStore from "../stores/useTodoStore";
import { useEffect } from "react";

export default function useUpdateStateTasks() {
  const { taskList, updateTask } = useTodoStore();

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Establecer la hora a las 00:00:00

    taskList.forEach((task: Task) => {
      const deadline = new Date(task.deadline);
      deadline.setHours(0, 0, 0, 0); // Establecer la hora a las 00:00:00
      const extendedDeadline = new Date(deadline);
      extendedDeadline.setDate(extendedDeadline.getDate() + 2); // Añadir 24 horas a deadline

      if (today >= extendedDeadline && task.state !== "overdue") {
        updateTask(task.id, { ...task, state: "overdue" });
      }
    });
  }, [taskList, updateTask]);
}
