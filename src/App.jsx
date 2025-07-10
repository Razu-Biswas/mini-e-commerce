import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import CheckoutModal from "./components/CheckoutModal";
import { useState } from "react";

export default function App() {
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <Navbar toggleCart={() => setShowCart(!showCart)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <CartSidebar show={showCart} toggleModal={() => { setShowModal(true); setShowCart(false); }} />
      <CheckoutModal show={showModal} close={() => setShowModal(false)} />
    </Router>
  );
}

