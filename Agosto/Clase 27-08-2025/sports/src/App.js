import React from 'react';
import  { useState } from 'react';
import './App.css';
import Card from './components/Card'
import Modal from './components/Modal'

function App() {

  const [accesorioSelect, setaccesorioSelect] = useState(null)

  const accesorios = [
    {
      imagen:"https://siman.vtexassets.com/arquivos/ids/1741479-1200-auto?v=637680378204400000&width=1200&height=auto&aspect=true",
      nombre:"Balón de baloncesto Wilson NBA",
      descripcion:"Balón oficial de la NBA, ideal para un agarre y durabilidad excelentes.",
      descripcion2:" Ideal para entrenamientos y juegos casuales, este balón ofrece un gran rendimiento en la cancha.",
      precio: 300
    },
    {
      imagen:"https://siman.vtexassets.com/arquivos/ids/7037814-1200-auto?v=638869193328130000&width=1200&height=auto&aspect=true",
      nombre:"Mochila Deportiva",
      descripcion:"Mochila ligera, perfecta para llevar tu ropa y zapatillas al gimnasio.",
      descripcion2:" Ideal para un transporte rápido y cómodo de tus objetos esenciales.",
      precio: 200
    },
    {
      imagen:"https://siman.vtexassets.com/arquivos/ids/7037822-1200-auto?v=638869193350170000&width=1200&height=auto&aspect=true",
      nombre:"Bolsa Deportiva",
      descripcion:"Maleta espaciosa para transportar todo tu equipo de entrenamiento con facilidad.",
      descripcion2:"Ideal para viajes cortos o entrenamientos intensos.",
      precio: 400
    },
    {
      imagen:"https://siman.vtexassets.com/arquivos/ids/2944252-1200-auto?v=637895291868730000&width=1200&height=auto&aspect=true",
      nombre:"Mangas de brazo",
      descripcion:"Accesorio que mejora la circulación y protege el brazo durante el ejercicio.",
      descripcion2:"Manga que ofrece soporte muscular y previene lesiones leves.",
      precio: 100
    },
    {
      imagen:"https://siman.vtexassets.com/arquivos/ids/6275295-1200-auto?v=638649847372830000&width=1200&height=auto&aspect=true",
      nombre:"Guantes de Portero",
      descripcion:"Guantes de fútbol con un acolchado que amortigua impactos y ofrece gran agarre.",
      descripcion2:"Ideal para proteger tus manos durante el juego.",
      precio: 300
    }
  ]

  return (
    <div className="App">
      <div className="accesorios">
        {
          accesorios.map((accesorio) =>(
         <Card key={accesorio.nombre} accesorio={accesorio} onClick={setaccesorioSelect}></Card>
        ))
        }
        {
      accesorioSelect && (
        <Modal accesorio={accesorioSelect} onClose={() => setaccesorioSelect(null)}></Modal>
      )
        }
      </div>
    </div>
  );
}

export default App;
