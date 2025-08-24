import { NavLink } from "react-router";

function Home() {
  return (
    <section className="w-full hero-section mt-[-80px]">
      <div className="container flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-xs p-2 mt-[-60px] bg-black">
            INCREDIBLE PRICES ON ALL YOUR FAVOURITE ITEMS
          </h1>
          <span className="cursor-pointer md:py-2 md:px-8 py-1 px-4 text-sm md:text-lg mt-3 bg-black text-white rounded-4xl hover:bg-white hover:text-black duration-600 transition-all">
            <NavLink to={"/products"}>Shop Now</NavLink>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Home;
