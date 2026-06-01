import React from "react";
import "../Styles/Contact.css";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const whatsappNumber = "521XXXXXXXXXX"; // tu número con código de país
  const whatsappMessage = "Me interesa tus servicios de programador fullstack";
  const gmailMessage = "Me interesa tus servicios de programador fullstack";
  const githubProfile = "https://github.com/tuUsuario"; // tu perfil de GitHub

  return (
    <div className="contact-page">
      <h1>Te interesa? ¡Mándame un mensaje!</h1>

      <div className="contact-icons">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon whatsapp"
        >
          <FaWhatsapp />
          <p>WhatsApp</p>
        </a>

        {/* Gmail */}
        <a
          href={`mailto:tuCorreo@gmail.com?subject=Contacto desde Portafolio&body=${encodeURIComponent(
            gmailMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon gmail"
        >
          <MdEmail />
          <p>Correo</p>
        </a>

        {/* GitHub */}
        <a
          href={githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon github"
        >
          <FaGithub />
          <p>GitHub</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
