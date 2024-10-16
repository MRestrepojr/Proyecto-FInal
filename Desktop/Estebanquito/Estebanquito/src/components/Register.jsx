import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api.js';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [accountType, setAccountType] = useState('ahorros');
  const [balance] = useState(100000);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const userData = { email, password, name, phoneNumber, accountType, balance };

    api.post('/register', userData)
      .then((response) => {
        console.log('Registro de usuario exitoso:', response.data);
        localStorage.setItem('userData', JSON.stringify(userData));
        navigate('/Usuario');
      })
      .catch((error) => {
        console.error('Error al registrar usuario:', error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-content">
          <a href="/" className="nav-brand">EsteBanquito</a>
          <ul className="nav-list">
            <li className="nav-item"><a href="/" className="nav-link">Inicio</a></li>
          </ul>
        </div>
      </nav>

      <div className="main-content">
        <div className="form-container">
          <h2 className="form-title">Registro de usuario</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label className="form-label">
                Correo electrónico:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                Contraseña:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                Nombre:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                Número de cuenta (celular):
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="form-input"
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">
                Tipo de cuenta:
                <select
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                  className="form-input form-select"
                >
                  <option value="ahorros">Ahorros</option>
                  <option value="corriente">Corriente</option>
                </select>
              </label>
            </div>
            <p className="balance-info">Saldo Mínimo: {balance} Pesos Colombianos</p>
            {error && <p className="error-message">{error}</p>}
            <button
              type="submit"
              className="button"
              disabled={isLoading}
            >
              {isLoading ? 'Registrando...' : 'Registrar'}
            </button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 EsteBanquito. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Register;
