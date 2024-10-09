import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />  {}
        <Route path="Login" element={<Login />} />  {}
        <Route path="Register" element={<Register />} />  {}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
