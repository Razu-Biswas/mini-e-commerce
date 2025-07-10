


import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import { FaArrowLeft, FaCartPlus, FaTag, FaDollarSign, FaInfoCircle, FaStar } from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProduct(data.find(p => p.id === parseInt(id))));
  }, [id]);

  if (!product) return <p className="text-center mt-20 text-lg text-gray-500">Loading...</p>;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto min-h-screen">
      <div className="bg-white rounded-xl shadow-md overflow-hidden md:flex">
        {/* Product Image */}
        <div className="md:flex-shrink-0 w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-full object-cover md:h-full"
          />
        </div>

        {/* Product Info */}
        <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <FaTag className="text-blue-600" /> {product.title}
            </h1>

            <p className="text-xl text-blue-600 font-semibold mb-4 flex items-center gap-2">
              <FaDollarSign /> ${product.price}
            </p>

            <p className="text-gray-700 text-base mb-6 flex items-start gap-2">
              <FaInfoCircle className="mt-1 text-gray-500" />
              {product.description}
            </p>

            {/* Optional Rating */}
            <div className="flex items-center gap-1 text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg flex items-center justify-center gap-2 transition"
            >
              <FaCartPlus /> Add to Cart
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-5 py-2 rounded-lg flex items-center justify-center gap-2 transition"
            >
              <FaArrowLeft /> Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
