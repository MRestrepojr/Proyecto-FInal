import React, { useState } from 'react';
import api from '../api.js';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/register', { email, password, name })
      .then((response) => {
        console.log('Registro de usuario exitoso:', response.data);
        // Redireccionar a la página de inicio de sesión
        window.location.href = '/login';
      })
      .catch((error) => {
        console.error('Error al registrar usuario:', error);
        setError(error.message);
      });
  };

  return (
    <div className="Register">
      <h2>Registro de usuario</h2>
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
        <label>
          Nombre:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Register;