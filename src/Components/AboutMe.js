import React from "react";
import "../Styles/Aboutme.css";

function AboutMe() {
  return (
    <section className="aboutme-container" id="SobreMi">
      <div className="aboutme-content">
        <h2>Sobre mí</h2>
        <p>
          ¡Hola! Soy <span className="highlight">Gustavo</span>, un apasionado
          <span className="highlight"> Programador Front end</span> con 1 año
          de experiencia en proyectos academicos, actualemente laborando en el extranjero con intereses en el desarrollo
          web y la creación de aplicaciones interactivas. Tengo experiencia
          trabajando con tecnologias como{" "}
          <strong>React, python, postgres entre otras herramientas y lenguajes</strong>, y disfruto
          aprendiendo constantemente nuevas herramientas que mejoren mi flujo de
          trabajo.
        </p>
      </div>

      <div className="foto-bienvenida">
        <div className="titulo-foto">Programador Front end • UX/IU</div>

        <div className="foto-real">
          <img src="/tavo.jpg" alt="Foto de Gustavo" className="foto-perfil" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
