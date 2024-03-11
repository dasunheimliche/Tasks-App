import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Task } from "@/types";

interface TodoStore {
  taskList: Task[];
  addTask: (task: Task) => void;
  updateTask: (id: number, updatedTask: Partial<Task>) => void;
  deleteTask: (id: number) => void;
}

const useTodoStore = create<TodoStore>()(
  persist<TodoStore>(
    (set) => ({
      taskList: [],
      addTask: (task) =>
        set((state) => ({ taskList: [...state.taskList, task] })),
      updateTask: (id, updatedTask) =>
        set((state) => ({
          taskList: state.taskList.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          taskList: state.taskList.filter((task) => task.id !== id),
        })),
    }),
    {
      name: "todo-store",
    }
  )
);

export default useTodoStore;
