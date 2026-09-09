import React from "react";
import AboutMe from "./AboutMe";
import Carousel from "./Carousel";
// import Trabajos from "./Trabajos";
import Trabajos from "./Works";

const Home = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <section className="bienvenida" id="Casa">
        <div className="texto-bienvenida">
          <h1>
            Hola, soy Gustavo <i class="ti ti-hand-love-you"></i>
          </h1>

          <h2 className="subtitulo">Fullstack Developer • Frontend</h2>
          <p className="descripcion">
            Me apasiona crear experiencias funcionales y atractivas.
          </p>
        </div>
      </section>

      <AboutMe />
      <Carousel />
      {/* <Trabajos /> */}
      <Trabajos />
      {/* <Reseñas /> */}
    </>
  );
};

export default Home;
