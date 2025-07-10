

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-10 bg-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">🛒 Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

