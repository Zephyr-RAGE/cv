import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaCode,
  FaEnvelope,
  FaChevronDown,
  FaHome,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [mostrarNavbar, setMostrarNavbar] = useState(true);
  const [mostrarIndicador, setMostrarIndicador] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const manejarMovimientoMouse = (e) => {
      if (e.clientY < 80) {
        setMostrarNavbar(true);
        setMostrarIndicador(false);
      } else {
        setMostrarNavbar(false);
        setMostrarIndicador(true);
      }
    };

    window.addEventListener("mousemove", manejarMovimientoMouse);
    return () =>
      window.removeEventListener("mousemove", manejarMovimientoMouse);
  }, []);

  // 🔥 Función para navegar dentro del Home
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      // si NO estamos en "/", primero ir al Home
      window.location.href = `/#${id}`;
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {mostrarIndicador && (
        <div
          className="indicador-navbar"
          title="Desplaza el cursor hacia arriba"
        >
          <FaChevronDown className="icono-indicador" />
        </div>
      )}

      <nav className={`navbar ${mostrarNavbar ? "visible" : "oculta"}`}>
        <ul className="nav-links">
          {/*  Casa */}
          <li>
            <a onClick={() => scrollToSection("Casa")}>
              <FaHome className="icono" title="Casa" />
            </a>
          </li>

          {/* 🔵 Sobre mí */}
          <li>
            <a onClick={() => scrollToSection("SobreMi")}>
              <FaUser className="icono" title="Acerca de mí" />
            </a>
          </li>

          {/* 🟣 Habilidades */}
          <li>
            <a onClick={() => scrollToSection("Habilidades")}>
              <FaCode className="icono" title="Conocimientos y habilidades" />
            </a>
          </li>

          {/* 🟢 Contacto (Ruta real) */}
          <li>
            <Link to="/Contacto">
              <FaEnvelope className="icono" title="Contacto" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
