import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
    <Toaster position="top-center" reverseOrder={false} />
  </CartProvider>
);

