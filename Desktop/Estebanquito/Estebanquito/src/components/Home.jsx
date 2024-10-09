import React from 'react';

function Home() {
  return (
    <div className="Home" style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#2c3e50', fontSize: '36px' }}>Bienvenido a EsteBanquito</h1>
      <p style={{ fontSize: '18px', marginTop: '10px', color: '#34495e' }}>
        Nos complace tenerlo con nosotros. En EsteBanquito, su confianza es nuestra prioridad.
      </p>
      <div style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '24px', color: '#2c3e50' }}>Nuestros Servicios:</h2>
        <ul style={{ 
          fontSize: '16px', 
          color: '#34495e', 
          listStyleType: 'none', 
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <li>Consulta de saldo en tiempo real</li>
          <li>Transferencias rápidas y seguras</li>
          <li>Pago de servicios en línea</li>
          <li>Acceso a préstamos y financiamiento</li>
          <li>Atención al cliente 24/7</li>
        </ul>
      </div>
      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        backgroundColor: '#ecf0f1', 
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h3 style={{ fontSize: '20px', color: '#2980b9' }}>Inicie sesión para acceder a su cuenta</h3>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button style={{ 
            padding: '10px 20px', 
            backgroundColor: '#3498db', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer'
          }}>
            Login
          </button>
          <button style={{ 
            padding: '10px 20px', 
            backgroundColor: '#3498db', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer'
          }}>
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;