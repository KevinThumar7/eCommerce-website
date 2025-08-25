import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface DeleteProps {
  item: {
    id: string | number;
    quantity: number;
  };
  handleDelete: (id: number) => void;
}

export default function Delete({ item, handleDelete }: DeleteProps) {
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const confirmDelete = () => {
    handleDelete(Number(item.id));
    handleCloseModal();
  };

  return (
    <div>
      {/* Delete icon button */}
      <button
        title="delete"
        type="button"
        onClick={handleOpenModal}
        className="cursor-pointer"
      >
        <i className="bi bi-trash3"></i>
      </button>

      {/* Modal for confirmation */}
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="confirm-delete-title"
        aria-describedby="confirm-delete-description"
      >
        <Box sx={style}>
          <Typography id="confirm-delete-title" variant="h6" component="h2">
            Confirm Deletion
          </Typography>
          <Typography id="confirm-delete-description" sx={{ mt: 2 }}>
            Are you sure you want to delete this item?
          </Typography>
          <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" onClick={handleCloseModal}>
              No
            </Button>
            <Button variant="contained" color="error" onClick={confirmDelete}>
              Yes
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
