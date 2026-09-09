import "../Styles/Landing.css";
import ImageGallery from "./ImageGallery";

const landingImages = [
  "/banner.jpeg",
  "/values.jpeg",
  "/icons.jpeg",
  // Agrega el resto de imágenes
];

const Landing = () => {
  return (
    <div className="contenido-principal" id="Landing">
      <ImageGallery images={landingImages} />

      <div className="trabajo-id">
        <h1>Landing Page</h1>

        <p>
          Este proyecto consiste en el desarrollo de una Landing Page moderna,
          diseñada para captar la atención del usuario desde el primer momento y
          presentar información de manera clara, atractiva y profesional. El
          objetivo principal fue crear una interfaz con un diseño limpio, y
          optimizado para brindar una buena experiencia tanto en equipos de
          escritorio como en dispositivos móviles.
          <br></br>
          <br></br>
          Este website esta enfocado a la venta de servicios de software de
          logistica y transporte, donde los clientes podran tener el control de
          los registros de pedidos que hagan, comunicaicon directa con empresa
          encargada del transpote. A pedido del cliente se buscaba algo simple y
          facil de entender tanto para el cliente como para sus usuarios.
        </p>
      </div>
    </div>
  );
};

export default Landing;
