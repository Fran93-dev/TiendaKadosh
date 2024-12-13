import React from 'react';
import Mapa from '../components/Map';

const FAQ = () => {
    const preguntas = [
      { pregunta: "¿Dónde están ubicados?", respuesta: "Estamos en Calle CA-13, Lérida, Colón." },
      { pregunta: "¿Hacen envíos?", respuesta: "Sí, realizamos envíos a todo el país." },
    ];
  
    return (
      <><div className="container my-5">
            <h2 className="text-center mb-4">Preguntas Frecuentes</h2>
            <div>
                {preguntas.map((item, index) => (
                    <div key={index} className="mb-3">
                        <h5>{item.pregunta}</h5>
                        <p>{item.respuesta}</p>
                    </div>
                ))}
            </div>
        </div><Mapa /></>
    );
  };
  
  export default FAQ;

