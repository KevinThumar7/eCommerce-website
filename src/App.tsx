import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Products from "./components/Products";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Item from "./components/Item";
import { DataProvider } from "./context/DataContext";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
