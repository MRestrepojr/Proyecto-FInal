// src/components/Account.js
import React, { useState, useEffect } from 'react';
import './Account.css';

function Account() {
  // Estados para almacenar datos
  const [accountBalance, setAccountBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulación de llamada a la API
  useEffect(() => {
    // Simular la carga de datos de una API
    setTimeout(() => {
      // Datos simulados
      const fetchedBalance = 15300.75; // Saldo de cuenta
      const fetchedTransactions = [
        { id: 1, description: 'Compra en supermercado', amount: -50.25, date: '2024-10-10' },
        { id: 2, description: 'Depósito de nómina', amount: 1500.00, date: '2024-10-08' },
        { id: 3, description: 'Pago de tarjeta', amount: -100.00, date: '2024-10-05' },
      ]; // Detalles de transacciones
      const fetchedProfile = {
        name: 'Juan Pérez',
        email: 'juan.perez@correo.com',
        phone: '555-1234',
      }; // Perfil de usuario

      // Actualizar estados con los datos simulados
      setAccountBalance(fetchedBalance);
      setTransactions(fetchedTransactions);
      setProfile(fetchedProfile);
      setLoading(false); // Desactivar estado de carga
    }, 2000); // Simular retraso de 2 segundos
  }, []);

  // Mostrar un spinner mientras los datos se están cargando
  if (loading) {
    return <div className="main-content">Cargando datos...</div>;
  }

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">Mi Banco</div>
        <ul className="nav-list">
          <li className="nav-item"><a href="#home" className="nav-link">Inicio</a></li>
          <li className="nav-item"><a href="#account" className="nav-link">Cuentas</a></li>
          <li className="nav-item"><a href="#profile" className="nav-link">Perfil</a></li>
        </ul>
      </nav>

      {/* Header */}
      <header className="header">
        <h1 className="header-title">Gestión de Cuentas</h1>
        <p className="header-subtitle">Accede a tus cuentas, transacciones y perfil</p>
      </header>

      {/* Main content */}
      <main className="main-content">
        <section className="services-section">
          <h2 className="section-title">Servicios</h2>
          <div className="services-grid">

            {/* Card 1: Saldo de Cuenta */}
            <div className="card">
              <h3 className="card-title">Saldo de Cuenta</h3>
              <p className="card-text">
                {accountBalance !== null
                  ? `Saldo disponible: $${accountBalance.toFixed(2)}`
                  : 'Cargando saldo...'}
              </p>
              <button className="button">Ver saldo</button>
            </div>

            {/* Card 2: Detalles de Transacciones */}
            <div className="card">
              <h3 className="card-title">Detalles de Transacciones</h3>
              <p className="card-text">Historial de transacciones:</p>
              <ul>
                {transactions.map((transaction) => (
                  <li key={transaction.id}>
                    {transaction.date} - {transaction.description}: ${transaction.amount.toFixed(2)}
                  </li>
                ))}
              </ul>
              <button className="button">Ver transacciones</button>
            </div>

            {/* Card 3: Perfil de Usuario */}
            <div className="card">
              <h3 className="card-title">Perfil de Usuario</h3>
              {profile ? (
                <div>
                  <p className="card-text">Nombre: {profile.name}</p>
                  <p className="card-text">Correo: {profile.email}</p>
                  <p className="card-text">Teléfono: {profile.phone}</p>
                </div>
              ) : (
                <p className="card-text">Cargando perfil...</p>
              )}
              <button className="button">Ver perfil</button>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Mi Banco. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Account;
