// import React from 'react'

import styles from "../css modules/Card.module.css";
import gif from "../assets/giphy-2.gif";

import { useDispatch } from "react-redux";
import { increment } from "../counter/counterSlice";
import { NavLink } from "react-router";

type CardTypes = {
  id: number;
  title: string;
  images: string;
  price: number;
};

function Card(props: CardTypes) {
  const dispatch = useDispatch();

  return (
    <div className="lg:w-1/4 w-1/3 p-2 flex flex-col cursor-pointer">
      <NavLink to={"/products/" + props.id}>
        <div className="w-full">
          {props.images ? (
            <img className="w-full" src={props.images[0]} alt="" />
          ) : (
            <div className="w-full bg-black flex items-center justify-center py-30">
              <img width={50} height={50} src={gif} alt="" />
            </div>
          )}
        </div>
        <div className="w-full lg:text-lg md:text-sm sm:text-[10px] text-[9px]">
          <h3>{props.title.toUpperCase()}</h3>
        </div>
        <div className="w-full lg:text-lg md:text-sm sm:text-[10px] text-[9px] mb-5 items-end">
          <h3 className={styles.cardText}>$ {props.price}</h3>
        </div>
      </NavLink>
      <button
        onClick={() => dispatch(increment())}
        type="button"
        className="mt-auto lg:py-2 lg:px-5 md:px-4 md:text-sm sm:text-xs text-[8px] px-3 py-1 bg-black text-white rounded-full w-fit mx-auto mb-5 cursor-pointer hover:bg-gray-400 hover:text-black transition-all duration-500"
      >
        Add to Cart
      </button>
      {/* <div className="py-2 px-5 mx-auto mt-auto mb-5 bg-black w-fit text-white rounded-full">
        <button className="mr-5 cursor-pointer" title="delete" type="button">
          <i className="bi bi-trash3-fill"></i>
        </button>
        <span className="mr-5">3</span>
        <button className="mr-1 cursor-pointer" title="add" type="button">
          <i className="bi bi-plus-circle"></i>
        </button>
        <button className="cursor-pointer" title="delete" type="button">
          <i className="bi bi-dash-circle"></i>
        </button>
      </div> */}
    </div>
  );
}

export default Card;
