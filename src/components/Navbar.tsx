// import React from 'react'
import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

function Navbar() {
  const products = useSelector((state: RootState) => state.cart.products);
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
  
  return (
    <nav className="w-full sticky top-0 left-0 z-50 bg-white">
      <div className="container">
        <div className="w-full navbar-container flex justify-between lg:py-5 md:py-3 sm:py-2 py-1">
          <div className="w-full flex">
            <ul className="navbar-media flex lg:text-sm md:text-xs sm:text-[10px] text-[7px] justify-items-start md:gap-7 sm:gap-3 gap-2 items-center">
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  to={"/"}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  to={"/products"}
                >
                  PRODUCTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  to={"/contact"}
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-fit text-center flex justify-center items-center">
            <h1 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-sm">
              <NavLink to={"/"}>HEAVENLY</NavLink>
            </h1>
          </div>
          <div className="w-full text-center flex items-center justify-end gap-5">
            <span className="lg:text-sm md:text-xs sm:text-[10px] text-[7px]">
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to={"/about"}
              >
                ABOUT US
              </NavLink>
            </span>
            <span className="relative navbar-search-icon bootstrap-icons w-8 h-8 flex justify-center items-center">
              {products.length > 0 && (
                <p className="lg:w-5 text-[10px] lg:h-5 md:w-4 md:h-4 sm:w-3 sm:h-3 flex justify-center items-center top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-black rounded-full text-white absolute">
                  {totalQuantity}
                </p>
              )}
              <NavLink to={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bag-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                </svg>
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
