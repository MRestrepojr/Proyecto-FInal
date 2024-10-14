import React, { useState } from 'react';
import api from '../api.js';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [accountType, setAccountType] = useState('ahorros');
  const [balance, setBalance] = useState(100000);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear objeto de usuario con los datos
    const userData = { email, password, name, phoneNumber, accountType, balance };

    api.post('/register', userData)
      .then((response) => {
        console.log('Registro de usuario exitoso:', response.data);

        // Guardar los datos del usuario en localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirigir a la interfaz de usuario después del registro exitoso
        window.location.href = '/Usuario';
      })
      .catch((error) => {
        console.error('Error al registrar usuario:', error);
        setError(error.message);
      });
  };

  // Redirigir a la página principal
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="Register">
      <h2>Registro de usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Correo electrónico:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </label>
        <br />
        <label>
          Nombre:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
        </label>
        <br />
        <label>
          Número de cuenta (celular):
          <input type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} required />
        </label>
        <br />
        <label>
          Tipo de cuenta:
          <select value={accountType} onChange={(event) => setAccountType(event.target.value)}>
            <option value="ahorros">Ahorros</option>
            <option value="corriente">Corriente</option>
          </select>
        </label>
        <br />
        <p>Saldo Minimo: {balance} Pesos Colombianos</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Registrar</button>
        <button type="button" onClick={handleGoHome}>Inicio</button>
      </form>
    </div>
  );
}

export default Register;
