import React from 'react';
import './navbarComponent.css';
import miLogo from '../../assets/logo.png'; // Importa tu logo desde la carpeta de assets

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo y nombre de la app al lado izquierdo */}
        <a href="#" className="navbar-brand">
          <img src={miLogo} className="navbar-logo" alt="Logo" />
          <span className="navbar-title">MarketApp</span>
        </a>

        {/* Enlaces centrados */}
        <div className="navbar-menu">
          <ul className="navbar-links">
            <li><a href="#" className="nav-link active">Inicio</a></li>
            <li><a href="#" className="nav-link">Productos</a></li>
          </ul>
        </div>

        {/* Barra de búsqueda, Ícono del carrito y botón Iniciar Sesión al lado derecho */}
        <div className="navbar-right">
          <div className="navbar-search">
            <div className="search-icon">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 19l-4-4m0-7A7 7 0 111 8a7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" className="search-input" placeholder="Buscar productos..." />
          </div>
          <a href="#" className="cart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 5H18M7 13L5.4 5H20m-9 9h-1v6h6v-6h-6z" />
            </svg>
          </a>
          <a href="/login" className="login-button">Iniciar Sesión</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
