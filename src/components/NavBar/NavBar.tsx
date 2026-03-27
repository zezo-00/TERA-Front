import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-brand">
        
        {/* A caixa do quadrado azul */}
        <div className="navbar-icon-wrapper">
          <img 
            src="/assets/images/logo-tera-icon.png" 
            alt="Ícone TERA" 
            className="navbar-icon-img" 
          />
        </div>

        {/* os textos ao lado do ícone */}
        <div className="navbar-brand-text">
          
      <img 
        src="/assets/images/logo-tera-sem-ícone.PNG" 
        alt="TERA" 
        className="tera-title-img"/>
          
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