import React, { useState } from 'react'

export const Estado = () => {
    // let nombre = "Victor";
    let establecimiento = "Cursos Online";
    let Cursos = [ "Excel Básico", "Excel Intermedio",  "Excel Avanzado", "Power BI", "HTML5", "CSS", "JS"];

    const [nombre, setNombre] = useState("Victor");

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }
  return (
    <>
      <h1>hola</h1>
      <p>bienvenidos a {establecimiento}</p>
      <h2>Cursos Activos</h2><hr />
      <button onClick={e=> cambiarNombre ("Victor Ticurú")}>cambiar nombre</button>
      <ul>
        {Cursos.map((curso, indice) => {
            return <li key={indice}>{curso}</li>
        })}
      </ul>
      <hr />
      <p>derechos reservados: {nombre}</p>
    </>
  )
} 