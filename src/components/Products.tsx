// import React from 'react'

import { useEffect, useState } from "react";
import Card from "./Card";

type Products = {
  id: number;
  title: string;
  price: number;
  images: string;
};

function Products() {
  const [productData, setProductData] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const url = "https://dummyjson.com/products";
    const data = fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setProductData(res.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products", err);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const filteredData = productData
    .filter((item) =>
      item.title.toLowerCase().includes(searchProduct.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === "lowToHigh") return a.price - b.price;
      if (filter === "highToLow") return b.price - a.price;
      return 0; // default: no sorting
    });

  return (
    <section className="container left-1/2 transform -translate-x-1/2 absolute top-0">
      <div className="mt-25">
        <div className="w-full text-center">
          <h1 className="mb-10">COLLECTIONS...</h1>
        </div>
        <div className="flex justify-around">
          <div>
            <span>
              Sort by Price :{" "}
              <select
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
          <div>
            <div className="flex w-fit search-navbar rounded-full">
              <input
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
                className="px-4 border-none outline-none"
                name="search"
                type="text"
                placeholder="Search Here..."
              />
              <span className="bootstrap-icons w-8 h-8 flex justify-center items-center">
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
                  images={item.images}
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
