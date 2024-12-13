import React from 'react';
import cacaoField from '../Styles/images/stock.jpg'; // imagen de la región
import production from '../Styles/images/1.jpeg'; // imagen del proceso
import chocolateBar from '../Styles/images/2.jpg'; // imagen del producto final

const StoryPackaging = () => {
  const packages = [
    {
      id: 1,
      title: "Desde la Región",
      description: "Cada barra comienza en los fértiles campos de cacao.",
      image: cacaoField,
    },
    {
      id: 2,
      title: "El Proceso Artesanal",
      description: "Amor y dedicación en cada paso de producción.",
      image: production,
    },
    {
      id: 3,
      title: "Tu Chocolate Perfecto",
      description: "El resultado final: un deleite para tus sentidos.",
      image: chocolateBar,
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center my-4">Empaques con Historia</h2>
      <div className="row">
        {packages.map((pkg) => (
          <div className="col-md-4" key={pkg.id}>
            <div className="card mb-4">
              <img src={pkg.image} className="card-img-top" alt={pkg.title} />
              <div className="card-body">
                <h5 className="card-title">{pkg.title}</h5>
                <p className="card-text">{pkg.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryPackaging;
