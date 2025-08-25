// import React from "react";


function Confirmation() {


  return (
    <div className="w-screen">
      <div className="w-1/5 p-2 bg-gray-200 rounded-2xl justify-center items-center flex flex-col gap-3">
        <h1>Do you want to Proceed ?</h1>
        <div className="flex gap-2">
          <button
            className="py-2 hover:text-black hover:bg-white transition-all duration-300 px-5 bg-black text-white cursor-pointer rounded-full text-xs"
            type="button"
          >
            Yes
          </button>
          <button
            className="py-2 hover:text-black hover:bg-white transition-all duration-300 px-5 bg-black text-white cursor-pointer rounded-full text-xs"
            type="button"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
