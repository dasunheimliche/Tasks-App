import { TaskState } from "../types";
import { cn } from "../lib/utils";
import useTodoStore from "../stores/useTodoStore";
import useIsSmallScreen from "../hooks/useIsFullScreen";

export default function StateTabs() {
  const { setSelectedTaskState, selectedTaskState } = useTodoStore();
  const isSmallScreen = useIsSmallScreen();

  return (
    <ul className="flex justify-around items-center gap-6 h-12 px-5 font-semibold max-sm:text-[0.8rem]">
      <StateButton
        isSmallScreen={isSmallScreen}
        isSelected={selectedTaskState === "todo"}
        label={"Pendientes"}
        onClick={setSelectedTaskState}
      />
      <StateButton
        isSmallScreen={isSmallScreen}
        isSelected={selectedTaskState === "completed"}
        label={"Completados"}
        onClick={setSelectedTaskState}
      />
      <StateButton
        isSmallScreen={isSmallScreen}
        isSelected={selectedTaskState === "overdue"}
        label={"Vencidos"}
        onClick={setSelectedTaskState}
      />
    </ul>
  );
}

function StateButton({
  isSmallScreen,
  isSelected,
  label,
  onClick,
}: {
  isSmallScreen: boolean;
  isSelected: boolean;
  label: "Pendientes" | "Completados" | "Vencidos";
  onClick: (state: TaskState) => void;
}) {
  let state: TaskState;

  if (label === "Pendientes") {
    state = "todo";
  } else if (label === "Completados") {
    state = "completed";
  } else if (label === "Vencidos") {
    state = "overdue";
  }

  return (
    <button
      className={cn(
        "flex flex-col justify-center  items-center",
        isSmallScreen ? "" : ""
      )}
      onClick={() => onClick(state)}
    >
      <li>{label}</li>
      <div
        className={cn(
          "h-[1px] w-4 bg-gray-400 hidden",
          isSmallScreen && isSelected && "h-[1px] w-4 bg-gray-400 block"
        )}
      ></div>
    </button>
  );
}
