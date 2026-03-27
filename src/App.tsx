import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Contato } from './pages/Contato/Contato';
import { Sobre } from './pages/Sobre/Sobre';           
import { Newsletter } from './pages/Newsletter/Newsletter';
import { Dashboard } from './pages/Dashboard/Dashboard';


const ClientLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      
      <Routes>
        {/* Rotas Públicas (Com NavBar) */}
        <Route element={<ClientLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/contato" element={<Contato />} />
        </Route>
        
        {/* Rotas Restritas (Sem NavBar) */}
        <Route path="/auth" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;