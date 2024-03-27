import { Button } from "./ui/button";

export default function DateTabs() {
  return (
    <ul className="flex justify-end items-center gap-3 h-16 px-5">
      <li>
        <TabButton label="Hoy" />
      </li>
      <li>
        <TabButton label="Semana" />
      </li>
      <li>
        <TabButton label="Mes" />
      </li>
      <li>
        <TabButton label="Año" />
      </li>
    </ul>
  );
}

function TabButton({ label }: { label: string }) {
  return (
    <Button className="font-semibold shadow-none rounded-[1.2rem] px-6 py-5 bg-[#F0FBF7] hover:bg-[#181A1F]  text-zinc-800 hover:text-zinc-50">
      {label}
    </Button>
  );
}
