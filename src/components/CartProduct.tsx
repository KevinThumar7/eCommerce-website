// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, deleteItem } from "../counter/cartSlice";
import type { RootState } from "../store/store";
import Quantity from "./Quantity";

function CartProduct() {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.cart.products);

  const handlePlus = (itemId: number) => {
    dispatch(increase({ id: itemId }));
  };

  const handleMinus = (itemId: number) => {
    dispatch(decrease({ id: itemId }));
  };

  const handleDelete = (itemId: number) => {
    dispatch(deleteItem({ id: itemId }));
  };

  return (
    <div className="w-full">
      {items.map((item) => (
        <div
          key={item.id}
          className="w-2/3 rounded-3xl bg-gray-100 mb-4 flex p-5 justify-around items-center"
        >
          <div className="w-1/8">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="w-2/5">
            <h3>{item.title.toUpperCase()}</h3>
            <h3 className="text-gray-500">${item.price}</h3>
          </div>
          <Quantity
            item={item}
            handlePlus={handlePlus}
            handleMinus={handleMinus}
          />
          <div className="w-1/8 overflow-auto  scroll-auto">
            <h2>$ {item.totalPrice.toFixed(2)}</h2>
          </div>
          <div className="w-fit">
            <button
              onClick={() => handleDelete(Number(item.id))}
              className="cursor-pointer"
            >
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartProduct;
