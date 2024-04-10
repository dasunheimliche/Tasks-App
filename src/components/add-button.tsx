import AddForm from "./add-form";
import ModalTrigger from "./ui/modal-trigger";

export default function AddButton() {
  return (
    <div className="absolute bottom-5 right-0">
      <ModalTrigger modal={<AddForm />}>
        <div className="rounded-[0.5rem] py-3 px-5 bg-[#E95440] text-zinc-50 hover:bg-[#db5a49]">
          Nueva +
        </div>
      </ModalTrigger>
    </div>
  );
}
