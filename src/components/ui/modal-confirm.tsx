import { AlertDialogAction } from "./alert-dialog";

export default function ModalConfirm({
  onClick,
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <AlertDialogAction
      className="font-semibold shadow-none rounded-[1.2rem] px-6 py-5 bg-[#bfffe8] hover:bg-[#181A1F]  text-zinc-800 hover:text-zinc-50"
      onClick={onClick}
    >
      Confirmar
    </AlertDialogAction>
  );
}
