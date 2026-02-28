import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Contato } from './pages/Contato/Contato';
import { Sobre } from './pages/Sobre/Sobre';           
import { Newsletter } from './pages/Newsletter/Newsletter';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/contato" element={<Contato />} />
        
        {/* Rota Restrita */}
        <Route path="/auth" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;