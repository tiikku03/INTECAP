import { useState } from 'react';
import './index.css';
import Tarjetas from './components/Tarjetas';
import React from 'react';
import  Modal  from './components/Modal';

function App() {

  const [FrutaSelec, setfrutaSelec] = useState(null)
  const [modalOpen, setModalOpen] = useState(false);

  const frutas = [

    {imagen:"https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2024/11/11/naranja-fruta.jpeg",
    nombre:"Naranja",
    descripcion:"La naranja es una fruta cítrica muy popular.",
  precio: 1.00
},

    {imagen:"https://www.bupasalud.com.co/sites/default/files/inline-images/fuji-red.jpg",
    nombre:"Manzana",
    descripcion:"La manzana es una fruta dulce y crujiente.",
  precio: 2.50
},

    {imagen:"https://imagenes.eltiempo.com/files/image_1200_535/files/fp/uploads/2024/03/22/65fe035e3288b.r_d.1668-1031-4000.jpeg",
    nombre:"Banana",
    descripcion:"La banana es una fruta tropical rica en potasio.",
  precio: 3.50
}
  ];
  return (
    <div className="Contenedor">
      <h1>Sección de Frutas</h1>
      <div className="Fruits-list">
        {
          frutas.map((fruta) =>(
          <Tarjetas key={fruta.nombre} fruta={fruta} onClick={setfrutaSelec}></Tarjetas>
          ))
        }
        {
          FrutaSelec && (
            <Modal fruit={FrutaSelec} onClose={() => setfrutaSelec(null)} />
          )
        }
      </div>
    </div>
  );
}

export default App;
