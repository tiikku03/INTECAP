import React from "react";

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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            odit totam illum quasi quam numquam quaerat atque, corporis, ratione
            aperiam architecto eius ad id amet. Ex, cumque! Quibusdam, quos cum.
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
          <h2>Habilidades</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
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
      <section className="contact"></section>
    </main>
  );
};
export default Main;
