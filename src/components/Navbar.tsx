// import React from 'react'
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="w-full container sticky top-0 left-0 z-50 bg-white">
      <div className="w-full navbar-container flex justify-between lg:py-5 md:py-3 sm:py-2 py-1">
        <div className="w-full flex">
          <ul className="navbar-media flex lg:text-sm md:text-xs sm:text-[10px] text-[7px] justify-items-start md:gap-7 gap-3 items-center">
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
          <h1 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">
            <NavLink to={"/"}>HEAVENLY</NavLink>
          </h1>
        </div>
        <div className="w-full text-center flex items-center justify-end gap-5">
          {/* <div className="flex search-navbar rounded-full">
            <input className="px-4 border-none outline-none" name="search" type="text" placeholder="Search Here..." />
            <span className="bootstrap-icons w-8 h-8 flex justify-center items-center">
              <i className="bi bi-search-heart-fill"></i>
            </span>
          </div> */}
          <span className="lg:text-sm md:text-xs sm:text-[10px] text-[7px]">
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to={"/about"}
            >
              ABOUT US
            </NavLink>
          </span>
          <span className="bootstrap-icons w-8 h-8 flex justify-center items-center">
            <NavLink to={"/cart"}>
              <i className="bi bi-bag-heart-fill"></i>
            </NavLink>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
