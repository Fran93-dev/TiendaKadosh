import React from 'react';
import '../Assets/css/Loader.css'; // Archivo CSS para el estilo del loader
import logo from '../Styles/images/image.png';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <img src={logo} alt="Cargando..." className="loader-logo" />
        
      </div>
    </div>
  );
};

export default Loader;
