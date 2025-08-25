// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, deleteItem } from "../slice/cartSlice";
import type { RootState } from "../store/store";
import Quantity from "./Quantity";
import Delete from "./Delete";
import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";

function CartProduct() {
  const dispatch = useDispatch();
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

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
    <div
      className=" w-full
        max-[574px]:flex 
        max-[574px]:flex-row 
        max-[574px]:overflow-x-auto 
        max-[574px]:space-x-4 
        max-[574px]:p-4
        max-[574px]:scrollbar-thin 
        max-[574px]:scrollbar-thumb-gray-300 
        max-[574px]:scrollbar-track-transparent
        max-[1027px]:flex 
        max-[1027px]:flex-col"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="w-full max-[574px]:min-w-2/3 rounded-3xl bg-gray-100 mb-4 flex max-[1027px]:flex-col p-5 justify-between items-center max-[1027px]:gap-3"
        >
          <div className="w-1/2 max-[1027px]:w-full flex justify-around items-center">
            <div className="w-1/4 h-[100px] flex justify-center items-center max-[743px]:w-1/2">
              {!isImageLoaded && (
                <Skeleton
                  variant="rectangular"
                  className="w-full min-h-full"
                  sx={{ bgcolor: "grey.300" }}
                />
              )}
              <img
                src={item.image}
                onLoad={() => setIsImageLoaded(true)}
                alt={item.title}
              />
            </div>
            <div className="w-2/3">
              <h3 className="md:text-lg sm:text-md text-sm">
                {item.title.toUpperCase()}
              </h3>
              <h3 className="text-gray-500 md:text-md sm:text-sm text-xs">
                ${item.price}
              </h3>
            </div>
          </div>
          <div className="w-1/2 max-[1027px]:w-full flex items-center justify-around">
            <div className="w-fit">
              <Quantity
                item={item}
                handlePlus={handlePlus}
                handleMinus={handleMinus}
              />
            </div>
            <div className="w-fit overflow-auto scroll-auto md:text-md sm:text-sm text-xs">
              <h2>$ {item.totalPrice.toFixed(2)}</h2>
            </div>
            <div className="w-fit">
              <Delete item={item} handleDelete={handleDelete} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartProduct;
