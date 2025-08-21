// import React from 'react'

import styles from "../css modules/Card.module.css";
import gif from "../assets/giphy-2.gif";

type CardTypes = {
  id: number;
  title: string;
  images: string;
  price: number;
};

function Card(props: CardTypes) {
  return (
    <div className="w-1/4 p-2 flex flex-col cursor-pointer">
      <div className="w-full">
        {props.images ? (
          <img className="w-full" src={props.images[0]} alt="" />
        ) : (
          <div className="w-full bg-black flex items-center justify-center py-30">
            <img width={50} height={50} src={gif} alt="" />
          </div>
        )}
      </div>
      <div className="w-full">
        <h3>{props.title.toUpperCase()}</h3>
      </div>
      <div className="w-full mb-5 items-end">
        <h3 className={styles.cardText}>$ {props.price}</h3>
      </div>
      <button className="mt-auto py-2 px-5 bg-black text-white rounded-full w-fit mx-auto mt-5 mb-5 cursor-pointer hover:bg-gray-400 hover:text-black transition-all duration-500">
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
