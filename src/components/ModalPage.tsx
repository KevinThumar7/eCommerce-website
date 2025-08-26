import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ConfirmDeleteModalProps {
  open: boolean;
  handleCloseModal: () => void;
  confirmDelete: () => void;
  title: string;
}

const ModalPage = ({
  open,
  handleCloseModal,
  confirmDelete,
  title,
}: ConfirmDeleteModalProps) => {
  return (
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
          {title}
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
  );
};

export default ModalPage;
