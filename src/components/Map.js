import React from 'react'

const Ubicacion = () => {
    return (
      <div className="container my-5">
        <h2 className="text-center mb-4">Nuestra Ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3843.0604646308416!2d-86.122987!3d15.588417999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDM1JzE4LjMiTiA4NsKwMDcnMjIuOCJX!5e0!3m2!1ses!2shn!4v1733783512834!5m2!1ses!2shn"       width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="map"
        ></iframe>
      </div>
    );
  };
  
  export default Ubicacion;
  