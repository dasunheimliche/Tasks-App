import AddButton from "./add-button";

export default function Header() {
  return (
    <header className="flex items-center h-40 outline outline-zinc-200 pl-10 relative">
      <h1>Task Manager.</h1>
      <AddButton />
    </header>
  );
}
