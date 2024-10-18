import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const api = {
  post: (url, data) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === 'admin@example.com' && data.password === 'Admin') {
        resolve({ data: { message: 'Inicio de sesión como admin exitoso' } });
      }
      else if (data.email === 'test@example.com' && data.password === 'password') {
        resolve({ data: { message: 'Inicio de sesión exitoso' } });
      } else {
        reject({ message: 'Credenciales inválidas' });
      }
    }, 1000);
  })
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    api.post('/login', { email, password })
      .then((response) => {
        console.log(response.data.message);
        if (email === 'admin@example.com') {
          navigate('/Usuario');
        } else {
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
        setError(error.message);
        if (error.message === 'Credenciales inválidas') {
          navigate('/register');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">EsteBanquito</div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">Inicio</a>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <div className="login-section">
          <h2 className="login-title">Inicio de sesión</h2>
          <form onSubmit={handleSubmit}>
            <label className="label">
              Correo electrónico:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                required
                placeholder="tu@ejemplo.com"
              />
            </label>
            <label className="label">
              Contraseña:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                required
                placeholder="••••••••"
              />
            </label>
            {error && <p className="error">{error}</p>}
            <button
              type="submit"
              className={`button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 EsteBanquito. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Login;
