import React, { useState, useContext } from 'react';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext'; 

export const Header = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [CartOpen, setCartOpen] = useState(null);
  const { cart } = useContext(CartContext); 

  const cartCount = cart.reduce((acc, item) => acc + (item.cantidad || 1), 0);

  return (
    <header>
      <section className="left">
        <article>
          <a className='cart-link' href="#" onClick={() => setCartOpen(!CartOpen)}>
            Cart <FontAwesomeIcon icon={faCartShopping} />
            <span className="cart-count">{cartCount}</span> 
          </a>
        </article>
      </section>
      <section className="center">
        <article>
          <img src="logo1.png" alt="Margarita" className="logo-image" />
        </article>
      </section>
      <section className="right">
        <nav className="navbar">
          <ul className={`nav-list${isOpen ? " active open" : ""}`}>
            <li className="nav-item"><a href="#">Inicio</a></li>
            <li className="nav-item"><a href="#">Menú</a></li>
            <li className="nav-item"><a href="#">Contacto</a></li>
          </ul>
        </nav>
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
      {
        CartOpen && (
          <div className="cart-sidebar">
            <button className='close-button-cart' onClick={() => setCartOpen(null)}>Close</button>
            <Cart />
          </div>
        )
      }
    </header>
  );
};
export default Header;