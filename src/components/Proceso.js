import React from 'react';
import cacaoHarvest from '../Styles/images/palocacao.jpg'; // Imagen de la cosecha
import fermentation from '../Styles/images/chocolate.png'; // Imagen de la fermentación
import drying from '../Styles/images/2.jpeg'; // Imagen del secado
import roasting from '../Styles/images/cacao-polvo.jpg'; // Imagen del tostado
import grinding from '../Styles/images/chocolate.jpg'; // Imagen de la molienda
import packaging from '../Styles/images/bolsacacaco.png'; // Imagen del empaquetado
import '../Assets/css/StoryPacking.css';

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Cosecha de las mazorcas de cacao",
      description:
        "Las vainas maduras de cacao son recolectadas manualmente utilizando machetes para garantizar la calidad de los granos.",
      image: cacaoHarvest,
    },
    {
      id: 2,
      title: "Fermentación",
      description:
        "Los granos se extraen de las vainas y se fermentan durante 5 a 7 días para desarrollar el sabor y aroma característicos del cacao.",
      image: fermentation,
    },
    {
      id: 3,
      title: "Secado",
      description:
        "Los granos fermentados se secan al sol o en estufas para reducir la humedad y evitar el crecimiento de moho.",
      image: drying,
    },
    {
      id: 4,
      title: "Tostado",
      description:
        "A temperaturas controladas, el tostado intensifica los sabores y facilita la separación de las cáscaras.",
      image: roasting,
    },
    {
      id: 5,
      title: "Descascarado y Triturado",
      description:
        "Se separan las cáscaras para obtener nibs, que se muelen hasta formar un licor de cacao grueso.",
      image: grinding,
    },
    {
      id: 6,
      title: "Empaque y Distribución",
      description:
        "El cacao en polvo final se tamiza, empaqueta herméticamente y se almacena para su distribución.",
      image: packaging,
    },
  ];

  return (
    <div className="container process">
      <h2 className="text-center my-5 title">Elaboración del Cacao en Polvo</h2>
      <div className="row">
        {steps.map((step) => (
          <div className="col-md-4 mb-4" key={step.id}>
            <div className="card custom-card">
              <div className="image-container">
                <img src={step.image} className="card-img-top" alt={step.title} />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{step.title}</h5>
                <p className="card-text">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
