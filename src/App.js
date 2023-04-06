import React from "react";
import About from "./pages/about";
import Index from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart";
import Service from "./pages/services";
import Store from "./pages/store";
import MyNavbar from "./components/Navbar";
import Contact from "./pages/contact";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login";
import Signup from "./pages/signup";

const App = () => {
  <h1>App Components</h1>;
  return (
    <>
      <BrowserRouter>
        {/* We have to render ToastContainer once ,i.e we have to add it once 
      in a porject but can be user Mulitiple time */}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          progress={undefined}
          theme="dark"
        />
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/services" element={<Service />} />
          <Route path="/srore" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
