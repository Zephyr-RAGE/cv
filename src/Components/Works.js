import "../Styles/trabajos.css";
import { Link } from "react-router-dom";
import Works2 from "./works2";

const projects = [
  {
    id: "01",
    title: "Website portafolio",
    description: "website portafolio.com",
    image: "/portafolio1.jpeg",
    alt: "Portafolio de evidencias",
    route: "/Website",
  },
  {
    id: "02",
    title: "MRMS",
    description: "infologisticamrms.com",
    image: "/work2.jpeg",
    alt: "Sistema MRMS de logística",
    route: "/Landing",
  },
  {
    id: "03",
    title: "Panel de gestión",
    description: "panel.logisticamrms.com",
    image: "/work3.jpeg",
    alt: "Panel de gestión logística",
    route: "/Gestor",
  },
];

const Trabajos = () => {
  return (
    <section className="trabajos-container" id="Proyectos">
      <div className="proyectos-id">
        <div className="projects-heading">
          <span className="projects-overline">DEVELOPMENT ARCHIVE / 002</span>

          <h2>
            Proyectos <span>destacados</span>
          </h2>

          <p>
            Una selección de proyectos personales y laborales en los que he
            participado.
          </p>
        </div>

        <div className="portafolio-id">
          {projects.map((project) => (
            <Link
              to={project.route}
              className="project-card"
              key={project.id}
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
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
      </div>

      <Works2 />
    </section>
  );
};

export default Trabajos;
