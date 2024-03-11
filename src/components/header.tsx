import AddButton from "./add-button";

export default function Header() {
  return (
    <header className="flex items-center h-40 pl-10 relative ">
      <h1 className=" font-semibold text-[2rem]">Task Manager</h1>
      <AddButton />
    </header>
  );
}
