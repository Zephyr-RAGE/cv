import "../Styles/Website.css";
import ImageGallery from "./ImageGallery";

const websiteImages = [
  "/contact.jpeg",
  "/portfolio.jpeg",
  "/portafolio1.jpeg",
  // Agrega aquí el resto de imágenes hasta la 23
  // "/Portfolio/Website/4.webp",
  // ...
  // "/Portfolio/Website/23.webp",
];

const Website = () => {
  return (
    <div className="contenido-principal" id="Website">
      <ImageGallery images={websiteImages} />

      <div className="trabajo-id">
        <h1>Website Portfolio</h1>

        <p>
          Este website de portafolio está diseñado para mostrar algunos de mis
          trabajos más recientes como Developer. Es un espacio donde publico
          avances de proyectos y presento mi experiencia profesional para las
          vacantes a las que aplico. Además, me sirve como punto de referencia
          para futuros desarrollos y como guía para resolver situaciones o
          implementar funcionalidades que ya he trabajado anteriormente.
          <br />
          <br />
          Soy egresado de la carrera de Ingeniería en Sistemas Computacionales
          con especialidad en Desarrollo de Software. Anteriormente formé parte
          de la empresa Latesoftware, donde participé como Frontend Developer
          desarrollando interfaces, implementando componentes reutilizables,
          consumiendo APIs REST desde el backend y colaborando en el diseño y
          creación de iconografía para diferentes módulos de la plataforma.
          <br />
          <br />
          Tambien durante la posicion que cubri tambien estuve del lado del
          backend integrando modelos, schemas, Apis publicas, haciendo
          migraciones con alembic ademas de estar gestionando la base de datos
          datos mediante postgres y SQlite.
        </p>
      </div>
    </div>
  );
};

export default Website;
