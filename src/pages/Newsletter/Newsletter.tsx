import { Linkedin, TrendingUp, Users, BookOpen } from 'lucide-react';
import { Footer } from '../../components/Footer/Footer';
import './newsletter.css';

export const Newsletter = () => {
  return (
    <div className="page-container">
      {/* 1. HERO SECTION E DEGRADÊ */}
      <section className="linkedin-hero">
        <div className="label-group justify-center">
          <span className="label-line white-line"></span>
          <span className="section-label-white">COMUNIDADE TERA</span>
        </div>
        <h1 className="linkedin-hero-title">Conecte-se com a Excelência</h1>
        <p className="linkedin-hero-subtitle">
          Faça parte da nossa rede no LinkedIn e veja insights valiosos.
        </p>
      </section>

      {/* 2. CARD FLUTUANTE DE CONVITE */}
      <section className="linkedin-card-section">
        <div className="linkedin-card">
          <div className="linkedin-icon-wrapper">
            <Linkedin size={48} strokeWidth={1.5} />
          </div>
          
          <h2>Siga o TERA </h2>
          <p className="card-description">
            Junte-se a líderes e executivos que já acompanham nossas análises de mercado, dicas de gestão estratégica e conteúdos exclusivos sobre alta performance corporativa.
          </p>

          {/* COLAR O SEU LINK DO LINKEDIN NO HREF ABAIXO */}
          <a href="COLOQUE_SEU_LINK_AQUI" target="_blank" rel="noopener noreferrer" className="btn-linkedin">
            <Linkedin size={20} />
            ACOMPANHAR NO LINKEDIN
          </a>

          <div className="linkedin-features">
            <div className="feature">
              <TrendingUp size={24} className="feature-icon" />
              <span>Tendências de<br/>Mercado</span>
            </div>
            <div className="feature">
              <Users size={24} className="feature-icon" />
              <span>Networking de<br/>Alto Nível</span>
            </div>
            <div className="feature">
              <BookOpen size={24} className="feature-icon" />
              <span>Artigos e<br/>Estudos de Caso</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOOTER */}
      <Footer />
    </div>
  );
};