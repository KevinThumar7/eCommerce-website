// import React from 'react'

import { useState } from "react";
import Card from "./Card";

import { useContext } from "react";
import { DataContext } from "../context/DataContextTS";

type Products = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

function Products() {
  const { items, loading } = useContext(DataContext);
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen mt-[-50px]">
        <div className="w-12 h-12 border-4 border-black-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const filteredData = items
    .filter((item) =>
      item.title.toLowerCase().includes(searchProduct.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === "lowToHigh") return a.price - b.price;
      if (filter === "highToLow") return b.price - a.price;
      return 0;
    });

  return (
    <section className="container mt-[80px]">
      <div className="mt-15">
        <div className="w-full text-center">
          <h1 className="mb-10 md:text-sm text-[10px]">COLLECTIONS...</h1>
        </div>
        <div className="flex justify-around">
          <div>
            <span>
              <i className="lg:text-sm sm:text-xs text-[10px]">
                Sort by Price :
              </i>
              <select
                className="lg:text-md md:text-sm sm:text-xs text-[10px]"
                title="sort"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                name="sort"
                id="sort"
              >
                <option value="">Select</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
            </span>
          </div>
          <div className="w-1/2 justify-end flex">
            <div className="flex max-md:flex-1 w-fit search-navbar rounded-full">
              <input
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
                className="md:px-4 sm:px-2 px-1 w-full max-sm:text-[10px] flex flex-wrap border-none outline-none"
                name="search"
                type="text"
                placeholder="Search Here..."
              />
              <span className="bootstrap-icons w-8 h-8 p-2 flex justify-center items-center">
                <i className="bi bi-search-heart-fill"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {filteredData.length == 0 ? (
            <h1 className="mt-20 text-center w-full text-gray-500">
              No Products Found
            </h1>
          ) : (
            filteredData.map((item) => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                  images={[item.images[0]]}
                />
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;
