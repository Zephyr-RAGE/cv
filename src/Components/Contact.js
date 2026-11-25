import React from "react";
import "../Styles/Contact.css";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const whatsappNumber = "522721879905";
  const whatsappMessage =
    "Hola, me interesa conocer más sobre tus servicios de desarrollo.";

  const email = "gusmar.mtz04@gmail.com";
  const githubProfile = "https://github.com/Zephyr-RAGE";

  const contacts = [
    {
      id: "01",
      title: "WHATSAPP",
      description: "Conversemos sobre tu proyecto",
      detail: "Enviar mensaje",
      icon: <FaWhatsapp />,
      href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage,
      )}`,
      external: true,
    },
    {
      id: "02",
      title: "CORREO ELECTRÓNICO",
      description: email,
      detail: "Enviar correo",
      icon: <MdEmail />,
      href: `mailto:${email}?subject=Contacto desde mi portafolio`,
      external: false,
    },
    {
      id: "03",
      title: "GITHUB",
      description: "Explora mis proyectos y desarrollos",
      detail: "Visitar perfil",
      icon: <FaGithub />,
      href: githubProfile,
      external: true,
    },
  ];

  return (
    <section className="contact-page" id="Contacto">
      <div className="contact-background-band"></div>

      <div className="contact-layout">
        {/* INFORMACIÓN DE CONTACTO */}
        <div className="contact-information-panel">
          <div className="contact-heading">
            <span className="contact-eyebrow">CONTACTO / 004</span>

            <h1>
              HABLEMOS<span>.</span>
            </h1>

            <p>
              ¿Tienes una idea o proyecto en mente? Estoy abierto a nuevas
              oportunidades y colaboraciones.
            </p>
          </div>

          <div className="contact-methods">
            {contacts.map((contact) => (
              <a
                key={contact.id}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="contact-method"
              >
                <div className="contact-method-icon">{contact.icon}</div>

                <div className="contact-method-text">
                  <h2>{contact.title}</h2>
                  <p>{contact.description}</p>
                  <span>{contact.detail}</span>
                </div>

                <FiArrowUpRight className="contact-method-arrow" />
              </a>
            ))}
          </div>

          <div className="contact-left-footer">
            <span>GUSTAVO MARTÍNEZ AMADOR</span>
            <span>FULLSTACK DEVELOPER</span>
          </div>
        </div>

        {/* PANEL VISUAL DERECHO */}
        <div className="contact-visual-panel">
          <div className="visual-top-label">
            <span>DEVELOPMENT STUDIO</span>
            <span>01 — 03</span>
          </div>

          <div className="contact-illustration">
            <svg
              viewBox="0 0 600 520"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Ilustración de desarrollo de software con una ventana de código"
            >
              <defs>
                <linearGradient id="screenGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#29282d" />
                  <stop offset="100%" stopColor="#171719" />
                </linearGradient>

                <linearGradient id="glowGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a94c68" />
                  <stop offset="100%" stopColor="#701f38" />
                </linearGradient>
              </defs>

              {/* CÍRCULOS DECORATIVOS */}
              <circle
                cx="300"
                cy="250"
                r="205"
                fill="none"
                stroke="#b88b75"
                strokeOpacity="0.16"
                strokeWidth="1"
                strokeDasharray="5 12"
              />

              <circle
                cx="300"
                cy="250"
                r="165"
                fill="none"
                stroke="#701f38"
                strokeOpacity="0.35"
                strokeWidth="2"
              />

              {/* VENTANA DE CÓDIGO */}
              <rect
                x="105"
                y="110"
                width="390"
                height="290"
                rx="12"
                fill="url(#screenGradient)"
                stroke="#b88b75"
                strokeOpacity="0.6"
                strokeWidth="2"
              />

              {/* BARRA SUPERIOR */}
              <path
                d="M117 110 H483 Q495 110 495 122 V155 H105 V122 Q105 110 117 110"
                fill="#29282d"
              />

              <circle cx="128" cy="133" r="5" fill="#a94c68" />
              <circle cx="146" cy="133" r="5" fill="#b88b75" />
              <circle cx="164" cy="133" r="5" fill="#a9b4ad" />

              <text
                x="300"
                y="137"
                textAnchor="middle"
                fill="#aaa4a0"
                fontSize="11"
                fontFamily="monospace"
              >
                developer.js
              </text>

              {/* CÓDIGO */}
              <g fontFamily="monospace" fontSize="15" fontWeight="500">
                <text x="137" y="193" fill="#b88b75">
                  01
                </text>
                <text x="170" y="193" fill="#a94c68">
                  const
                </text>
                <text x="226" y="193" fill="#f1e7d5">
                  {" "}
                  developer = {"{"}
                </text>

                <text x="137" y="230" fill="#b88b75">
                  02
                </text>
                <text x="184" y="230" fill="#a9b4ad">
                  {" "}
                  name:
                </text>
                <text x="254" y="230" fill="#f1e7d5">
                  {" "}
                  "Gustavo",
                </text>

                <text x="137" y="267" fill="#b88b75">
                  03
                </text>
                <text x="184" y="267" fill="#a9b4ad">
                  {" "}
                  stack:
                </text>
                <text x="254" y="267" fill="#f1e7d5">
                  {" "}
                  "Fullstack",
                </text>

                <text x="137" y="304" fill="#b88b75">
                  04
                </text>
                <text x="184" y="304" fill="#a9b4ad">
                  {" "}
                  passion:
                </text>
                <text x="270" y="304" fill="#f1e7d5">
                  {" "}
                  "Coding"
                </text>

                <text x="137" y="341" fill="#b88b75">
                  05
                </text>
                <text x="170" y="341" fill="#f1e7d5">
                  {"};"}
                </text>
              </g>

              {/* BRILLO INFERIOR */}
              <rect
                x="235"
                y="425"
                width="130"
                height="5"
                rx="3"
                fill="url(#glowGradient)"
              />

              {/* ELEMENTOS FLOTANTES */}
              <g fill="#f1e7d5" fontFamily="monospace">
                <text x="55" y="245" fontSize="30" opacity="0.7">
                  {"<"}
                </text>
                <text x="520" y="315" fontSize="30" opacity="0.7">
                  {"/>"}
                </text>
                <text x="460" y="80" fontSize="20" fill="#b88b75">
                  {"{}"}
                </text>
                <text x="90" y="440" fontSize="22" fill="#a94c68">
                  {"</>"}
                </text>
              </g>

              <circle cx="490" cy="215" r="5" fill="#b88b75" />
              <circle cx="90" cy="175" r="4" fill="#a94c68" />
              <circle cx="445" cy="420" r="4" fill="#a9b4ad" />
            </svg>
          </div>

          <div className="visual-bottom-label">
            <div>
              <span>CREATIVE THINKING</span>
              <h2>Ideas into code.</h2>
            </div>

            <span className="visual-decoration">{"{ DEV }"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
