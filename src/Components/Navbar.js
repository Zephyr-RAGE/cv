import { useState, useEffect } from "react";

import {
  FaUser,
  FaCode,
  FaEnvelope,
  FaHome,
  FaChevronDown,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

import "../Styles/Navbar.css";

const Navbar = () => {
  const [mostrarNavbar, setMostrarNavbar] = useState(false);

  const location = useLocation();

  // Mostrar menú al acercar el cursor a la parte superior
  useEffect(() => {
    const manejarMovimientoMouse = (e) => {
      if (e.clientY < 65) {
        setMostrarNavbar(true);
      } else if (e.clientY > 220) {
        setMostrarNavbar(false);
      }
    };

    window.addEventListener("mousemove", manejarMovimientoMouse);

    return () => {
      window.removeEventListener("mousemove", manejarMovimientoMouse);
    };
  }, []);

  // Navegación entre secciones
  const scrollToSection = (id) => {
    setMostrarNavbar(false);

    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`navbar-container ${mostrarNavbar ? "abierto" : "cerrado"}`}
      onMouseEnter={() => setMostrarNavbar(true)}
      onMouseLeave={() => setMostrarNavbar(false)}
    >
      {/* Media luna */}
      <nav className="navbar" aria-label="Navegación principal">
        <ul className="nav-links">
          <li className="nav-inicio">
            <a
              href="/#Casa"
              className="nav-item"
              aria-label="Inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("Casa");
              }}
            >
              <FaHome className="icono" />
              <span>INICIO</span>
            </a>
          </li>

          <li className="nav-perfil">
            <a
              href="/#SobreMi"
              className="nav-item"
              aria-label="Sobre mí"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("SobreMi");
              }}
            >
              <FaUser className="icono" />
              <span>PERFIL</span>
            </a>
          </li>

          <li className="nav-skills">
            <a
              href="/#Habilidades"
              className="nav-item"
              aria-label="Habilidades"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("Habilidades");
              }}
            >
              <FaCode className="icono" />
              <span>SKILLS</span>
            </a>
          </li>

          <li className="nav-contacto">
            <Link
              to="/Contacto"
              className="nav-item"
              aria-label="Contacto"
              onClick={() => setMostrarNavbar(false)}
            >
              <FaEnvelope className="icono" />
              <span>CONTACTO</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Pequeño indicador para abrir el menú */}
      <button
        className="navbar-trigger"
        onClick={() => setMostrarNavbar(!mostrarNavbar)}
        aria-label={mostrarNavbar ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={mostrarNavbar}
      >
        <FaChevronDown />
      </button>
    </div>
  );
};

export default Navbar;
