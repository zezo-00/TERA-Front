import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/assets/images/logotera_azul_semfundo.png" alt="Logo TERA" className="footer-logo-img" />
            <div className="footer-logo-text">
              <span className="tera-name">TERA</span>
              <span className="tera-sub">GESTÃO E NEGÓCIOS</span>
            </div>
          </div>
          <p className="footer-description">
            Excelência em consultoria empresarial, transformando estratégias em resultados concretos para o seu negócio.
          </p>
          <div className="social-icons">
            <a href="#" className="social-btn"><Instagram size={18} /></a>
            <a href="#" className="social-btn"><Linkedin size={18} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>INSTITUCIONAL</h4>
          <ul>
            <li><a href="#">Sobre a TERA</a></li>
            <li><a href="#">Fale Conosco</a></li>
          </ul>
        </div>
      
      </div>

      <div className="footer-bottom">
        <p>© 2026 TERA GESTÃO E NEGÓCIOS. TODOS OS DIREITOS RESERVADOS.</p>
      </div>
    </footer>
  );
};