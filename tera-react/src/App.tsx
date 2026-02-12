import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div>
      {/* --- HEADER --- */}
      <header className="header">
        <div className="container">
          <a href="" className="logo">
            <img src="/assets/images/logo_tera-removebg-preview.png" alt="logo_tera" />
          </a>
          <nav className="nav">
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="título">TERA</h1>
            <p className="subtítulo">Educação financeira ao seu alcance: o primeiro passo para o sucesso financeiro começa aqui</p>
          </div>
        </section>

        {/* --- MATERIALS SECTION --- */}
        <section className="materials">
          <div className="container">
            <h2>CONHEÇA NOSSOS MATERIAIS</h2>
            <div className="materials-grid">
              <div className="card">
                <img src="/assets/images/educacao_financeira.jpg" alt="Capa do e-book sobre Educação Financeira" />
                <h3>A importância da Educação Financeira</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac nibh eget nibh laoreet consequat id eget augue.</p>
              </div>
              <div className="card">
                <img src="/assets/images/renda_fixa.jpg" alt="Imagem e-book renda fixa" />
                <h3>Dominando os fundamentos da renda fixa</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac nibh eget nibh laoreet consequat id eget augue.</p>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />

      </main>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <a href="#" className="logo">TERA</a>
            <p>© 2025 TERA | Todos os direitos reservados.</p>
          </div>
          <div className="footer-col">
            <h4>Links Úteis</h4>
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Nos acompanhe</h4>
            <ul>
              <li><a href="https://www.linkedin.com/newsletters/7317928604930138114/">Linkedin</a></li>
              <li><a href="https://www.instagram.com/felipebarbosa.ai/">Instagram</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App