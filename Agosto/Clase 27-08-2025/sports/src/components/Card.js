import React from "react";
import { useState } from "react";

function Card ({accesorio, onClick}){

    const [descripcion, setDescripcion] = useState(accesorio.descripcion);

    const changeDescripcion = () => {
        setDescripcion(accesorio.descripcion2);
    }

    return(
        <div className="Accesorio-card" onClick={() => onClick(accesorio)}>
            <img className="img-accesorio" src={accesorio.imagen} alt={accesorio.nombre} />
            <h3 className="title">{accesorio.nombre}</h3>
            <p className="description">{descripcion}</p>
            <button className="btn-ver-mas" onClick={changeDescripcion}>Ver más</button>
        </div>
    )
}
export default Card;