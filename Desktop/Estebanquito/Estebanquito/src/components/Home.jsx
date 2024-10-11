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
          <li style={navItemStyle}><a href="/" style={navLinkStyle}>Inicio</a></li>
          <li style={navItemStyle}><a href="/services" style={navLinkStyle}>Servicios</a></li>
          <li style={navItemStyle}><a href="/about" style={navLinkStyle}>Nosotros</a></li>
          <li style={navItemStyle}><a href="/contact" style={navLinkStyle}>Contacto</a></li>
        </ul>
      </nav>

      {/* Main content */}
      <div style={mainContentStyle}>
        <header style={headerStyle}>
          <h1 style={headerTitleStyle}>Bienvenido a EsteBanquito</h1>
          <p style={headerSubtitleStyle}>Su confianza es nuestra prioridad.</p>
        </header>

        {/* Servicios */}
        <section style={servicesSectionStyle}>
          <h2 style={sectionTitleStyle}>Nuestros Servicios</h2>
          <div style={servicesGridStyle}>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Consulta de saldo</h3>
              <p style={cardTextStyle}>Verifique su saldo en tiempo real desde cualquier lugar.</p>
            </div>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Transferencias rápidas</h3>
              <p style={cardTextStyle}>Realice transferencias de forma rápida y segura.</p>
            </div>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Pago de servicios</h3>
              <p style={cardTextStyle}>Pague sus facturas en línea sin complicaciones.</p>
            </div>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Préstamos y financiamiento</h3>
              <p style={cardTextStyle}>Obtenga acceso rápido a créditos y financiamiento.</p>
            </div>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>Atención al cliente 24/7</h3>
              <p style={cardTextStyle}>Siempre estamos aquí para ayudarlo.</p>
            </div>
          </div>
        </section>

        {/* Login and Register */}
        <section style={loginSectionStyle}>
          <h3 style={loginTitleStyle}>Inicie sesión para acceder a su cuenta</h3>
          <div style={loginButtonContainerStyle}>
            <button onClick={() => navigate('/login')} style={buttonStyle}>Login</button>
            <button onClick={() => navigate('/register')} style={buttonStyle}>Registrarse</button>
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

// Estilos generales para que ocupe toda la pantalla
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
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
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
};

// Estilos para las tarjetas (servicios)
const cardStyle = {
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'left',
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

// Login Section
const loginSectionStyle = {
  padding: '30px',
  backgroundColor: '#ecf0f1',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  marginTop: '50px',
};

const loginTitleStyle = {
  fontSize: '22px',
  color: '#2980b9',
};

const loginButtonContainerStyle = {
  display: 'flex',
  gap: '20px',
  marginTop: '20px',
  justifyContent: 'center',
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
