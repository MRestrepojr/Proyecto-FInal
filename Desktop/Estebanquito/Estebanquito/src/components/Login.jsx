import React, { useState } from 'react';
import './Login.css';

const api = {
  post: (url, data) => new Promise((resolve, reject) => {
    // Simular una llamada API para múltiples usuarios
    setTimeout(() => {
      // Validación para el administrador
      if (data.email === 'admin@example.com' && data.password === 'Admin') {
        resolve({ data: { message: 'Inicio de sesión como admin exitoso' } });
      }
      // Validación para otros usuarios
      else if (data.email === 'test@example.com' && data.password === 'password') {
        resolve({ data: { message: 'Inicio de sesión exitoso' } });
      } else {
        reject({ message: 'Credenciales inválidas' });
        window.location.href = '/register';
      }
    }, 1000);
  })
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
  

    api.post('/login', { email, password })
      .then((response) => {
        console.log(response.data.message);

        if (email === 'admin@example.com') {
          // Redirigir a la interfaz administrativa
          window.location.href = '/Usuario';
        } else {
          // Redirigir a la página principal para usuarios regulares
          window.location.href = '/';
        }
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

const handleGoHome = () => {
  window.location.href = '/';
};

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Inicio de sesión</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label">
            Correo electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              required
              placeholder="tu@ejemplo.com"
            />
          </label>
          <label className="login-label">
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              required
              placeholder="••••••••"
            />
          </label>
          {error && <p className="login-error">{error}</p>}
          <button
            type="submit"
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>
          <button type="button" onClick={handleGoHome}>Inicio</button>
        </form>
      </div>
    </div>
  );
}
