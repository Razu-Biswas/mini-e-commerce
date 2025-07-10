

import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-cover rounded-t-xl"
      />

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-blue-600 font-bold mb-3">${product.price}</p>

        <div className="mt-auto flex gap-16">
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600 transition"
          >
            Add  Cart
          </button>

          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-gray-400 text-gray-700 px-4 py-1 rounded-full text-sm hover:bg-gray-300 transition"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
