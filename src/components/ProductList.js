import React from 'react';
import logo4 from '../Styles/images/bolsa_cacao.jpeg';
import logoma from '../Styles/images/manteca.jpeg';
import logo2 from '../Styles/images/manteca2.jpeg';
import logo3 from '../Styles/images/manteca3.jpeg';
import logo1 from '../Styles/images/bolsa3.jpeg';
import Imagen from '../components/MySlider';
import '../Assets/css/Productos.css'; // Archivo CSS para los estilos específicos

const ProductList = () => {
  const products = [
    { id: 1, name: 'Esprit Ruffle Shirt', price: 16.64, image: logo4 },
    { id: 2, name: 'Herschel Supply', price: 35.31, image: logo2 },
    { id: 3, name: 'Herschel Supply', price: 35.31, image: logo3 },
    { id: 4, name: 'Herschel Supply', price: 35.31, image: logo1 },
    { id: 5, name: 'Herschel Supply', price: 35.31, image: logoma },
  ];

  return (
    <>
      <Imagen />
      <div className="container my-5">
        <h2 className="text-center mb-4">Productos</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card product-card">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    className="card-img-top product-image"
                    alt={product.name}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                  <button className="btn btn-primary">
                    <i className="fas fa-cart-plus"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
