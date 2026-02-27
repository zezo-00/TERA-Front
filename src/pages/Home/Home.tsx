import './home.css';

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
            <button className="btn-outline">
              FALE CONOSCO <span className="arrow">→</span>
            </button>
            <button className="btn-solid">NOSSA MISSÃO</button>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO EXPERTISE (0:05 do vídeo) */}
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
            <div className="card-icon">📊</div>
            <h3>Gestão Financeira</h3>
            <p>Análise profunda de indicadores e reestruturação de fluxo de caixa para maximizar lucros.</p>
            <button className="card-link">SAIBA MAIS →</button>
          </div>
          <div className="expertise-card">
            <div className="card-icon">🤝</div>
            <h3>Consultoria Estratégica</h3>
            <p>Planejamento de longo prazo e definição de metas claras para o crescimento do seu negócio.</p>
            <button className="card-link">SAIBA MAIS →</button>
          </div>
          <div className="expertise-card">
            <div className="card-icon">👥</div>
            <h3>Recursos Humanos</h3>
            <p>Desenvolvimento de lideranças e gestão de talentos para criar equipes de alta performance.</p>
            <button className="card-link">SAIBA MAIS →</button>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO OPORTUNIDADES (0:08 do vídeo) */}
      <section className="opportunities-section">
        <div className="opp-image-container">
          <img src="/assets/images/consultoria.jpg" alt="Consultoria TERA" className="opp-img" />
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
          <button className="btn-outline-dark">CONHEÇA NOSSA HISTÓRIA</button>
        </div>
      </section>

      {/* 4. PILARES FUNDAMENTAIS (0:11 do vídeo) */}
      <section className="pillars-section">
        <div className="pillars-header">
            <span className="pillars-label">PILARES FUNDAMENTAIS</span>
            <h2 className="pillars-title">Valores que Guiam Nossas Decisões</h2>
        </div>
        <div className="pillars-grid">
            <div className="pillar-item">
                <div className="pillar-icon-box">🎯</div>
                <h4>Resultado</h4>
                <p>Foco obsessivo em métricas e entregas concretas.</p>
            </div>
            <div className="pillar-item">
                <div className="pillar-icon-box">⭐</div>
                <h4>Excelência</h4>
                <p>Compromisso com a qualidade superior em cada detalhe.</p>
            </div>
            <div className="pillar-item">
                <div className="pillar-icon-box">⚖️</div>
                <h4>Ética</h4>
                <p>Transparência e integridade em todas as relações.</p>
            </div>
            <div className="pillar-item">
                <div className="pillar-icon-box">💡</div>
                <h4>Inovação</h4>
                <p>Busca constante por novas tecnologias e soluções.</p>
            </div>
        </div>
      </section>

      {/* 5. CTA FINAL (0:13 do vídeo) */}
      <section className="cta-final">
          <h2>Pronto para elevar o patamar da sua empresa?</h2>
          <button className="btn-outline">AGENDE UMA CONSULTORIA</button>
      </section>
    </div>
  );
};