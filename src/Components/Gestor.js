import "../Styles/Gestor.css";
import ImageGallery from "./ImageGallery";

const gestorImages = [
  "/work3.jpeg",
  "/detail.jpeg",
  "/conductor.jpeg",
  // Agrega aquí el resto de imágenes hasta la 23
  // "/Portfolio/Website/4.webp",
  // ...
  // "/Portfolio/Website/23.webp",
];

const Gestor = () => {
  return (
    <div className="contenido-principal" id="Website">
      <ImageGallery images={gestorImages} />

      <div className="trabajo-id">
        <h1>Gestor de logistica y transporte TMS</h1>

        <p>
          En este proyecto se llevo a cabo un sistema de gestion de logistica y
          transporte de tipo TMS. Su alcance era alto ya que se busca que sea
          usado a nivel nacional en regiones de españa y diferentes capitales.
          Este sistema cuenta con la capaidad de gestionar, adminsitrar y
          rastrear pedidos solicitados de parte del cliente, capacidad de
          administrar seguimiento a los conductores.
          <br />
          <br />
          Los clientes pueden crear cuentas de usuario para poder dar
          seguimiento a los pedidos de mercancia que realizan, pedir las medidas
          y kilos que necesitaran y acceder a un descuento dependiendo de las
          dimensiones de la mercancia.
        </p>
      </div>
    </div>
  );
};

export default Gestor;
