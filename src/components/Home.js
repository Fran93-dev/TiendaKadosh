import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bgImage from "../Styles/images/coffe-3.jpg";
import '../Assets/css/Home.css';

const contact = {
  facebook: 'https://www.facebook.com/profile.php?id=100022086709565&mibextid=ZbWKwL',
  instagram: 'https://www.instagram.com/_chocolate_ds/',
  whatsapp: '+50497858132',
};

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Overlay para el efecto de oscurecimiento */}
      <div className="banner-overlay"></div>

      {/* Contenido del banner */}
      <div className="banner-content text-center">
        <h1 className="banner-title">El Mejor Chocolate Artesanal</h1>
        <p className="banner-subtitle">
          Elaborado con los mejores granos de cacao, cultivados con amor y dedicación.
        </p>
        <a href="/productos" className="banner-button">
          Explorar Productos
        </a>

        {/* Iconos de redes sociales */}
        <div className="social-icons mt-4">
          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i> <span>Chocolate Doña Santos</span>
          </a>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i> <span>_chocolate_ds</span>
          </a>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i> <span>+504 9785-8132</span>
          </a>
        </div>
        <p className="banner-footer mt-3">Kadosh: ¡Olor y sabor rico a tu paladar!</p>
      </div>
    </div>
  );
};

export default Banner;
