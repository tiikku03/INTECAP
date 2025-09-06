import React from 'react'

function Footer() {
  return (
        <footer>
        <div className="f-info">
            <div className="f-container">
                <div className="f-item">
                    <h3>Contacto</h3>
                    <p>Teléfono:  (123) 456-7890</p>
                    <p>Email: info@margarita.com</p>
                    <p>Dirección:Calle Falsa 123, Ciudad</p>
                </div>
            </div>
            <div className="f-container">
                <h3>Enlaces útiles</h3>
                <ul>
                    <li><a href="#">Política de privacidad</a></li>
                    <li><a href="#">Términos de servicio</a></li>
                    <li><a href="#">Ayuda</a></li>
                </ul>
            </div>
        </div>
        <div className="f-local">
            <p>&copy; 2025 Margarita. Todos los derechos reservados. by Victor Ticurú</p>
        </div>
    </footer>
  )
}

export default Footer;
