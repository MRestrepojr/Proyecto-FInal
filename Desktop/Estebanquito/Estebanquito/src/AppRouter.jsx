import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Usuario from './components/Usuario';
import Account from './components/Account';
import Transactions from './components/Transactions';
import Loans from './components/Loans';
import Reports from './components/Reports';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Usuario" element={<Usuario />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Transacciones" element={<Transactions />} />
        <Route path="/Prestamos" element={<Loans />} />
        <Route path="/Reportes" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;