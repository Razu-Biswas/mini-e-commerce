


import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

export default function CheckoutModal({ show, close }) {
  const { cart, clearCart, getTotal } = useCart();

  if (!show) return null;

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Order placed successfully!");
    clearCart();
    close();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl w-[95%] max-w-xl p-6 space-y-4 relative">
        <h2 className="text-2xl font-bold text-purple-700">🧾 Checkout Summary</h2>

        {/* 🛒 Product List */}
        <div className="bg-gray-100 p-4 rounded max-h-40 overflow-y-auto text-sm">
          {cart?.length === 0 ? (
            <p className="text-gray-500">No items in cart.</p>
          ) : (
            cart?.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-1 border-b last:border-b-0"
              >
                <span>{item.title}</span>
                <span className="text-gray-600">${item.price.toFixed(2)}</span>
              </div>
            ))
          )}
        </div>

        {/* Total Price */}
        <div className="text-right font-semibold text-lg text-purple-700">
          <p>Total : ${getTotal()}</p>
        </div>

        {/* 🧍 User Details Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="border w-full px-3 py-2 rounded outline-purple-400"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="border w-full px-3 py-2 rounded outline-purple-400"
            placeholder="Email"
            required
          />
          <textarea
            className="border w-full px-3 py-2 rounded outline-purple-400"
            placeholder="Address"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded transition"
          >
            ✅ Place Order
          </button>
        </form>

        {/* 🔙 Back to Home */}
        <button
          onClick={close}
          className="mt-2 text-sm text-purple-600 hover:underline block text-center"
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
}
