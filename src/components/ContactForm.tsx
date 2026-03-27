import { useState } from 'react';
import axios from 'axios';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doc: '' 
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Enviando...' });

    try {
      await axios.post('http://localhost:3000/api/create/customer', formData);

      setStatus({ type: 'success', message: 'Cadastro realizado com sucesso!' });
      setFormData({ name: '', email: '', phone: '', doc: '' }); 

    } catch (error: any) {
      let errorMsg = 'Erro ao tentar cadastrar.';

      if (error.response?.data) {
        if (error.response.data.issues && error.response.data.issues[0]) {
          errorMsg = error.response.data.issues[0].message;
        } else if (error.response.data.message) {
          errorMsg = error.response.data.message;
        }
      }

      setStatus({ type: 'error', message: errorMsg });
    }
  };

  return (
    <section className="cta">
      <div className="container">
        <h3>Podemos te ajudar!</h3>
        <p>Receba a ajuda de um especialista em investimentos certificado</p>
        
        <form className="cta-form" onSubmit={handleSubmit}>
          
          <label htmlFor="nome" className="sr-only">Nome</label>
          <input 
            type="text" 
            id="nome" 
            name="name" 
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email" className="sr-only">E-mail</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="telefone" className="sr-only">Telefone</label>
          <input 
            type="tel" 
            id="telefone" 
            name="phone" 
            placeholder="Telefone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="doc" className="sr-only">CPF/CNPJ</label>
          <input 
            type="text" 
            id="doc" 
            name="doc" 
            placeholder="CPF/CNPJ"
            value={formData.doc}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={status.type === 'loading'}>
            {status.type === 'loading' ? 'Enviando...' : 'Enviar'}
          </button>
          
          {status.message && (
            <div style={{ 
              marginTop: '15px', 
              color: status.type === 'success' ? '#fff' : '#ff7b7b',
              textAlign: 'center',
              fontWeight: 'bold'
            }}>
              {status.message}
            </div>
          )}

        </form>
      </div>
    </section>
  );
}