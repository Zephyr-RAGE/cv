import React from "react";
import "../Styles/Viajero.css";
import ImageGallery from "./ImageGallery";

const viajeroImages = [
  "/viajero1.jpeg",
  "/viajero2.jpeg",
  "/viajero3.jpeg",
  // Agrega el resto de imágenes
];

export default function Viajero() {
  return (
    <div className="contenido-principal" id="Viajero">
      <ImageGallery images={viajeroImages} />

      <div className="trabajo-id">
        <h1>App del viajero</h1>
        Esta aplicación web de viajes fue desarrollada como un proyecto Full
        Stack, con el objetivo de integrar funcionalidades relacionadas con la
        consulta de información de destinos, conversión de divisas y gestión de
        registros de operaciones. El proyecto contempla una arquitectura
        cliente-servidor, permitiendo la comunicación entre el frontend y el
        backend mediante APIs REST.
        <br />
        <br />
        Para el desarrollo del frontend utilicé Angular, implementando
        componentes, servicios y formularios para gestionar la interacción del
        usuario con la aplicación, consumir los endpoints del backend y
        presentar la información obtenida de manera dinámica.
        <br />
        <br />
        En el backend trabajé con Python y FastAPI, implementando una
        arquitectura organizada por capas, utilizando modelos, schemas,
        repositories y services para separar las responsabilidades de la
        aplicación. También desarrollé endpoints para la gestión de usuarios,
        autenticación, consulta de información y operaciones relacionadas con la
        conversión de monedas.
        <br />
        <br />
        Asimismo, implementé persistencia de datos mediante SQLAlchemy,
        gestionando la estructura de la base de datos SQLite y sus
        modificaciones a través de migraciones con Alembic. Entre las
        funcionalidades desarrolladas se encuentra la autenticación mediante
        JWT, la administración de sesiones, el registro de conversiones y la
        consulta de tasas de cambio, integrando servicios externos para obtener
        información actualizada.
      </div>
    </div>
  );
}
