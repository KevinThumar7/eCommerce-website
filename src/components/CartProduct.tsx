// import React from 'react'

import { useContext } from "react";
import { DataContext } from "../context/DataContextTS";

function CartProduct() {
  const { items, loading } = useContext(DataContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-screen container">
      {items.map((item) => {
        return (
          <div className="w-2/3 rounded-3xl bg-gray-100 mb-4 flex p-5 justify-around items-center">
            <div className="w-1/8">
              <img src={item.images[0]} alt="" />
            </div>
            <div className="w-2/5">
              <h3>{item.title.toUpperCase()}</h3>
              <h3 className="text-gray-500">{item.price}</h3>
            </div>
            <div className="border-gray-500 border rounded-xl w-fit">
              <input
                className="w-13 px-2"
                type="number"
                name="quantity"
                id="quantity"
                title="quantity"
              />
            </div>
            <div>
              <h2>Subtotal</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartProduct;
