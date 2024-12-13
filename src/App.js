import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Blooger from './components/Blog';
import Contacto from './components/Contacto';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './components/Home';
import Proceso from './components/Proceso';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Redirige la ruta raíz "/" a "/inicio" */}
        <Route path="/" element={<Navigate to="/inicio" />} />

        {/* Ruta para la página de "Inicio" */}
        <Route path="/inicio" element={<Inicio />} />

        {/* Ruta para la página de "Sobre Nosotros" */}
        <Route path="/sobre-nosotros" element={<Blooger />} />

        {/* Ruta para la página de productos */}
        <Route path="/contactos" element={<Contacto />} />
        
        {/* Ruta para la página de productos */}
        <Route path="/productos" element={<ProductList />} />

        {/* Ruta para la página de productos */}
        <Route path="/blog" element={<Proceso />} />

        {/* Ruta de error 404 */}
        <Route path="*" element={<h1>404: Página no encontrada</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
