export interface SubTask {
  id: number;
  content: string;
}

export interface Task {
  id: number;
  title: string;
  state: "todo" | "complete" | "overdue";
  deadline: string;
  subtasks: SubTask[];
}
