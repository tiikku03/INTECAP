import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
  return (
    <nav className="Navbar">
        <input type="checkbox" className="toggle" />
        <label htmlFor="toggle" className="Menu-Icon">&#9776;</label>
        <ul className="menu-list">
            <li><Link to="/">Tipos de Buses</Link></li>
            <li><Link to="/Coban">Coban</Link></li>
            <li><Link to="/Quetzaltenango">Quetzaltenango</Link></li>
            <li><Link to="/Antigua">Antigua</Link></li>
            <li><Link to="/Peten">Peten</Link></li>
            <li><Link to="/Jalapa">Jalapa</Link></li>
            <li><Link to="/Escuintla">Escuintla</Link></li>
        </ul>
    </nav>
  )
}
export default Navbar;