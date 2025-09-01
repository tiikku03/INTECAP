import { createContext, useState } from "react";

export const CartContext = createContext();


export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existe = cart.find((producto) => producto.nombre === item.nombre);
    if (existe) {
      setCart(
        cart.map((producto) =>
          producto.nombre === item.nombre
            ? { ...producto, cantidad: producto.cantidad + 1 }
            : producto
        )
      );
    } else {
      setCart([...cart, { ...item, cantidad: 1 }]);
    }
  };
  
  const removeFromCart = (nombre) => setCart(cart.filter(i => i.nombre !== nombre));

  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}