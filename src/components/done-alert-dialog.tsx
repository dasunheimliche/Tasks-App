import {
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

import Modal from "./ui/modal";
import ModalClose from "./ui/modal-close";
import ModalConfirm from "./ui/modal-confirm";

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
        <ModalConfirm onClick={onClick} />
      </AlertDialogFooter>
    </Modal>
  );
}
