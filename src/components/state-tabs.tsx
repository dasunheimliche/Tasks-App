import { cn } from "../lib/utils";
import useTodoStore from "../stores/useTodoStore";
import useIsSmallScreen from "@/hooks/useIsFullScreen";

export default function StateTabs() {
  const { selectedTaskState, setSelectedTaskState } = useTodoStore();
  const isSmallScreen = useIsSmallScreen();

  return (
    <ul className="flex justify-around items-center gap-6 h-12 px-5 font-semibold">
      <button
        className={cn("", isSmallScreen ? "" : "")}
        onClick={() => setSelectedTaskState("todo")}
      >
        <li>Por hacer</li>
      </button>
      <button
        className={cn("", isSmallScreen ? "" : "")}
        onClick={() => setSelectedTaskState("completed")}
      >
        <li>Completados</li>
      </button>
      <button
        className={cn("", isSmallScreen ? "" : "")}
        onClick={() => setSelectedTaskState("overdue")}
      >
        <li>Vencidos</li>
      </button>
    </ul>
  );
}
