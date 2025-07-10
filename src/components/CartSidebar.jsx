


import { useCart } from "../context/CartContext";
import { IoClose } from "react-icons/io5"; 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CartSidebar({ show, toggleModal, toggleCart }) {
  const { cart, updateQuantity, getTotal } = useCart();
    const navigate = useNavigate(); 
   const handleClose = () => {
    toggleCart();      
    
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white p-4 shadow-lg transform ${
        show ? "translate-x-0" : "translate-x-full"
      } transition-transform z-50`}
    >
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button  onClick={toggleCart} className="text-2xl hover:text-red-500">
          <IoClose />
        </button>
      </div>

    
      <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-1">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-sm">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="border rounded-md p-3 flex flex-col gap-1"
            >
              <p className="font-medium">{item.title}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Price: ${item.price}</span>
                <span>Subtotal: ${(item.price * item.quantity).toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => updateQuantity(item.id, "dec")}
                >
                  -
                </button>
                <span className="min-w-[20px] text-center">{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => updateQuantity(item.id, "inc")}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Summary */}
      <hr className="my-4" />
      <div className="flex justify-between font-semibold text-lg">
        <p>Total:</p>
        <p>${getTotal()}</p>
      </div>

      {/* Checkout Button */}
      <button
        onClick={toggleModal}
        disabled={cart.length === 0}
        className="bg-blue-500 hover:bg-blue-600 text-white w-full mt-4 p-2 rounded disabled:opacity-50"
      >
        Checkout
      </button>
    </div>
  );
}
