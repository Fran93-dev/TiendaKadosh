import React from 'react';
import Ubicacion from '../components/Map';
import '../Assets/css/contacto.css';

const FAQ = () => {
  const preguntas = [
    { pregunta: "¿Dónde están ubicados?", respuesta: "Estamos en Calle CA-13, Lérida, Colón." },
    { pregunta: "¿Hacen envíos?", respuesta: "Sí, realizamos envíos a todo el país." },
    { pregunta: "¿Qué productos ofrecen?", respuesta: "Ofrecemos chocolates artesanales elaborados con materia prima de alta calidad." },
    { pregunta: "¿Cómo puedo contactarlos?", respuesta: "Puedes contactarnos a través de nuestra página de Facebook o enviarnos un mensaje por WhatsApp." },
  ];

  return (
    <>
      <div className="container my-5 contcolor">
        <h2 className="text-center mb-4">Preguntas Frecuentes</h2>
        <div>
          {preguntas.map((item, index) => (
            <div key={index} className="mb-4"><div className='contcolor'>
              <h5 className="text-primary">{item.pregunta}</h5>
              <p>{item.respuesta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección del mapa */}
      <Ubicacion />
    </>
  );
};

export default FAQ;
