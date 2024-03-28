import {
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

import Modal from "./ui/modal";
import ModalClose from "./ui/modal-close";
import ModalAccept from "./ui/modal-accept";

export default function DoneAlertDialog({
  onClick,
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <Modal>
      <AlertDialogHeader>
        <AlertDialogTitle>Estas seguro/a?</AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <ModalClose />
        <ModalAccept onClick={onClick} label="Confirmar" />
      </AlertDialogFooter>
    </Modal>
  );
}
