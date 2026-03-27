import { useState } from 'react';
import { Phone, Mail, User, FileText } from 'lucide-react';
import { Footer } from '../../components/Footer/Footer';
import './contato.css';

export const Contato = () => {
  // 1. ESTADO PARA GUARDAR OS DADOS 
  const [formData, setFormData] = useState({
    name: '',
    doc: '',
    phone: '',
    email: '',
  });

  // 2. FUNÇÃO PARA ATUALIZAR OS DADOS ENQUANTO O USUÁRIO DIGITA
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // função para o envio para o back
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    try {
const response = await fetch(`${import.meta.env.VITE_API_URL}/api/create/customer`, {  
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato.');
        // limpa o formulário após enviar
        setFormData({ name: '', doc: '', phone: '', email: '' });
      } else {
        alert('Ocorreu um erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao conectar com o servidor. Verifique se o back-end está rodando.');
    }
  };

  return (
    <div className="page-container">
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
            
            <h2 className="form-panel-title">Fale Conosco</h2>
            
            <p className="form-subtitle">
              Preencha os dados abaixo para entrar em contato com nossa equipe de especialistas.
            </p>

            {/* O FORMULÁRIO AGORA RECEBE O onSubmit */}
            <form className="tera-contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>NOME COMPLETO</label>
                <div className="input-with-icon">
                  <User size={18} className="input-icon" />
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Seu nome" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>CPF / CNPJ</label>
                <div className="input-with-icon">
                  <FileText size={18} className="input-icon" />
                  <input 
                    type="text" 
                    name="doc"
                    placeholder="000.000.000-00" 
                    value={formData.doc}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>TELEFONE</label>
                <div className="input-with-icon">
                  <Phone size={18} className="input-icon" />
                  <input 
                    type="text" 
                    name="phone"
                    placeholder="(00) 00000-0000" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>EMAIL</label>
                <div className="input-with-icon">
                  <Mail size={18} className="input-icon" />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="nome@exemplo.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* O BOTÃO AGORA É DO TIPO SUBMIT */}
              <button type="submit" className="btn-enviar">
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