import styles from "../css modules/Card.module.css";
// import gif from "../assets/giphy-2.gif";

import { useDispatch } from "react-redux";
import { addToCart } from "../slice/cartSlice";
import { NavLink } from "react-router-dom";
import Quantity from "./Quantity";
import { useSelector } from "react-redux";
import { increase, decrease, deleteItem } from "../slice/cartSlice";
import type { RootState } from "../store/store";
import Delete from "./Delete";
import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";

type CardTypes = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

function Card(props: CardTypes) {
  const items = useSelector((state: RootState) => state.cart.products);
  const cartItem = items.find((item) => item.id === props.id);
  const dispatch = useDispatch();
  const [isImageLoaded , setIsImageLoaded] = useState<boolean>(false)

  const handleClick = () => {
    dispatch(
      addToCart({
        id: props.id,
        price: props.price,
        thumbnail: props.thumbnail,
        title: props.title,
      })
    );
  };

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
    <div className="lg:w-1/4 w-1/3 p-2 flex flex-col cursor-pointer">
      <NavLink to={`/products/${props.id}`}>
        <div className="min-w-full md:h-[300px] h-[150px] flex justify-center items-center relative">
          {!isImageLoaded && (
            <Skeleton
              variant="rectangular"
              className="min-w-full min-h-full"
              sx={{ bgcolor: "grey.300" }}
            />
          )}
          <img
            className={`w-full object-cover transition-opacity duration-500 ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={props.thumbnail}
            alt={props.title}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>

        <div className="w-full lg:text-lg md:text-sm sm:text-[10px] text-[9px]">
          <h3>{props.title.toUpperCase()}</h3>
        </div>
        <div className="w-full lg:text-lg md:text-sm sm:text-[10px] text-[9px] mb-5 items-end">
          <h3 className={styles.cardText}>$ {props.price}</h3>
        </div>
      </NavLink>
      <div className="w-full flex mt-auto justify-center items-center">
        {!cartItem ? (
          <button
            onClick={handleClick}
            type="button"
            className="mt-auto flex justify-center items-center lg:py-2 lg:px-5 md:px-4 md:text-sm sm:text-xs text-[8px] px-3 py-1 bg-black text-white rounded-full w-fit mx-auto mb-5 cursor-pointer hover:bg-gray-400 hover:text-black transition-all duration-500"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex w-full justify-center items-center">
            <div className="w-fit mb-5">
              <Quantity
                item={{ id: cartItem.id, quantity: cartItem.quantity }}
                handleMinus={handleMinus}
                handlePlus={handlePlus}
              />
            </div>
            <div className="ml-3 mb-auto py-1 px-1">
              <Delete
                item={{ id: cartItem.id, quantity: cartItem.quantity }}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
