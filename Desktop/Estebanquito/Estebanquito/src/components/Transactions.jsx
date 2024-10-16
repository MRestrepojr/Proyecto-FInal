import React from 'react';
import './Home.css'; // assuming the CSS styles are in a separate file

function Account() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-brand">Banking App</div>
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Transactions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Account</a>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        <header className="header">
          <h1 className="header-title">Gestión de cuentas</h1>
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