import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Card({ producto }) {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="h-[30rem] w-[30rem] bg-amber-50 m-[2rem] p-[1rem] flex flex-col justify-around">
      <img src={producto.imagen} alt="" className="h-[20rem] " />
      <p className="font-bold ">{producto.nombre}</p>
      <p>{producto.descripcion}</p>
      <div className="flex justify-around">
        <button
        className="bg-blue-500 text-white p-2 rounded-[1rem] w-1/3"
        onClick={() => addToCart(producto)}
      >
        Comprar
      </button>
      <button
        className="bg-red-500 text-white p-2 rounded-[1rem] w-1/3"
        onClick={() => removeFromCart(producto.nombre)}
      >
        Eliminar
      </button>
      </div>
    </div>
  );
}

export default Card;

/*
{
      imagen:
        "https://www.serargentino.com/public/images/2021/01/16109941330-17-burger-773x458.jpg",
      nombre: "Hamburguesa Clásica",
      descripcion: "Jugosa carne de res con queso, lechuga y tomate.",
      descripcion2:
        "Una opción segura y deliciosa para los amantes de las hamburguesas. ¡El sabor tradicional que nunca falla!",
      precio: 35.99,
    },
*/
