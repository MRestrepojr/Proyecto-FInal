import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">EsteBanquito</div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">Inicio</a>
          </li>
          <button onClick={() => navigate('/login')} className="button">Login</button>
          <button onClick={() => navigate('/register')} className="button">Registrarse</button>
        </ul>
      </nav>

      {/* Main content */}
      <div className="main-content">
        <header className="header">
          <h1 className="header-title">Bienvenido a EsteBanquito</h1>
          <p className="header-subtitle">Su confianza es nuestra prioridad.</p>
        </header>

        {/* Servicios */}
        <section className="services-section">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="services-grid">
            <div className="card">
              <h3 className="card-title">Consulta de saldo</h3>
              <p className="card-text">Verifique su saldo en tiempo real desde cualquier lugar.</p>
            </div>
            <div className="card">
              <h3 className="card-title">Transferencias rápidas</h3>
              <p className="card-text">Realice transferencias de forma rápida y segura.</p>
            </div>
            <div className="card">
              <h3 className="card-title">Pago de servicios</h3>
              <p className="card-text">Pague sus facturas en línea sin complicaciones.</p>
            </div>
            <div className="card">
              <h3 className="card-title">Préstamos y financiamiento</h3>
              <p className="card-text">Obtenga acceso rápido a créditos y financiamiento.</p>
            </div>
            <div className="card">
              <h3 className="card-title">Atención al cliente 24/7</h3>
              <p className="card-text">Siempre estamos aquí para ayudarlo.</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>© 2024 EsteBanquito. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
