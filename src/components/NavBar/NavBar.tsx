// src/components/NavBar/NavBar.tsx
import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className="navbar-container">
      {/* Mudamos a classe para navbar-brand para aplicar o novo estilo de alinhamento */}
      <Link to="/" className="navbar-brand">
        
        {/* A caixa que vai virar o quadrado azul */}
        <div className="navbar-icon-wrapper">
          <img 
            src="/assets/images/logo-tera-icon.png" 
            alt="Ícone TERA" 
            className="navbar-icon-img" 
          />
        </div>

        {/* Os textos ao lado do ícone */}
        <div className="navbar-brand-text">
          <span className="tera-title">TERA</span>
          <span className="tera-subtitle">GESTÃO E NEGÓCIOS</span>
        </div>

      </Link>
      
      <ul className="navbar-links">
        <li><Link to="/sobre">Sobre Nós</Link></li>
        <li><Link to="/newsletter">Newsletter</Link></li>
        <li><Link to="/contato">Fale Conosco</Link></li>
      </ul>
    </nav>
  );
};