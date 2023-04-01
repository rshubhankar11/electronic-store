import React from "react";
import About from "./pages/about";
import Index from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart";
import Service from "./pages/services";
import Store from "./pages/store";
import MyNavbar from "./components/Navbar";
import Contact from "./pages/contact";

const App = () => {
  <h1>App Components</h1>;
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/services" element={<Service />} />
          <Route path="/srore" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
