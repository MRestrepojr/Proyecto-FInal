import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Usuario from './components/Usuario.jsx';
import Account from './components/Account.jsx';
import Transactions from './components/Transactions.jsx';
import Loans from './components/Loans.jsx';
import Reports from './components/Reports.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />  {}
        <Route path="Login" element={<Login />} />  {}
        <Route path="Register" element={<Register />} />  {}
        <Route path="Usuario" element={<Usuario />} />  {}
        <Route path="Account" element={<Account />} />  {}
        <Route path="Transactions" element={<Transactions />} />  {}
        <Route path="Loans" element={<Loans />} />  {}
        <Route path="Reports" element={<Reports />} />  {}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
