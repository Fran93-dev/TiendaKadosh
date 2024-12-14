import React, { useEffect, useState } from 'react';
import aboutImage1 from "../Styles/images/logo.jpeg";
import aboutImage2 from "../Styles/images/logo2.jpg";
import bgImage from "../Styles/images/002.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Assets/css/MySlider.css';
import '../Assets/css/sobreNosotros.css';

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayText;
};

const SobreNosotros = () => {
  const historyText = useTypewriter(
    "En nuestra tienda, celebramos el arte de producir café y cacao en crema artesanal. Desde nuestros inicios, hemos trabajado con agricultores locales para garantizar productos de la más alta calidad y sostenibilidad."
  );

  const missionText = useTypewriter(
    "Nuestra misión es proporcionar experiencias únicas a través de productos de alta calidad, preservando las tradiciones y apoyando a las comunidades locales.",
    30
  );

  const bannerText = useTypewriter("Acerca de Nosotros", 100);

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
          <h2 className="banner-title">{bannerText}</h2>
        </div>
      </section>

      {/* Contenido */}
      <section className="content-section">
        <div className="container">
          {/* Historia de la empresa */}
          <div className="row align-items-center mb-5">
            <div className="col-md-7 text-left fade-right">
              <h3 className="section-title">Nuestra Historia</h3>
              <p className="section-text">{historyText}</p>
            </div>
            <div className="col-md-5 fade-left">
              <img src={aboutImage1} alt="Nuestra historia" className="img-fluid rounded shadow" />
            </div>
          </div>

          {/* Misión de la empresa */}
          <div className="row align-items-center">
            <div className="col-md-5 order-md-1 fade-right">
              <img src={aboutImage2} alt="Nuestra misión" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-7 order-md-2 fade-left text-right">
              <h3 className="section-title">Nuestra Misión</h3>
              <p className="section-text">{missionText}</p>
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
