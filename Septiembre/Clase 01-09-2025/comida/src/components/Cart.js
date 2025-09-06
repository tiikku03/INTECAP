import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de Compras</h2>
      <p className="total">Total: Q.{cart.reduce((acc, item) => acc + item.precio, 0)}</p>
      {cart.length === 0 ? (
        <p className="empty-cart-message">No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.nombre}>
              <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
              <div className="cart-item-details">
                <span className="cart-item-name">{item.nombre}</span>
                <span className="cart-item-price">Q.{item.precio}</span>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item.nombre)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
