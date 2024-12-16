import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Blooger from './components/Blog';
import Contacto from './components/Contacto';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Inicio from './components/Home';
import Proceso from './components/Proceso';
import Loader from './components/Loading';

const App = () => {
  const [loading, setLoading] = useState(false);

  // Detectar cambios de ruta y activar el loader
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Duración del loader
    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, [location]);

  return (
    <>
      {loading && <Loader />} {/* Muestra el loader mientras cambia de ruta */}
      <Navbar />
      <Routes>
        {/* Redirige la ruta raíz "/" a "/inicio" */}
        <Route path="/" element={<Navigate to="/inicio" />} />

        {/* Ruta para la página de "Inicio" */}
        <Route path="/inicio" element={<Inicio />} />

        {/* Ruta para la página de "Sobre Nosotros" */}
        <Route path="/sobre-nosotros" element={<Blooger />} />

        {/* Ruta para la página de contactos */}
        <Route path="/contactos" element={<Contacto />} />

        {/* Ruta para la página de productos */}
        <Route path="/productos" element={<ProductList />} />

        {/* Ruta para la página de proceso */}
        <Route path="/blog" element={<Proceso />} />

        {/* Ruta de error 404 */}
        <Route path="*" element={<h1>404: Página no encontrada</h1>} />
      </Routes>
      <Footer />
    </>
  );
};

// Envolver el App con Router
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
