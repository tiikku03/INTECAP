import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="p-4 border-t border-gray-300 fixed top-0 right-0 w-[30rem] bg-white">
      <h2 className="font-bold text-lg">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.nombre}>{item.nombre} precio: Q.{item.precio}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
