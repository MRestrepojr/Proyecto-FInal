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
          <li className="nav-item"><a href="/" className="nav-link">Cerrar Sesion</a></li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="main-content">
        <header className="header">
          <h1 className="header-title">Bienvenido a EsteBanquito</h1>
          <p className="header-subtitle">Gestione sus finanzas con facilidad y seguridad.</p>
        </header>

        {/* Servicios */}
        <section className="services-section">
          <h2 className="section-title">Servicios Disponibles</h2>
          <div className=" services-grid">
            <div className="card">
              <h3 className="card-title">Gestión de cuentas</h3>
              <p className="card-text">Verifique su saldo y detalles de sus cuentas en tiempo real.</p>
              <button onClick={() => navigate('/Account')} className="button">Ver Cuentas</button>
            </div>
            <div className="card">
              <h3 className="card-title">Transacciones</h3>
              <p className="card-text">Realice transferencias y gestione sus transacciones.</p>
              <button onClick={() => navigate('/transactions')} className="button">Ver Transacciones</button>
            </div>
            <div className="card">
              <h3 className="card-title">Solicitudes de Préstamos</h3>
              <p className="card-text">Solicite préstamos fácilmente con plazos flexibles.</p>
              <button onClick={() => navigate('/loans')} className="button">Solicitar Préstamo</button>
            </div>
            <div className="card">
              <h3 className="card-title">Reportes Financieros</h3>
              <p className="card-text">Consulte sus ingresos, egresos y deudas.</p>
              <button onClick={() => navigate('/reports')} className="button">Ver Reportes</button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 EsteBanquito. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;