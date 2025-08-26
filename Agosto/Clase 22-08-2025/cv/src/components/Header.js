import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Header = () => (
  <header>
    <nav className="navbar">
      <div className="left">
        <h1>Victor Ticurú</h1>
      </div>
      <div className="center">
        <a href="#">Inicio</a>
        <a href="#">Sobre mí</a>
        <a href="#">Proyectos</a>
        <a href="#">Contacto</a>
      </div>
      <div className="right">
        <a href="#"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
        <a href="#"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
        <a href="#"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
      </div>
    </nav>
  </header>
);

export default Header;