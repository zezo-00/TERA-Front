import { BarChart, Layers, Users, Shield } from 'lucide-react';
import './home.css';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';

export const Home = () => {
  return (
    <div className="home-container">
      {/* 1. SEÇÃO HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-label">EXCELÊNCIA EM GESTÃO</span>
          <h1 className="hero-title">
            Estratégias que<br />
            impulsionam o seu<br />
            negócio
          </h1>
          <p className="hero-subtitle">
            Consultoria empresarial de alto nível para empresas que<br />
            buscam crescimento sustentável e inovação constante.
          </p>

          <div className="hero-buttons">
          <Link to="/contato">
            <button className="btn-outline">
            FALE CONOSCO <span className="arrow">→</span>
            </button>
          </Link>
              
              <Link to="/sobre">            <button className="btn-solid">NOSSA MISSÃO</button>
              </Link>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO EXPERTISE */}
      <section className="expertise-section">
        <div className="section-header">
          <div className="label-group">
            <span className="label-line"></span>
            <span className="section-label">NOSSA EXPERTISE</span>
          </div>
          <h2 className="section-main-title">Soluções Corporativas Integradas</h2>
          <p className="section-description">
            Oferecemos um ecossistema completo de serviços para otimizar a gestão do seu negócio.
          </p>
        </div>

        <div className="expertise-grid">
          <div className="expertise-card">
            <div className="icon-box blue-box">
              <BarChart size={36} strokeWidth={1.5} />
            </div>
            <h3>Gestão Financeira</h3>
            <p>Análise profunda de indicadores e reestruturação de fluxo de caixa para maximizar lucros.</p>
          </div>
          <div className="expertise-card">
            <div className="icon-box blue-box">
              <Layers size={36} strokeWidth={1.5} />
            </div>
            <h3>Consultoria Estratégica</h3>
            <p>Planejamento de longo prazo e definição de metas claras para o crescimento do seu negócio.</p>
          </div>
          <div className="expertise-card">
            <div className="icon-box grey-box">
              <Users size={36} strokeWidth={1.5} />
            </div>
            <h3>Recursos Humanos</h3>
            <p>Desenvolvimento de lideranças e gestão de talentos para criar equipes de alta performance.</p>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO OPORTUNIDADES */}
      <section className="opportunities-section">
        <div className="opp-image-container">
          <img src="/assets/images/consultoria.png" alt="Consultoria TERA" className="opp-img" />
        </div>
        <div className="opp-text-container">
          <div className="label-group">
            <span className="label-line"></span>
            <span className="section-label">NOSSA TRAJETÓRIA</span>
          </div>
          <h2 className="opp-title">Transformando desafios em oportunidades reais.</h2>
          <p className="opp-text">
            A TERA Gestão e Negócios nasceu da necessidade de oferecer ao mercado uma consultoria que unisse profundidade técnica com pragmatismo executivo.
            <br /><br />
            Nossa metodologia própria já ajudou diversas empresas a redefinirem seus caminhos e alcançarem resultados expressivos.
          </p>
          <Link to="/sobre">
                    <button className="btn-outline-dark">CONHEÇA NOSSA HISTÓRIA</button>
          </Link>
        </div>
      </section>

      {/* 4. CITAÇÃO E NEWSLETTER */}
      <section className="quote-newsletter-section">
        <Shield size={64} strokeWidth={1.2} className="quote-icon" />
        <h2 className="quote-text">
          "A excelência não é um ato, mas um hábito.<br />
          Na TERA, construímos a excelência dia após dia."
        </h2>
        <div className="quote-divider"></div>
        <Link to="/newsletter">        <button className="btn-newsletter">ASSINE NOSSA NEWSLETTER</button>
</Link>
      </section>

      {/* 5. FOOTER COMPONENTIZADO */}
      <Footer />
      
    </div>
  );
};