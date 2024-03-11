import AddForm from "./add-form";

import { AlertDialog, AlertDialogTrigger } from "./ui/alert-dialog";

export default function AddButton() {
  return (
    <div className="absolute bottom-5 right-0">
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="rounded-[0.5rem] py-3 px-5 bg-zinc-100 text-zinc-800 hover:bg-zinc-400">
            Nueva +
          </div>
        </AlertDialogTrigger>
        <AddForm />
      </AlertDialog>
    </div>
  );
}
