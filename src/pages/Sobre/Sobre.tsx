import { Target, Award, Scale, Lightbulb } from 'lucide-react';
import { Footer } from '../../components/Footer/Footer'; 
import './Sobre.css';

export const Sobre = () => {
  return (
    <div className="page-container">
      {/* 1. HEADER DA PÁGINA */}
      <section className="sobre-header">
        <div className="label-group justify-center">
          <span className="label-line white-line"></span>
          <span className="section-label-white">NOSSA IDENTIDADE</span>
        </div>
        <h1 className="sobre-title">Sobre o TERA </h1>
        <p className="sobre-subtitle">
          Nossa missão é impulsionar negócios através de uma gestão estratégica, eficiente e orientada a resultados.
        </p>
      </section>

      {/* 2. NOSSA TRAJETÓRIA */}
      <section className="sobre-trajetoria">
        <div className="trajetoria-image">
          <img src="/assets/images/reuniao_tera.jpeg" alt="Equipe TERA Gestão" />
        </div>
        <div className="trajetoria-content">
          <div className="label-group">
            <span className="label-line"></span>
            <span className="section-label">NOSSA TRAJETÓRIA</span>
          </div>
          <h2 className="trajetoria-title">Construindo valor real para empresas visionárias.</h2>
          <p className="trajetoria-text">
            Fundada com o propósito de transformar o cenário corporativo brasileiro, a TERA Gestão e Negócios se consolidou como referência em consultoria de alta performance.
          </p>
          <p className="trajetoria-text">
            Acreditamos que cada empresa possui um DNA único. Por isso, desenvolvemos metodologias personalizadas que respeitam a cultura organizacional enquanto implementam as melhores práticas de mercado.
          </p>
        </div>
      </section>

      {/* 3. SEÇÃO DE VALORES / PILARES */}
      <section className="pillars-section-sobre">
        <div className="pillars-header">
          <span className="pillars-label">PILARES FUNDAMENTAIS</span>
          <h2 className="pillars-title">Valores que Guiam Nossas Decisões</h2>
        </div>
        
        <div className="pillars-grid">
          <div className="pillar-item">
            <div className="pillar-icon-box"><Target size={32} strokeWidth={1.5} /></div>
            <h4>Resultado</h4>
            <p>Foco obsessivo em métricas e entregas concretas.</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-icon-box"><Award size={32} strokeWidth={1.5} /></div>
            <h4>Excelência</h4>
            <p>Compromisso com a qualidade superior em cada detalhe.</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-icon-box"><Scale size={32} strokeWidth={1.5} /></div>
            <h4>Ética</h4>
            <p>Transparência e integridade em todas as relações.</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-icon-box"><Lightbulb size={32} strokeWidth={1.5} /></div>
            <h4>Inovação</h4>
            <p>Busca constante por novas tecnologias e soluções.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};