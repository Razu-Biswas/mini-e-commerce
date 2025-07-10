import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);
  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, type) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + (type === "inc" ? 1 : -1)) }
        : item
    ));
  };

  const getTotal = () => cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, getTotal, setCart,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
