import React, { useState } from 'react';
import api from '../api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/login', { email, password })
      .then((response) => {
        console.log('Inicio de sesión exitoso:', response.data);
        // Redireccionar a la página principal
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
        setError(error.message);
      });
  };

  return (
    <div className="Login">
      <h2>Inicio de sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Correo electrónico:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;