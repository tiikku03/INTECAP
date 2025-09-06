import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <section className="navigation">
        <div className="header-section logo-section">
          <p>VELLUTO</p>
        </div>

        <nav className="header-section nav-section">
          <ul className="nav-list">
            <li className="nav-item"><Link to="#">new in</Link></li>
            <li className="nav-item"><Link to="#">bags</Link></li>
            <li className="nav-item"><Link to="#">women</Link></li>
            <li className="nav-item"><Link to="#">men</Link></li>
          </ul>
        </nav>

        <div className="header-section icons-section">
          <p className="icon">carrito</p>
          
       
          <div className="desktop-icons">
            <p className="icon">perfil</p>
            <p className="icon">buscador</p>
          </div>

        
          <div className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        </section>
      </header>

      {isOpen && (
        <div className="mobile-menu">
          <ul className="nav-list-mobile">
            <li className="nav-item"><Link to="#">NEW IN</Link></li>
            <li className="nav-item"><Link to="#">BAGS</Link></li>
            <li className="nav-item"><Link to="#">WOMEN</Link></li>
            <li className="nav-item"><Link to="#">MEN</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;