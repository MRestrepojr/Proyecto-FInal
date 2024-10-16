import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      {/* Navbar */}
      <nav style={navbarStyle}>
        <div style={navBrandStyle}>EsteBanquito</div>
        <ul style={navListStyle}>
          <li style={navItemStyle}><a href="/" style={navLinkStyle}>Cerrar Sesion</a></li>
          
        </ul>
      </nav>

      {/* Main content */}
      <div style={mainContentStyle}>
        <header style={headerStyle}>
          <h1 style={headerTitleStyle}>Bienvenido a EsteBanquito</h1>
          <p style={headerSubtitleStyle}>Gestione sus finanzas con facilidad y seguridad.</p>
        </header>

        {/* Servicios */}
        <section style={servicesSectionStyle}>
          <h2 style={sectionTitleStyle}>Servicios Disponibles</h2>
          <div style={servicesGridStyle}>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Gestión de cuentas</h3>
              <p style={cardTextStyle}>Verifique su saldo y detalles de sus cuentas en tiempo real.</p>
              <button onClick={() => navigate('/Account')} style={buttonStyle}>Ver Cuentas</button>
            </div>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Transacciones</h3>
              <p style={cardTextStyle}>Realice transferencias y gestione sus transacciones.</p>
              <button onClick={() => navigate('/transactions')} style={buttonStyle}>Ver Transacciones</button>
            </div>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Solicitudes de Préstamos</h3>
              <p style={cardTextStyle}>Solicite préstamos fácilmente con plazos flexibles.</p>
              <button onClick={() => navigate('/loans')} style={buttonStyle}>Solicitar Préstamo</button>
            </div>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Reportes Financieros</h3>
              <p style={cardTextStyle}>Consulte sus ingresos, egresos y deudas.</p>
              <button onClick={() => navigate('/reports')} style={buttonStyle}>Ver Reportes</button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>© 2024 EsteBanquito. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

// Estilos generales
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',
  backgroundColor: '#f5f7fa',
  fontFamily: "'Roboto', sans-serif",
  margin: 0,
  padding: 0,
};

// Navbar
const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#2980b9',
  color: 'white',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

const navBrandStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  margin: '0 15px',
};

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
};

// Main content
const mainContentStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '40px 20px',
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center',
};

// Header
const headerStyle = {
  marginBottom: '40px',
  borderBottom: '2px solid #2980b9',
  paddingBottom: '20px',
};

const headerTitleStyle = {
  color: '#2c3e50',
  fontSize: '42px',
  margin: 0,
};

const headerSubtitleStyle = {
  fontSize: '20px',
  color: '#7f8c8d',
  marginTop: '10px',
};

// Servicios Section
const servicesSectionStyle = {
  marginBottom: '50px',
};

const sectionTitleStyle = {
  fontSize: '28px',
  color: '#2c3e50',
  marginBottom: '30px',
};

const servicesGridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
};

const cardStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f8f8f8',
  width: '250px',
};

const cardTitleStyle = {
  fontSize: '20px',
  color: '#2980b9',
  marginBottom: '10px',
};

const cardTextStyle = {
  fontSize: '16px',
  color: '#7f8c8d',
};

// Botones
const buttonStyle = {
  padding: '12px 24px',
  backgroundColor: '#2980b9',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s ease',
};

// Footer
const footerStyle = {
  padding: '20px',
  backgroundColor: '#34495e',
  color: 'white',
  textAlign: 'center',
  borderRadius: '10px',
  marginTop: 'auto',
};

export default Home;
