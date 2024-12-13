// src/components/Footer.js
import React from 'react';

const Footer = () => {
  // Datos dinámicos para el ejemplo
  const categories = [
    { id: 1, name: 'Categoría 1', url: '/tienda/categoria/1/categoria-1' },
    { id: 2, name: 'Categoría 2', url: '/tienda/categoria/2/categoria-2' },
  ];

  const contact = {
    address: 'Calle Principal, Ciudad',
    email: 'cholocatedsantos@gmail.com',
    facebook: 'https://www.facebook.com/profile.php?id=100022086709565&mibextid=ZbWKwL',
    instagram: 'https://www.instagram.com/_chocolate_ds/',
    whatsapp: '+50497858132'
  };

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Categorías */}
          <div className="col-sm-6 col-lg-4 mb-4">
            <h4 className="text-uppercase">Categorías</h4>
            <ul className="list-unstyled">
              {categories.map((cat) => (
                <li key={cat.id} className="mb-2">
                  <a href={cat.url} className="text-light text-decoration-none">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-sm-6 col-lg-4 mb-4">
            <h4 className="text-uppercase">Contacto</h4>
            <p className="mb-2">{contact.address}</p>
            <p className="mb-2">
              Tel:{' '}
              <a href={`tel:${contact.phone}`} className="text-light text-decoration-none">
                {contact.phone}
              </a>
            </p>
            <p className="mb-2">
              Email:{' '}
              <a href={`mailto:${contact.email}`} className="text-light text-decoration-none">
                {contact.email}
              </a>
            </p>
            <div className="mt-3">
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-light">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Suscripción */}
          <div className="col-sm-6 col-lg-4 mb-4">
            <h4 className="text-uppercase">Suscríbete</h4>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre completo"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">
            © 2024 Cholocate Doña Santos | Sitio web creado por{' '}
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-light">
              Francisco Paz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
