import React, { useState } from 'react';
import logo4 from '../Styles/images/bolsacacaco.png';
import logoma from '../Styles/images/cashe.jpg';
import logo2 from '../Styles/images/manteca2.png';
import logo3 from '../Styles/images/crema2.png';
import logo1 from '../Styles/images/chocolate2.png';
import logo5 from '../Styles/images/mani.jpg';
import logo6 from '../Styles/images/mantequilla.jpg';
import logo7 from '../Styles/images/mantequillaAlm.jpg';
import '../Assets/css/Productos.css'; // Archivo CSS para los estilos específicos

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Cacao en polvo', price: 5.0, description: 'En prestaciones de una libra y media libra', image: logo4 },
    { id: 2, name: 'Manteca de cacao', price: 5.0, description: '60mg en frascos de vidrio.', image: logo2 },
    { id: 3, name: 'Manteca de cacao', price: 5.0, description: '60mg en frascos de lata.', image: logo3 },
    { id: 4, name: 'Choco pinol', price: 5.0, description: 'Maiz y cacao, prestación en bolsa de una libra.', image: logo1 },
    { id: 5, name: 'Mantequilla de Marañón', price: 5.0, description: 'Ideal para repostería o consumo directo.', image: logoma },
    { id: 6, name: 'Mantequilla de Maní', price: 5.0, description: 'Ideal para repostería o consumo directo.', image: logo5 },
    { id: 7, name: 'Mantequilla de Almendra', price: 5.0, description: 'Ideal para repostería o consumo directo.', image: logo6 },
    { id: 7, name: 'Mantequilla de Macadamia', price: 5.0, description: 'Ideal para repostería o consumo directo.', image: logo7 },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Nuestros Productos</h2>
      <div className="row justify-content-center">
        {products.map((product) => (
          <div className="col-md-4 col-lg-3 mb-4" key={product.id}>
            <div className="card product-card shadow-sm">
              <div className="product-image-container">
                <img
                  src={product.image}
                  className="card-img-top product-image"
                  alt={product.name}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="product-price">L {product.price.toFixed(1)}</p>
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => openModal(product)}
                >
                  <i className="fas fa-share-alt"></i> Más Información
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <div className="modal-links">
              <a
                href={`https://wa.me/32001671?text=Hola, estoy interesado en ${selectedProduct.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100022086709565&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a
                href="https://www.instagram.com/_chocolate_ds/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
