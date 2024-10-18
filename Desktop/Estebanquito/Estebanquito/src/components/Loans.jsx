// src/components/Loans.js
import React, { useState } from 'react';
import './Loans.css'; // Usamos el mismo CSS para mantener consistencia

function Loans() {
  const [loanAmount, setLoanAmount] = useState(''); // Para el monto del préstamo ingresado
  const [loans, setLoans] = useState([]); // Lista de préstamos solicitados

  // Manejar la solicitud de préstamo
  const handleLoanSubmit = (e) => {
    e.preventDefault();
    if (loanAmount) {
      setLoans([...loans, { amount: parseFloat(loanAmount), date: new Date().toLocaleDateString() }]); // Agrega el nuevo préstamo
      setLoanAmount(''); // Resetea el campo del formulario
    }
  };

  return (
    <div className="container">
      {/* Navbar (Reutilizamos el mismo) */}
      <nav className="navbar">
        <div className="nav-brand">Mi Banco</div>
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">Inicio</a></li>
          <li className="nav-item"><a href="/Usuario" className="nav-link">Perfil</a></li>
        </ul>
      </nav>

      {/* Header */}
      <header className="header">
        <h1 className="header-title">Solicitudes de Préstamos</h1>
        <p className="header-subtitle">Solicita un préstamo y se reflejará inmediatamente en tu cuenta</p>
      </header>

      {/* Main content */}
      <main className="main-content">
        <section className="services-section">
          <h2 className="section-title">Solicita tu Préstamo</h2>

          {/* Formulario para solicitar préstamos */}
          <form onSubmit={handleLoanSubmit} className="loan-form">
            <label htmlFor="loanAmount" className="form-label">Monto del Préstamo:</label>
            <input
              type="number"
              id="loanAmount"
              className="form-input"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="Ingresa el monto del préstamo"
              required
            />
            <button type="submit" className="button">Solicitar Préstamo</button>
          </form>

          {/* Lista de préstamos solicitados */}
          {loans.length > 0 && (
            <div className="services-grid">
              {loans.map((loan, index) => (
                <div key={index} className="card">
                  <h3 className="card-title">Préstamo Solicitado</h3>
                  <p className="card-text">Monto: ${loan.amount.toFixed(2)}</p>
                  <p className="card-text">Fecha: {loan.date}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Mi Banco. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Loans;
