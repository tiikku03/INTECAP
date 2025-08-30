import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

export const Main = () => {
  return (
    <main>
      <section className="me">
        <div className="Name">
          <div className="avatar">
          <span>Hello, I'm</span>
          <h2>Victor Ticurú</h2>
          <p>Web Developer</p>
          </div>
          <p className="my-self">
          Soy Victor Ticurú, un desarrollador web con muchas ganas de aprender. Me apasiona crear interfaces de usuario atractivas y funcionales. Estoy en constante aprendizaje de tecnologías front-end y back-end para construir sitios web robustos y escalables. Me encanta enfrentar nuevos desafíos y estoy muy motivado para crecer profesionalmente.
          </p>
        </div>
        <div className="photo">
          <img className="perfil-photo" src="perfil.png" alt="Foto de perfil" />
        </div>
      </section>
      <div className="Btn-Profile">
        <a href="#" className="Download"><button>Download CV</button></a>
        <a href="#" className="Contact"><button>Contact Info</button></a>
      </div>
      <section className="skills">
        <div className="text">
          <span>Explora mis</span>
          <h2>Habilidades</h2>
          <p>He dedicado mi tiempo a desarrollar proyectos personales que me han permitido aplicar y consolidar mis conocimientos en HTML, CSS, JavaScript y React.</p>
        </div>
       <div className="skill-elements">
         <div className="skill">
          <img src="html-logo.webp" alt="HTML" />
          <span>HTML</span>
        </div>

        <div className="skill">
          <img src="css-logo.webp" alt="CSS" />
          <span>CSS</span>
        </div>
        <div className="skill">
          <img src="javascript-logo.webp" alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className="skill">
          <img src="react-logo.webp" alt="React" />
          <span>React</span>
        </div>
        <div className="skill">
          <img src="node-logo.webp" alt="Node.js" />
          <span>Node.js</span>
        </div>
       </div>
      </section>
      <section className="AboutMe">
        <span>conoce más</span>
        <h2>Sobre mí</h2>
       <article className="me-container">
<div className="carrusel">
  <div className="item profile1"></div>
  <div className="item profile2"></div>
</div>
        <article className="Experience">
         <div className="inf-Experience">
            <div className="Education">
              <FontAwesomeIcon icon={faAward} />
              <h3>Experiencia</h3>
              <p>sin experiencia</p>
            </div>
            <div className="Education">
              <FontAwesomeIcon icon={faBuildingColumns} />
              <h3>Educación</h3>
              <p>Intecap</p>
            </div>
         </div>
         <div className="about-Experience">
          <p>
           He trabajado en proyectos personales para poner en práctica las habilidades adquiridas, desde el diseño hasta el despliegue.
          </p>
         </div>
        </article>
       </article>
      </section>
      <section className="Projects-container">
        <span>Conoce mis</span>
        <h2>Proyectos</h2>
        <article className="projects">
          <div className="project">
            <img src="Farmacia.png" alt="Proyecto Farmacia" />
            <a href="https://victor-ticuru-full-stack-2025.on.drv.tw/Intecap/lecture_7/Farmacia/html/home.html"><button className="ver-projecto">Ver Proyecto</button></a>
          </div>
          <div className="project">
            <img src="Panaderia.png" alt="Proyecto Panaderia" />
            <a href="https://victor-ticuru-full-stack-2025.on.drv.tw/Intecap/Clase%2020-06-2025/Sweet%20Temptation/Home.html"><button className="ver-projecto">Ver Proyecto</button></a>
          </div>
          <div className="project">
            <img src="MaterialesOficina.png" alt="Proyecto Materiales de oficina" />
            <a href="https://victor-ticuru-full-stack-2025.on.drv.tw/Intecap/Clip%20office/src/html/home.html"><button className="ver-projecto">Ver Proyecto</button></a>
          </div>
        </article>
      </section>
      <section className="contact"></section>
    </main>
  );
};
export default Main;


