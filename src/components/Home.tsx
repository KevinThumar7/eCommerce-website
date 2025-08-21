import { NavLink } from "react-router"


function Home() {
  return (
    <section className="container absolute top-0 hero-section">
      <div className="w-full flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black text-3xl p-2 bg-white">
            INCREDIBLE PRICES ON ALL YOUR FAVOURITE ITEMS
          </h1>
          <button
            type="button"
            className="cursor-pointer py-2 px-8 mt-3 bg-black text-white rounded-4xl hover:bg-white hover:text-black duration-600 transition-all"
          >
            <NavLink to={"/products"}>Shop Now</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home