import { Task } from "../types";
import useTodoStore from "../stores/useTodoStore";
import { useEffect } from "react";

export default function useUpdateStateTasks() {
  const { taskList, updateTask } = useTodoStore();

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
}
