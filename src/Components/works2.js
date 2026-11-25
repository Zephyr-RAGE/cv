import React from "react";
import "../Styles/trabajos2.css";
import { Link } from "react-router-dom";

const additionalProjects = [
  {
    id: "04",
    title: "Backend de plataforma",
    description: "FastAPI · PostgreSQL · Alembic",
    image: "/backend-empresa.jpeg",
    alt: "Backend de plataforma logística",
    route: "/logisticaBackend",
  },
  {
    id: "05",
    title: "Pagina del viajero",
    description: "Angular, Typescript, Python, FastAPI, Alembic, PostgresQL",
    image: "/viajes.jpeg",
    alt: "Vista previa de proyecto",
    route: "/viajero",
  },
];

export default function Works2() {
  const irArriba = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <section className="additional-projects">
      <div className="additional-projects-heading">
        <span className="projects-overline">DEVELOPMENT ARCHIVE / 003</span>

        <h2>
          Otros <span>desarrollos</span>
        </h2>

        <p>Otros trabajos y desarrollos que forman parte de mi experiencia.</p>
      </div>

      <div className="additional-projects-list">
        {additionalProjects.map((project) => (
          <Link
            to={project.route}
            className="project-card"
            key={project.id}
            onClick={irArriba}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.alt}
                className="project-image"
              />
            </div>

            <div className="project-information">
              <span className="project-number">PROJECT / {project.id}</span>

              <div className="project-text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
