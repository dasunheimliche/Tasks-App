import { CheckedState } from "@radix-ui/react-checkbox";

export interface SubTask {
  id: number;
  content: string;
  checked: CheckedState;
}

export interface Task {
  id: number;
  title: string;
  state: "todo" | "completed" | "overdue";
  deadline: string;
  subtasks: SubTask[];
}

export type TimeRange = "all" | "today" | "weekly" | "montly" | "anually";
export type TaskState = "todo" | "completed" | "overdue";
