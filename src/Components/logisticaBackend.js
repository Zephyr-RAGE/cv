import React from "react";
import ImageGallery from "./ImageGallery";
import "../Styles/logisticaBackend.css";

const websiteImages = [
  "/backend1.jpeg",
  "/backend2.jpeg",
  "/backend3.jpeg",
  // Agrega aquí el resto de imágenes hasta la 23
  // "/Portfolio/Website/4.webp",
  // ...
  // "/Portfolio/Website/23.webp",
];

const LogisticaBackend = () => {
  return (
    <div className="contenido-principal" id="BackendTMS">
      <ImageGallery images={websiteImages} />

      <div className="trabajo-id">
        <h1>Backend de la plataforma</h1>

        <p>
          En este proyecto backend se implementó modelos servicios esquema
          módulo de migraciones con alembic funciones que permitieran filtro de
          servicios con precios. Además del implementación de protección de
          rutas con middlewares protección de los tokens y refresh token para un
          accesos adecuado para una autenticación y validación de datos
          correspondiente alineados a los requisitos estándar para la protección
          de usuarios
          <br />
          <br />
          por ejemplo con el sistema de albimvic con pythonen es un sistema de
          migraciones que permite el uso de código python con sql para
          actualizar tablas crear tablas y o eliminar migraciones y volver a una
          rama anterior o una migración de si quisiéramos integrar una tabla
          nueva y poner algo como usuario contraseñas y correo en este caso
          simplemente implementaría una migracion con alembic con: alembic
          revision --autogenerate "mensaje". Para inicializar una version de una
          migracion donde el sistema en la consola arrojara algo como generated
          "jc7dghetxgxjs" que es el codigo unico de esa version. y nos permite
          abrir algo como un python con SQL adentro para poder agregar un
          regresar o mejor dicho deshacer los cambios.
          <br />
          <br />
          algunos proyectos Back incluyendo este por defecto y por mi forma de
          trabajar con los sistemas de migraciones y además el backen también
          integro lo que es el toquen framework que me permite generar un token
          aleatorio usando una cadena de texto String de 28 caracteres o hasta
          32 que por defecto son 28 que es con lo que yo trabaje en este
          proyecto a su vez Además de que trabajé con lo que JWT.io para poder
          revisar la contraseña y la firma del token para revisar si viene o no
          el token expuesto y asi poder evitar entrada de bots, inyecciones o
          cache web deceptions o poisoning.
        </p>
      </div>
    </div>
  );
};

export default LogisticaBackend;
