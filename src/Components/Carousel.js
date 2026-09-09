import React from "react";
import "../Styles/carousel.css";

// Importación de íconos desde react-icons
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

const tools = [
  { name: "React", icon: <DiReact /> },
  { name: "Next.js", icon: <TbBrandNextjs /> },
  { name: "Angular", icon: <DiAngularSimple /> },
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "TypeScript", icon: <TbBrandTypescript /> },
  { name: "HTML", icon: <DiHtml5 /> },
  { name: "CSS", icon: <DiCss3 /> },
  { name: "Python", icon: <DiPython /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "PostgreSQL", icon: <DiPostgresql /> },
  { name: "Git", icon: <DiGit /> },
  { name: "GitHub", icon: <DiGithubBadge /> },
  { name: "Sqlite", icon: <SiSqlite /> },
];

const Carousel = () => {
  return (
    <div className="carousel-container" id="Habilidades">
      <div className="carousel-track">
        {tools.concat(tools).map((tool, index) => (
          <div key={index} className="carousel-item">
            <div className="icon">{tool.icon}</div>
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
