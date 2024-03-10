import AddForm from "./add-form";

import { AlertDialog, AlertDialogTrigger } from "./ui/alert-dialog";

export default function AddButton() {
  return (
    <div className="absolute bottom-5 right-5">
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AddForm />
      </AlertDialog>
    </div>
  );
}
