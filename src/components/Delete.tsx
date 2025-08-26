import { useState } from "react";
import ModalPage from "./ModalPage";
interface DeleteProps {
  item: {
    id: string | number;
    quantity: number;
  };
  handleDelete: (id: number) => void;
}

export default function Delete({ item, handleDelete }: DeleteProps) {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const confirmDelete = () => {
    handleDelete(Number(item.id));
    handleCloseModal();
  };

  return (
    <div>
      <button
        title="delete"
        type="button"
        onClick={handleOpenModal}
        className="cursor-pointer"
      >
        <i className="bi bi-trash3"></i>
      </button>

      <ModalPage
        handleCloseModal={handleCloseModal}
        confirmDelete={confirmDelete}
        open={open}
        title={"Are you sure you want to delete this item?"}
      />
    </div>
  );
}
