import React from 'react'; 
import { Link } from 'react-router-dom';
import '../Assets/css/Navbar.css'; // Archivo de estilos CSS para el navbar
import aboutImage2 from "../Styles/images/logo2.jpg";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      {/* Contenido del Navbar */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          {/* Enlaces de navegación */}
          <li className="nav-item">
            <Link className="nav-link" to="/inicio">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos">
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactos">
              Contacto
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sobre-nosotros">
              Sobre Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
        <div className="d-flex ms-auto">
        <Link className="navbar-brand" to="/inicio">
        <img src={aboutImage2} alt="Logo" height="40" className="navbar-logo" />
      </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
