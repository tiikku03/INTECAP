import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Buses from './components/Buses';
import Footer from './components/Footer';

function Departamentos ({nombre}) {
  
const imgs = [
  {
    "Coban" : "https://i.ytimg.com/vi/WC_A422gKhw/maxresdefault.jpg",
    "Quetzaltenango" : "https://i.ytimg.com/vi/jr3ZzM4Alec/maxresdefault.jpg",
    "Antigua" : "https://i.ytimg.com/vi/XCgDRXRR6xQ/maxresdefault.jpg",
    "Peten" : "https://i.ytimg.com/vi/-qQlrsaIll4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCJCa3yK6qumU5F-PIDFl-krv5bjg",
    "Jalapa" : "https://i.ytimg.com/vi/e9IBhXHk3WU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAJZ1fG7orhez724RYKPlwXPJYhEw",
    "Escuintla" : "https://i.ytimg.com/vi/5hOXrx2qwtM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCH5Ba7qkrsfBIQEPos1USOrjJ8Ww"
  }
]

  return (
    <div className='Content'>
 <h2>Rutas hacia {nombre}</h2>
      <img className='img-departamento' src={imgs[0][nombre]} alt={nombre} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Buses />} />
          <Route path="/Coban" element={<Departamentos nombre="Coban" />} />
          <Route path="/Quetzaltenango" element={<Departamentos nombre="Quetzaltenango" />} />
          <Route path="/Antigua" element={<Departamentos nombre="Antigua" />} />
          <Route path="/Peten" element={<Departamentos nombre="Peten" />} />
          <Route path="/Jalapa" element={<Departamentos nombre="Jalapa" />} />
          <Route path="/Escuintla" element={<Departamentos nombre="Escuintla" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;