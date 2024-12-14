import React from 'react';

const Footer = () => {
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
          {/* Contacto */}
          <div className="col-12 mb-4 text-center">
            <h4 className="text-uppercase">Contáctanos</h4>
            <p className="mb-2">{contact.address}</p>
            <p className="mb-2">
              Tel:{' '}
              <a href={`tel:${contact.whatsapp}`} className="text-light text-decoration-none">
                {contact.whatsapp}
              </a>
            </p>
            <p className="mb-2">
              Email:{' '}
              <a href={`mailto:${contact.email}`} className="text-light text-decoration-none">
                {contact.email}
              </a>
            </p>
            <div className="mt-3">
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-light me-3"
                style={{ fontSize: '2rem' }}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-light me-3"
                style={{ fontSize: '2rem' }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-light"
                style={{ fontSize: '2rem' }}
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              </div>

          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">
            © 2024 KADOSH Cholocate | Sitio web creado por{' '}
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
