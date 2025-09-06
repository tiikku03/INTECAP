import React from 'react'

function Buses() {
  return (
   <div className="content">
    <h2>Tipos de Buses</h2>
    <div className="grid-Buses">
        {
            busData.map ((bus, i) =>(
                <div className="Card" key={i}>
                    <img src={bus.imagen} alt={bus.nombre} />
                    <h3>{bus.nombre}</h3>
                    <p>{bus.descripcion}</p>
                </div>
        ))}
    </div>
   </div>
  )
}

export default Buses;

const busData = [
    {nombre: 'Bus Económico', descripcion: 'Ideal para viajes cortos y grupos pequeños.', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Chicken_Buses_in_Antigua_Guatemala.jpg/1280px-Chicken_Buses_in_Antigua_Guatemala.jpg'},
    {nombre: 'Primera Clase', descripcion: 'Viajes cómodos y rápidos.', imagen: 'https://www.marvelustravel.com/rutas/guatemala/imagenes/litegua/litegua-primera-clase/litegua.jpg'},
    {nombre: 'Bus de Lujo', descripcion: 'Comodidad y estilo para viajes largos.', imagen: 'https://www.marvelustravel.com/rutas/guatemala/imagenes/fdn-maya/maya-de-oro/maya-de-oro.jpg'},
]