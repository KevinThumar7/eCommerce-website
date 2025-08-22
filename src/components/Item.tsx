// import React from 'react'

import { NavLink, useParams } from "react-router";
import { useContext } from "react";
import { DataContext } from "../context/DataContextTS";
import { useDispatch } from "react-redux";
import { increment } from "../counter/counterSlice";

function Item() {
  const dispatch = useDispatch();
  const { items, loading } = useContext(DataContext);
  const param = useParams();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  console.log(items);

  return (
    <div className="container h-full">
      <h3 className="underline text-xl max-sm:text-[12px] mt-2">
        <i className="bi bi-arrow-left mr-2 mt-2"></i>
        <NavLink to={"/products"}>Back</NavLink>
      </h3>
      {items
        .filter((item) => item.id == Number(param.id!))
        .map((item) => {
          return (
            <div
              key={item.id}
              className="w-full h-1/4 justify-center items-center mt-5 flex"
            >
              <div className="w-[1000px] justify-center items-center flex max-md:flex-col">
                <div className="w-1/2 mr-2">
                  <img className="w-full h-full" src={item.images[0]} alt="" />
                </div>
                <div className="w-1/2 max-md:w-2/3 max-md:mt-5 max-sm:w-full">
                  <div>
                    <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-md">
                      {item.title.toUpperCase()}
                    </h1>
                  </div>
                  <div>
                    <h3 className="mt-2 mb-5 max-sm:text-sm text-lg text-gray-400">
                      $ {item.price}
                    </h3>
                  </div>
                  <div>
                    <h4 className="text-xs max-sm:text-[10px] text-black">
                      {item.description}
                    </h4>
                  </div>
                  <div>
                    <button
                      onClick={() => dispatch(increment())}
                      className="py-2 px-5 max-md:text-sm max-sm:text-[10px] bg-black text-white rounded-full cursor-pointer mt-5 mb-5 hover:bg-gray-600 transition-all duration-500"
                      type="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="bg-blue-100 p-5 rounded-2xl">
                    <h4 className="mb-2">Characteristics</h4>
                    <div className="w-full flex text-xs flex-col">
                      <h5 className="flex text-gray-700">
                        Brand: <span className="ml-auto">{item.brand}</span>
                      </h5>
                      <h5 className="flex text-gray-700">
                        Return Policy:{" "}
                        <span className="ml-auto text-red-600">
                          {item.returnPolicy}
                        </span>
                      </h5>
                      <h5 className="flex text-gray-700">
                        Ratings: <span className="ml-auto">{item.rating}</span>
                      </h5>
                      <h5 className="flex text-gray-700">
                        Shipping:{" "}
                        <span className="ml-auto">
                          {item.shippingInformation}
                        </span>
                      </h5>
                      <h5 className="flex text-gray-700">
                        Category:{" "}
                        <span className="ml-auto">{item.category}</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Item;
