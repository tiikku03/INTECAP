import React from "react";

function Tarjetas ({fruta, onClick}) {
  return (
    <div className="fruit-card" onClick={() => onClick(fruta)}>
    <img src={fruta.imagen} alt={fruta.nombre} />
    <h2>{fruta.nombre}</h2>
    </div>
  )
}
export default Tarjetas;
