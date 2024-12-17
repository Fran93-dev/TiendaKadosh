import React, { useEffect, useState } from 'react';
import aboutImage1 from "../Styles/images/logo.jpeg";
import aboutImage2 from "../Styles/images/logo2.jpg";
import bgImage from "../Styles/images/coffe-3.jpg";
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
          {/* Bienvenida */}
          <div className="row align-items-center mb-5">
            <div className="col-md-12 text-center">
              <h3 className="section-title">Bienvenid@ a Kadosh</h3>
              <p className="section-text">
                El sabor auténtico del cacao en polvo. Aquí encontrarás una selección
                premium de cacao en polvo, ideal para transformar tus recetas y disfrutar
                del verdadero sabor del cacao. Ya sea para preparar bebidas reconfortantes,
                repostería o para añadir un toque especial a tus platillos, nuestros productos
                están elaborados con el mejor cacao para garantizar calidad y sabor en cada uso.
              </p>
            </div>
          </div>

          {/* Nuestra Misión */}
          <div className="row align-items-center mb-5">
            <div className="col-md-7 text-left fade-right">
              <h3 className="section-title">Nuestra Misión</h3>
              <p className="section-text">
                Nuestra misión es ser un motor de desarrollo económico en Lérida, Tocoa, Colón,
                promoviendo el consumo de chocolate mediante la producción de cacao en polvo de
                calidad superior, buscando el desarrollo económico de la comunidad. Nos comprometemos
                a ofrecer productos de la más alta calidad, cultivados y procesados con esmero,
                reflejando el sabor y la tradición de nuestra tierra.
              </p>
            </div>
            <div className="col-md-5 fade-left">
              <img src={aboutImage1} alt="Nuestra misión" className="img-fluid rounded shadow" />
            </div>
          </div>

          {/* Sostenibilidad */}
          <div className="row align-items-center mb-5">
            <div className="col-md-5 fade-right">
              <img src={aboutImage2} alt="Sostenibilidad" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-7 text-right fade-left">
              <h3 className="section-title">Sostenibilidad</h3>
              <p className="section-text">
                Buscamos innovar constantemente en la producción, asegurando procesos que respeten el
                medio ambiente y beneficien a nuestros productores locales. Desde Lérida, Tocoa, Colón,
                cultivamos un futuro sostenible con el sabor del mejor cacao.
              </p>
            </div>
          </div>

          {/* Cultura y Tradición */}
          <div className="row align-items-center mb-5">
            <div className="col-md-12 text-center">
              <h3 className="section-title">Cultura y Tradición del Cacao</h3>
              <p className="section-text">
                El cacao es nuestra pasión y nuestra herencia. En Lérida, Tocoa, Colón, trabajamos con
                dedicación para mantener vivas las tradiciones del cultivo y la producción de cacao,
                ofreciendo productos que mantienen el sabor y la calidad de nuestra región.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;
