import React from "react";
import AboutMe from "./AboutMe";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <section className="bienvenida">
        <div className="texto-bienvenida">
          <h1>Hola, soy Gustavo 👋</h1>
          <h2 className="subtitulo">Frontend Developer • Diseñador UI/UX</h2>
          <p className="descripcion">
            Me apasiona crear experiencias visuales modernas y funcionales.
          </p>
        </div>
      </section>

      <AboutMe />
      <Carousel/>
    </>
  );
};

export default Home;
