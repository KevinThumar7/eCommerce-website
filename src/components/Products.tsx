import { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import type { Item } from "../context/DataContextTS";

type Products = {
  id: number;
  title: string;
  price: number;
  images: string[];
  thumbnail: string;
};

const PRODUCTS_PER_PAGE = 8;

function Products() {
  const [loading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<Item[]>([]);
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [debouncing, setDebouncing] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncing(searchProduct);
    }, 700);
    return () => {
      clearTimeout(handler);
    };
  }, [searchProduct]);

  const fetchUrl = (page: number) => {
    const start: number = (page - 1) * PRODUCTS_PER_PAGE;

    let url = `https://dummyjson.com/products/search?q=${searchProduct}&limit=${PRODUCTS_PER_PAGE}&skip=${start}`;

    if (filter) {
      url += `&sortBy=price&order=${filter}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setItems(res.products);
        setLoading(false);
        setTotal(res.total);
      })
      .catch((err) => {
        console.error("Error fetching products", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUrl(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncing, filter]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen mt-[-50px]">
        <div className="w-12 h-12 border-4 border-black-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchUrl(value);
  };

  return (
    <section className="container mt-[80px]">
      <div className="mt-5">
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
                onChange={(e) => {
                  setFilter(e.target.value);
                  setPage(1);
                }}
              >
                <option value="">Select</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </span>
          </div>

          <div className="w-1/2 justify-end flex">
            <div className="flex max-md:flex-1 w-fit search-navbar rounded-full">
              <input
                value={searchProduct}
                onChange={(e) => {
                  setSearchProduct(e.target.value);
                  setPage(1);
                }}
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
          {items.length === 0 ? (
            <h1 className="mt-20 text-center w-full text-gray-500">
              No Products Found
            </h1>
          ) : (
            items.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                id={item.id}
                thumbnail={item.thumbnail}
              />
            ))
          )}
        </div>
        <div className="flex justify-center mt-10 mb-15">
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(total / PRODUCTS_PER_PAGE)}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              color="primary"
            />
          </Stack>
        </div>
      </div>
    </section>
  );
}

export default Products;
