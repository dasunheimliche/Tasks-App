import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Task, TaskState, TimeRange } from "../types";

interface TodoStore {
  taskList: Task[];
  selectedTimeRange: TimeRange;
  selectedTaskState: TaskState;
  setSelectedTimeRange: (range: TimeRange) => void;
  setSelectedTaskState: (state: TaskState) => void;
  addTask: (task: Task) => void;
  updateTask: (id: number, updatedTask: Partial<Task>) => void;
  deleteTask: (id: number) => void;
}

const useTodoStore = create<TodoStore>()(
  persist<TodoStore>(
    (set) => ({
      taskList: [],
      selectedTimeRange: "all",
      selectedTaskState: "todo",
      setSelectedTimeRange: (range: TimeRange) =>
        set({ selectedTimeRange: range }),
      setSelectedTaskState: (state: TaskState) =>
        set({ selectedTaskState: state }),
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
