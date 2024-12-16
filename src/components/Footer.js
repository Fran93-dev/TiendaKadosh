import React from 'react';
import '../Assets/css/Footer.css'; // Archivo CSS para estilos del footer

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-3">
        <div className="text-center">
          <p className="mb-2">
            © 2024 KADOSH Chocolate | Sitio web creado por{' '}
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-light fw-bold">
              Francisco Paz
            </a>
          </p>
          <p className="mb-0">© Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
