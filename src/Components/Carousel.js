import React, { useState } from "react";
import "../Styles/carousel.css";

import {
  DiReact,
  DiJavascript1,
  DiCss3,
  DiHtml5,
  DiPython,
  DiGit,
  DiGithubBadge,
  DiPostgresql,
  DiAngularSimple,
} from "react-icons/di";

import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { SiFastapi, SiSqlite } from "react-icons/si";

const categories = [
  {
    id: "frontend",
    number: "01",
    name: "FRONTEND DEVELOPMENT",
    description: "Interfaces, aplicaciones web y experiencias de usuario.",
    tools: [
      { name: "React", icon: <DiReact /> },
      { name: "Angular", icon: <DiAngularSimple /> },
      { name: "Next.js", icon: <TbBrandNextjs /> },
      { name: "JavaScript", icon: <DiJavascript1 /> },
      { name: "TypeScript", icon: <TbBrandTypescript /> },
      { name: "HTML5", icon: <DiHtml5 /> },
      { name: "CSS3", icon: <DiCss3 /> },
    ],
  },
  {
    id: "backend",
    number: "02",
    name: "BACKEND DEVELOPMENT",
    description: "Desarrollo de servicios y lógica de aplicaciones.",
    tools: [
      { name: "Python", icon: <DiPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
    ],
  },
  {
    id: "data-tools",
    number: "03",
    name: "DATA & TOOLS",
    description: "Gestión de datos y herramientas de desarrollo.",
    tools: [
      { name: "PostgreSQL", icon: <DiPostgresql /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "Git", icon: <DiGit /> },
      { name: "GitHub", icon: <DiGithubBadge /> },
    ],
  },
];

const Carousel = () => {
  const [openCategories, setOpenCategories] = useState([]);

  const toggleCategory = (id) => {
    setOpenCategories((previous) =>
      previous.includes(id)
        ? previous.filter((categoryId) => categoryId !== id)
        : [...previous, id],
    );
  };

  const totalTechnologies = categories.reduce(
    (total, category) => total + category.tools.length,
    0,
  );

  return (
    <section className="arsenal-container" id="Habilidades">
      <div className="arsenal-header">
        <div className="arsenal-heading">
          <span className="arsenal-overline">TECHNICAL PROFILE / 001</span>

          <h2>
            Technology <span>Arsenal</span>
          </h2>

          <p>
            Herramientas y tecnologías con las que desarrollo soluciones de
            software.
          </p>
        </div>

        <div className="arsenal-counter">
          <span>TECH STACK</span>
          <strong>{String(totalTechnologies).padStart(2, "0")}</strong>
          <small>TECHNOLOGIES</small>
        </div>
      </div>

      <div className="arsenal-categories">
        {categories.map((category) => {
          const isOpen = openCategories.includes(category.id);

          return (
            <article
              className={`arsenal-category ${isOpen ? "is-open" : ""}`}
              key={category.id}
            >
              <button
                type="button"
                className="category-trigger"
                aria-expanded={isOpen}
                aria-controls={`technologies-${category.id}`}
                onClick={() => toggleCategory(category.id)}
              >
                <div className="category-title">
                  <span className="category-number">{category.number}</span>

                  <div className="category-information">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>

                <div className="category-meta">
                  <span className="category-count">
                    {String(category.tools.length).padStart(2, "0")} ITEMS
                  </span>

                  <span className="category-indicator" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
              </button>

              <div
                className="technology-panel"
                id={`technologies-${category.id}`}
              >
                <div className="technology-grid">
                  {category.tools.map((tool) => (
                    <div
                      className="technology-card"
                      key={tool.name}
                      title={tool.name}
                    >
                      <div className="technology-icon">{tool.icon}</div>
                      <span className="technology-name">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="arsenal-footer">
        <span>CRIMSON INTERFACE</span>
        <span>DEVELOPMENT STACK / END OF RECORD</span>
      </div>
    </section>
  );
};

export default Carousel;
