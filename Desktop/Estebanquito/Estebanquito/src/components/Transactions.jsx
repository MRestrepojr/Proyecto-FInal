import React from 'react';
import './Home.css'; 

function Account() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-brand">Mi Banco</div>
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">Inicio</a></li>
          <li className="nav-item"><a href="/Usuario" className="nav-link">Perfil</a></li>
        </ul>
      </nav>
      <main className="main-content">
        <header className="header">
          <h1 className="header-title">Maneja tu dinero</h1>
          <p className="header-subtitle">Este es el componente de gestión de cuentas</p>
        </header>
        <section className="services-section">
          <h2 className="section-title">Transacciones</h2>
          <div className="services-grid">
            <div className="card">
              <h3 className="card-title">Transferir</h3>
              <p className="card-text">Realizar transferencias entre cuentas</p>
              <button className="button">Transferir</button>
            </div>
            <div className="card">
              <h3 className="card-title">Depositar</h3>
              <p className="card-text">Realizar depósitos en su cuenta</p>
              <button className="button">Depositar</button>
            </div>
            <div className="card">
              <h3 className="card-title">Retirar</h3>
              <p className="card-text">Realizar retiros de su cuenta</p>
              <button className="button">Retirar</button>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Banking App</p>
      </footer>
    </div>
  );
}

export default Account;