// src/components/Reports.js
import React, { useState, useEffect } from 'react';
import './Account.css'; // Reutilizamos el mismo CSS

function Reports() {
  const [financialData, setFinancialData] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    pendingDebts: 0,
  });

  useEffect(() => {
    // Simular la obtención de datos financieros
    const fetchFinancialData = () => {
      // Datos simulados
      const fetchedIncome = 25000.00;  // Ingresos históricos
      const fetchedExpenses = 18000.50; // Egresos históricos
      const fetchedDebts = 5000.00;    // Deudas pendientes

      // Actualizar el estado con los datos obtenidos
      setFinancialData({
        totalIncome: fetchedIncome,
        totalExpenses: fetchedExpenses,
        pendingDebts: fetchedDebts,
      });
    };

    fetchFinancialData();
  }, []);

  return (
    <div className="container">
      {/* Navbar (reutilizamos el mismo estilo) */}
      <nav className="navbar">
        <div className="nav-brand">Mi Banco</div>
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">Inicio</a></li>
          <li className="nav-item"><a href="/Usuario" className="nav-link">Perfil</a></li>
        </ul>
      </nav>

      <header className="header">
        <h1 className="header-title">Reportes Financieros</h1>
        <p className="header-subtitle">Resumen de tu historial financiero</p>
      </header>


      <main className="main-content">
        <section className="services-section">
          <h2 className="section-title">Tus Reportes</h2>

          <div className="services-grid">

            <div className="card">
              <h3 className="card-title">Ingresos Totales</h3>
              <p className="card-text">Histórico de ingresos:</p>
              <p className="card-text">${financialData.totalIncome.toFixed(2)}</p>
            </div>


            <div className="card">
              <h3 className="card-title">Egresos Totales</h3>
              <p className="card-text">Histórico de egresos:</p>
              <p className="card-text">${financialData.totalExpenses.toFixed(2)}</p>
            </div>


            <div className="card">
              <h3 className="card-title">Deudas Pendientes</h3>
              <p className="card-text">Monto de deudas actuales:</p>
              <p className="card-text">${financialData.pendingDebts.toFixed(2)}</p>
            </div>
          </div>
        </section>
      </main>


      <footer className="footer">
        <p>© 2024 Mi Banco. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Reports;
