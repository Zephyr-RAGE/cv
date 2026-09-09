import "../Styles/trabajos.css";
import { Link } from "react-router-dom";

const Trabajos = () => {
  return (
    <div className="trabajos-container">
      <div className="proyectos-id">
        <h2>Proyectos personales y laborales</h2>
        <div className="portafolio-id">
          <Link to="/Website" className="links-id">
            <div className="informacion-id">
              <img
                src="/portafolio1.jpeg"
                alt="Portafolio de evidencias"
                className="imagen-id"
              />
              <div className="texto-id">
                <h3>Website portafolio</h3>
                <p>website portafolio.com</p>
              </div>
            </div>
          </Link>

          <Link to="/Landing" className="links-id">
            <div className="informacion-id">
              <img
                src="/work2.jpeg"
                alt="Portafolio de evidencias"
                className="imagen-id"
              />
              <div className="texto-id">
                <h3>MRMS</h3>
                <p>infologisticamrms.com</p>
              </div>
            </div>
          </Link>

          <Link to="/Gestor" className="links-id">
            <div className="informacion-id">
              <img
                src="/work3.jpeg"
                alt="Portafolio de evidencias"
                className="imagen-id"
              />
              <div className="texto-id">
                <h3>Panel de gestion</h3>
                <p>panel.logisticamrms.com</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trabajos;
