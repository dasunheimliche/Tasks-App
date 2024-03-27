import {
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

import Modal from "./ui/modal";
import ModalConfirm from "./ui/modal-confirm";
import ModalClose from "./ui/modal-close";

export default function DeleteAlertDialog({
  onClick,
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <Modal>
      <AlertDialogHeader>
        <AlertDialogTitle>Estas seguro/a?</AlertDialogTitle>
        <AlertDialogDescription>
          Esta acción no se puede deshacer.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <ModalClose />
        <ModalConfirm onClick={onClick} />
      </AlertDialogFooter>
    </Modal>
  );
}
