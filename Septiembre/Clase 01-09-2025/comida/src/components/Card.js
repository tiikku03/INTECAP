import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
function Card({ producto }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="Card-container">
      <img src={producto.imagen} alt={producto.nombre} className="image" />
      <p className="name">{producto.nombre}</p>
      <p className="description">{producto.descripcion}</p>
      <div className="button-container">
        <button className="buy-button" onClick={() => addToCart(producto)}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Card;
