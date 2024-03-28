import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import useTodoStore from "@/stores/useTodoStore";

export default function DateTabs() {
  const { selectedTimeRange, setSelectedTimeRange } = useTodoStore();

  return (
    <ul className="flex justify-end items-center gap-3 h-16 px-5">
      <li>
        <TabButton
          isSelected={selectedTimeRange === "all"}
          label="Todo"
          onClick={() => setSelectedTimeRange("all")}
        />
      </li>
      <li>
        <TabButton
          isSelected={selectedTimeRange === "today"}
          label="Hoy"
          onClick={() => setSelectedTimeRange("today")}
        />
      </li>
      <li>
        <TabButton
          isSelected={selectedTimeRange === "weekly"}
          label="Semana"
          onClick={() => setSelectedTimeRange("weekly")}
        />
      </li>
      <li>
        <TabButton
          isSelected={selectedTimeRange === "montly"}
          label="Mes"
          onClick={() => setSelectedTimeRange("montly")}
        />
      </li>
      <li>
        <TabButton
          isSelected={selectedTimeRange === "anually"}
          label="Año"
          onClick={() => setSelectedTimeRange("anually")}
        />
      </li>
    </ul>
  );
}

interface TabButtonProps extends React.ComponentProps<typeof Button> {
  label: string;
  isSelected: boolean;
}

function TabButton({ label, isSelected, ...props }: TabButtonProps) {
  return (
    <Button
      className={cn(
        "font-semibold shadow-none rounded-[1.2rem] px-6 py-5 bg-[#F0FBF7] hover:bg-[#181A1F]  text-zinc-800 hover:text-zinc-50",
        isSelected && "bg-[#181A1F] text-slate-50"
      )}
      {...props}
    >
      {label}
    </Button>
  );
}
