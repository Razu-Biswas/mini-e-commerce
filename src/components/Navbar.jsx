

// import { useCart } from "../context/CartContext";

// export default function Navbar({ toggleCart }) {
//   const { cart } = useCart();
//   const demoUser = { name: "John Doe", email: "john@example.com" };

//   return (
//     <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 shadow-lg">
//       <div className="text-2xl font-extrabold text-white tracking-wide select-none">
//         🛍️ <span className="text-pink-400">Mini Shop</span>
//       </div>

//       <div className="flex items-center gap-6">
//         <span className="hidden sm:inline-block text-white text-sm font-medium">
//           👤 {demoUser.name}
//         </span>

//         <button
//           onClick={toggleCart}
//           className="relative text-white text-2xl hover:text-pink-400 transition-colors duration-300"
//           aria-label="Toggle Cart"
//         >
//           🛒
//           {cart.length > 0 && (
//             <span className="absolute -top-3 -right-3 bg-pink-500 text-white text-xs font-semibold px-2 rounded-full shadow-md animate-pulse">
//               {cart.length}
//             </span>
//           )}
//         </button>
//       </div>
//     </nav>
//   );
// }



import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaHome, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar({ toggleCart }) {
  const { cart } = useCart();
  const demoUser = { name: "John Doe", email: "john@example.com" };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 shadow-lg">
      <div className="text-2xl font-extrabold text-white tracking-wide select-none">
        🛍️ <span className="text-pink-400">Mini Shop</span>
      </div>

      <div className="flex items-center gap-6">
        {/* Home Link */}
        <Link
          to="/"
          className="flex items-center gap-1 text-white hover:text-pink-400 transition-colors duration-300"
        >
          <FaHome className="text-lg" />
          <span className="hidden sm:inline text-sm font-medium">Home</span>
        </Link>

        {/* Cart Button */}
        <button
          onClick={toggleCart}
          className="relative flex items-center text-white hover:text-pink-400 transition-colors duration-300"
          aria-label="Toggle Cart"
        >
          <FaShoppingCart className="text-2xl" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-semibold px-2 rounded-full shadow-md animate-pulse">
              {cart.length}
            </span>
          )}
        </button>

        {/* User Info */}
        <div className="hidden sm:flex items-center gap-2 text-white text-sm font-medium">
          <FaUserCircle className="text-lg" />
          {demoUser.name}
        </div>
      </div>
    </nav>
  );
}
