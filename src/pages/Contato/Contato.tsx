import { Phone, Mail, User, FileText } from 'lucide-react';
import { Footer } from '../../components/Footer/Footer';
import './contato.css';

export const Contato = () => {
  return (
    <div className="page-container">
      
      {/* A página já começa direto na seção do Card com a imagem de fundo */}
      <section className="contact-page-wrapper">
        <div className="contact-card">
          
          {/* LADO ESQUERDO - INFO EM AZUL ESCURO */}
          <div className="contact-info-panel">
            <h2>Fale com a TERA</h2>
            <p className="info-subtitle">
              Estamos prontos para atender sua empresa com a excelência que ela merece.
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon-wrapper">
                  <Phone size={22} className="detail-icon" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Telefone</span>
                  <span className="detail-value">+55 (11) 3000-0000</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-wrapper">
                  <Mail size={22} className="detail-icon" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">contato@teragestao.com.br</span>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO - FORMULÁRIO */}
          <div className="contact-form-panel">
            
            {/* O TÍTULO AGORA ESTÁ AQUI DENTRO DA CAIXA! */}
            <h2 className="form-panel-title">Fale Conosco</h2>
            
            <p className="form-subtitle">
              Preencha os dados abaixo para entrar em contato com nossa equipe de especialistas.
            </p>

            <form className="tera-contact-form">
              <div className="form-group">
                <label>NOME COMPLETO</label>
                <div className="input-with-icon">
                  <User size={18} className="input-icon" />
                  <input type="text" placeholder="Seu nome" />
                </div>
              </div>

              <div className="form-group">
                <label>CPF / CNPJ</label>
                <div className="input-with-icon">
                  <FileText size={18} className="input-icon" />
                  <input type="text" placeholder="000.000.000-00" />
                </div>
              </div>

              <div className="form-group">
                <label>TELEFONE</label>
                <div className="input-with-icon">
                  <Phone size={18} className="input-icon" />
                  <input type="text" placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div className="form-group">
                <label>EMAIL</label>
                <div className="input-with-icon">
                  <Mail size={18} className="input-icon" />
                  <input type="email" placeholder="nome@exemplo.com" />
                </div>
              </div>

              <button type="button" className="btn-enviar">
                ENVIAR
              </button>
            </form>
          </div>
          
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};