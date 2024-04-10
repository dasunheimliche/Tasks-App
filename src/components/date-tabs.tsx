import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import useTodoStore from "@/stores/useTodoStore";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import useIsSmallScreen from "@/hooks/useIsFullScreen";

export default function DateTabs() {
  const { selectedTimeRange, setSelectedTimeRange } = useTodoStore();
  const isSmallScreen = useIsSmallScreen();

  if (isSmallScreen)
    return (
      <Carousel className="w-full relative sm:pr-5">
        <CarouselContent className="flex  items-center sm:justify-end sm:gap-1 max-sm:gap-7 h-16 pl-2">
          <CarouselItem className="max-sm:basis-1/5 sm:basis-1/12">
            <TabButton
              isSelected={selectedTimeRange === "all"}
              label="Todo"
              onClick={() => setSelectedTimeRange("all")}
            />
          </CarouselItem>
          <CarouselItem className="max-sm:basis-1/5 sm:basis-1/12">
            <TabButton
              isSelected={selectedTimeRange === "today"}
              label="Hoy"
              onClick={() => setSelectedTimeRange("today")}
            />
          </CarouselItem>
          <CarouselItem className="max-sm:basis-1/5 sm:basis-1/12">
            <TabButton
              isSelected={selectedTimeRange === "weekly"}
              label="Semana"
              onClick={() => setSelectedTimeRange("weekly")}
            />
          </CarouselItem>
          <CarouselItem className="max-sm:basis-1/5 sm:basis-1/12">
            <TabButton
              isSelected={selectedTimeRange === "montly"}
              label="Mes"
              onClick={() => setSelectedTimeRange("montly")}
            />
          </CarouselItem>
          <CarouselItem className="max-sm:basis-1/5 max-sm:mr-20 sm:basis-1/12 sm:mr-3">
            <TabButton
              isSelected={selectedTimeRange === "anually"}
              label="Año"
              onClick={() => setSelectedTimeRange("anually")}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    );

  if (!isSmallScreen) {
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
}

interface TabButtonProps extends React.ComponentProps<typeof Button> {
  label: string;
  isSelected: boolean;
}

function TabButton({ label, isSelected, ...props }: TabButtonProps) {
  return (
    <Button
      className={cn(
        "font-semibold shadow-none rounded-[1.2rem]  w-[5.5rem] bg-[#d7f8eb] hover:bg-[#181A1F]  text-zinc-800 hover:text-zinc-50",
        isSelected && "bg-[#181A1F] text-slate-50"
      )}
      {...props}
    >
      {label}
    </Button>
  );
}
