import React from "react";
import { NavLink } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import PaymentPage from "./PaymentPage";
import { clearCart } from "../slice/cartSlice";
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

function Cart() {
  const count = useSelector((state: RootState) => state.cart.products);
  const subTotal = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const confirmClearCart = () => {
    dispatch(clearCart());
    handleCloseModal();
  };

  return (
    <div className="w-screen container -mt-80">
      {count.length > 0 && (
        <div className="w-full">
          <div className="mt-2 w-full flex justify-around mb-5 lg:text-xl md:text-lg sm:text-md text-sm">
            <h1>Your Shopping Cart...</h1>
            <button
              type="button"
              onClick={handleOpenModal}
              className="lg:text-xl md:text-lg sm:text-md text-sm underline cursor-pointer"
            >
              ...Clear Shopping Cart
            </button>
          </div>
          <div className="w-full flex max-[574px]:flex-col justify-between">
            <div className="min-[999px]:w-2/3 w-1/2 max-[574px]:w-full min-[574px]:h-125 overflow-hidden overflow-y-auto">
              <CartProduct />
            </div>
            <div className="min-[830px]:w-[290px] w-[250px] max-[642px]:w-[225px] max-[574px]:w-2/3 max-[574px]:mx-auto max-[574px]:mt-5 bg-gray-100 rounded-2xl py-5 px-7 max-[642px]:py-3 max-[642px]:px-4 flex h-fit">
              <PaymentPage total={subTotal} />
            </div>
          </div>
        </div>
      )}

      {count.length === 0 && (
        <div className="w-1/2 mx-auto flex flex-col h-full mt-40 items-center">
          <span className="w-20 h-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
          </span>
          <h2 className="mt-10 text-2xl">Your Shopping Cart is Empty...</h2>
          <div className="mt-10">
            <span className="cursor-pointer md:py-2 md:px-8 py-1 px-4 text-sm md:text-lg bg-black text-white rounded-4xl hover:bg-gray-300 hover:text-black duration-600 transition-all">
              <NavLink to={"/products"}>Shop Now</NavLink>
            </span>
          </div>
        </div>
      )}

      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="clear-cart-title"
        aria-describedby="clear-cart-description"
      >
        <Box sx={style}>
          <Typography id="clear-cart-title" variant="h6" component="h2">
            Clear Cart
          </Typography>
          <Typography id="clear-cart-description" sx={{ mt: 2 }}>
            Are you sure you want to clear your shopping cart?
          </Typography>
          <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" onClick={handleCloseModal}>
              No
            </Button>
            <Button variant="contained" color="error" onClick={confirmClearCart}>
              Yes
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Cart;
