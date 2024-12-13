import React from 'react';
import aboutImage1 from "../Styles/images/logo.jpeg";
import aboutImage2 from "../Styles/images/logo2.jpg";
import bgImage from "../Styles/images/002.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Assets/css/MySlider.css';
import '../Assets/css/sobreNosotros.css';

const SobreNosotros = () => {
  return (
    <div>
      {/* Banner de la sección */}
      <section
        className="banner-section"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="banner-overlay">
          <h2 className="banner-title">Acerca de Nosotros</h2>
        </div>
      </section>

      {/* Contenido */}
      <section className="content-section">
        <div className="container">
          {/* Historia de la empresa */}
          <div className="row align-items-center mb-5">
            <div className="col-md-7">
              <h3 className="section-title">Nuestra Historia</h3>
              <p className="section-text">
                En nuestra tienda, celebramos el arte de producir café y cacao
                en crema artesanal. Desde nuestros inicios, hemos trabajado
                con agricultores locales para garantizar productos de la más
                alta calidad y sostenibilidad. Todo comenzó con un sueño:
                compartir la riqueza de los sabores tradicionales con el
                mundo.
              </p>
              <p className="section-text">
                Cada taza de café y cada cucharada de cacao en crema cuentan
                una historia de dedicación, pasión y respeto por la tierra.
                Desde el grano hasta la crema, cuidamos cada paso para
                garantizar la perfección.
              </p>
              <p className="section-text">
                ¿Preguntas? Visítanos en nuestra tienda en Calle Café #123,
                Ciudad del Sabor, o llámanos al (+123) 456-7890.
              </p>
            </div>
            <div className="col-md-5">
              <div className="image-container">
                <img src={aboutImage1} alt="Nuestra historia" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>

          {/* Misión de la empresa */}
          <div className="row align-items-center">
            <div className="col-md-5 order-md-2">
              <div className="image-container">
                <img src={aboutImage2} alt="Nuestra misión" className="img-fluid rounded shadow" />
              </div>
            </div>
            <div className="col-md-7 order-md-1">
              <h3 className="section-title">Nuestra Misión</h3>
              <p className="section-text">
                Nuestra misión es proporcionar experiencias únicas a través de
                productos de alta calidad, preservando las tradiciones y
                apoyando a las comunidades locales. Creemos que un buen café
                y un cacao de calidad pueden cambiar el día de una persona y
                conectar culturas.
              </p>
              <blockquote className="blockquote mt-4">
                <p>
                  "El verdadero sabor de la vida se encuentra en las cosas
                  simples, como el aroma de un buen café o la calidez de un
                  cacao cremoso."
                </p>
                <footer className="blockquote-footer">Inspiración diaria</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;
