import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { Clientes } from './Clientes'; 

export const Dashboard = () => {
  const navigate = useNavigate();
  
  // Estado que controla qual aba está aberta (padrão: visao-geral)
  const [abaAtiva, setAbaAtiva] = useState('visao-geral'); 

  //  - BLOQUEIO DE SEGURANÇA 
  useEffect(() => {
    const token = localStorage.getItem('tera_token');
    if (!token) {
      // Se não tiver o token salvo, manda de volta pro login
      navigate('/auth'); 
    }
  }, [navigate]);

  const handleLogout = () => {
    // Remove o token de acesso e redireciona para o login
    localStorage.removeItem('tera_token');
    navigate('/auth');
  };

  return (
    <div className="dashboard-container">
      
      {/* === MENU LATERAL === */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h2>TERA</h2>
        </div>
        
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${abaAtiva === 'visao-geral' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('visao-geral')}
          >
            Visão Geral
          </button>
          
          <button 
            className={`nav-item ${abaAtiva === 'clientes' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('clientes')}
          >
            Clientes
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </aside>

      {/* === ÁREA PRINCIPAL === */}
      <main className="main-content">
        <header className="top-header">
          {/* O título muda dependendo da aba selecionada */}
          <h1>{abaAtiva === 'visao-geral' ? 'Visão Geral' : 'Tabela de Clientes'}</h1>
          <div className="user-avatar">
            <span>U</span>
          </div>
        </header>

        <section className="content-area">
          
          {/* Lógica condicional: Se for visão geral, mostra o aviso. Se for clientes, mostra a tabela */}
          {abaAtiva === 'visao-geral' ? (
            <div className="construction-notice">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="construction-icon">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              <h2>Visão Geral em Desenvolvimento</h2>
              <p>Os gráficos e métricas financeiras estarão disponíveis nas próximas atualizações.</p>
            </div>
          ) : (
            <Clientes />
          )}

        </section>
      </main>

    </div>
  );
};