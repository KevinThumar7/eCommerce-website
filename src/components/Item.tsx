import { NavLink, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, deleteItem, addToCart } from "../slice/cartSlice";
import Quantity from "./Quantity";
import Delete from "./Delete";
import type { RootState } from "../store/store";
import Skeleton from "@mui/material/Skeleton";
import type { Item } from "../context/DataContextTS";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  price: number;
  thumbnail: string;
  title: string;
}

function Item() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Item | null>(null);
  const param = useParams<string>();
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const products = useSelector((state: RootState) => state.cart.products);
  const cartItem = products.find((item) => item.id === Number(param.id));

  const getProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products/${param.id}`);
    const item = await response.json();
    setProduct(item);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handlePlus = (itemId: number) => {
    dispatch(increase({ id: itemId }));
  };

  const handleMinus = (itemId: number) => {
    dispatch(decrease({ id: itemId }));
  };

  const handleDelete = (itemId: number) => {
    dispatch(deleteItem({ id: itemId }));
  };

  const handleClick = (e: Product) => {
    dispatch(
      addToCart({
        id: e.id,
        price: e.price,
        thumbnail: e.thumbnail,
        title: e.title,
      })
    );
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="container h-full">
      <h3 className="underline text-xl max-sm:text-[12px] mt-2">
        <i className="bi bi-arrow-left mr-2 mt-2"></i>
        <NavLink to={"/products"}>Back</NavLink>
      </h3>
      <div
        key={product.id}
        className="w-full h-1/4 justify-center items-center mt-5 flex"
      >
        <div className="w-[1000px] justify-center items-center flex max-md:flex-col">
          <div className="w-1/2 h-[500px] mr-2">
            {!isImageLoaded && (
              <Skeleton
                variant="rectangular"
                className="w-full min-h-full"
                sx={{ bgcolor: "grey.300" }}
              />
            )}
            <img
              className="w-full h-full"
              onLoad={() => setIsImageLoaded(true)}
              src={product.thumbnail}
              alt=""
            />
          </div>
          <div className="w-1/2 max-md:w-2/3 max-md:mt-5 max-sm:w-full">
            <div>
              <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-md">
                {product.title}
              </h1>
            </div>
            <div>
              <h3 className="mt-2 mb-5 max-sm:text-sm text-lg text-gray-400">
                $ {product.price}
              </h3>
            </div>
            <div>
              <h4 className="text-xs max-sm:text-[10px] text-black">
                {product.description}
              </h4>
            </div>
            <div>
              <div className="w-full mt-5">
                {!cartItem ? (
                  <button
                    onClick={() => handleClick(product)}
                    type="button"
                    className="mt-auto lg:py-2 lg:px-5 md:px-4 md:text-sm sm:text-xs text-[8px] px-3 py-1 bg-black text-white rounded-full w-fit mx-auto mb-5 cursor-pointer hover:bg-gray-400 hover:text-black transition-all duration-500"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex w-1/2">
                    <div className="w-1/3 mb-5">
                      <Quantity
                        item={{
                          id: cartItem.id,
                          quantity: cartItem.quantity,
                        }}
                        handleMinus={handleMinus}
                        handlePlus={handlePlus}
                      />
                    </div>
                    <div className="ml-3 mb-auto py-1 px-2">
                      <Delete
                        item={{
                          id: cartItem.id,
                          quantity: cartItem.quantity,
                        }}
                        handleDelete={handleDelete}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-blue-100 p-5 rounded-2xl">
              <h4 className="mb-2">Characteristics</h4>
              <div className="w-full flex text-xs flex-col">
                <h5 className="flex text-gray-700">
                  Brand: <span className="ml-auto">{product.brand}</span>
                </h5>
                <h5 className="flex text-gray-700">
                  Return Policy:{" "}
                  <span className="ml-auto text-red-600">
                    {product.returnPolicy}
                  </span>
                </h5>
                <h5 className="flex text-gray-700">
                  Ratings: <span className="ml-auto">{product.rating}</span>
                </h5>
                <h5 className="flex text-gray-700">
                  Shipping:{" "}
                  <span className="ml-auto">{product.shippingInformation}</span>
                </h5>
                <h5 className="flex text-gray-700">
                  Category: <span className="ml-auto">{product.category}</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
