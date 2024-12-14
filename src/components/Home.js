import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bgImage from "../Styles/images/bolsa_cacao.jpeg";
import bgImage2 from "../Styles/images/bolsa2.jpeg";
import bgImage3 from "../Styles/images/bolsa4.jpeg";
import '../Assets/css/Home.css'; 
import aboutImage2 from "../Styles/images/coffee-2.jpg";

const Home = () => {
  const [modalImage, setModalImage] = useState(null); // Estado para manejar la imagen activa

  // Función para abrir el modal
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      {/* Sección de encabezado */}
      <section
        style={{
          backgroundImage: `url(${aboutImage2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Fondo semitransparente detrás del texto */}
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '80%',
          }}
        >
          <h1 className="shiny-text" style={{ fontSize: '4rem', fontWeight: 'bold', color: '#fff' }}>
            El Mejor Chocolate Artesanal
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#fff', margin: '20px auto' }}>
            Elaborado con los mejores granos de cacao, cultivados con amor y dedicación.
          </p>
          <button
            style={{
              padding: '10px 20px',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            <a href="/productos" className="btn btn-primary">
              Explorar Productos
            </a>
          </button>
        </div>
      </section>

      {/* Sección de productos estrella */}
      <section className="container p-t-75 p-b-120">
        <h2 className="text-center mb-5">Nuestros Productos Estrella</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="product-card">
              <img
                src={bgImage}
                alt="Producto 1"
                className="img-fluid product-image"
                onClick={() => openModal(bgImage)}
              />
              <h3>Cacao en Polvo Premium</h3>
              <p>100% orgánico, ideal para bebidas y repostería.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="product-card">
              <img
                src={bgImage2}
                alt="Producto 2"
                className="img-fluid product-image"
                onClick={() => openModal(bgImage2)}
              />
              <h3>Chocolate Artesanal</h3>
              <p>Hecho a mano con cacao de comercio justo.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="product-card">
              <img
                src={bgImage3}
                alt="Producto 3"
                className="img-fluid product-image"
                onClick={() => openModal(bgImage3)}
              />
              <h3>Cacao en Granos</h3>
              <p>Perfecto para quienes aman lo natural y puro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de imagen */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Producto ampliado" className="modal-image" />
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '50%',
                padding: '5px 10px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
