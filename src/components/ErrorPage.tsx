// import React from 'react'

import { NavLink } from "react-router";

function ErrorPage() {
  return (
    <div className="w-screen flex flex-col justify-center items-center mt-10">
      <h1 className="mb-10 text-2xl">404 Page not Found</h1>
      <h2 className="underline">
        <NavLink to={"/"}>Click Here for Home Page</NavLink>
      </h2>
    </div>
  );
}

export default ErrorPage;
