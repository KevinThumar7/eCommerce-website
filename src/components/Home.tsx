import { NavLink } from "react-router";

function Home() {
  return (
    <section className="w-full left-1/2 transform -translate-x-1/2 absolute top-0 hero-section">
      <div className="container flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black lg:text-3xl md:text-2xl sm:text-xl text-xs p-2 bg-white">
            INCREDIBLE PRICES ON ALL YOUR FAVOURITE ITEMS
          </h1>
          <button
            type="button"
            className="cursor-pointer md:py-2 md:px-8 py-1 px-4 text-sm md:text-lg mt-3 bg-black text-white rounded-4xl hover:bg-white hover:text-black duration-600 transition-all"
          >
            <NavLink to={"/products"}>Shop Now</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
