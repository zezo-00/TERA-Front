import { useState } from 'react';
import axios from 'axios';

export function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    setStatus({ type: 'loading', message: 'Entrando...' });

    try {
      // rota de login do Back-end 
      await axios.post('http://localhost:3000/api/login', formData);
      
      setStatus({ type: 'success', message: 'Login realizado com sucesso!' });
    

    } catch (error: any) {
      let errorMsg = 'E-mail ou senha incorretos.';
      if (error.response?.data?.message) {
        errorMsg = error.response.data.message;
      }
      setStatus({ type: 'error', message: errorMsg });
    }
  };

  return (
    <section className="cta" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <h3>Acesse sua conta TERA</h3>
        <p>Entre para continuar sua jornada de educação financeira.</p>
        
        <form className="cta-form" onSubmit={handleSubmit}>
          
          <label htmlFor="login-email" className="sr-only">E-mail</label>
          <input 
            type="email" 
            id="login-email" 
            name="email" 
            placeholder="Seu E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="login-password" className="sr-only">Senha</label>
          <input 
            type="password" 
            id="login-password" 
            name="password" 
            placeholder="Sua Senha"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={status.type === 'loading'}>
            {status.type === 'loading' ? 'Carregando...' : 'Entrar'}
          </button>
          
          {status.message && (
            <div style={{ 
              marginTop: '15px', 
              color: status.type === 'success' ? '#fff' : '#ff7b7b',
              textAlign: 'center',
              fontWeight: 'bold',
              backgroundColor: status.type === 'success' ? 'rgba(0,128,0,0.2)' : 'transparent',
              padding: '10px',
              borderRadius: '5px'
            }}>
              {status.message}
            </div>
          )}

        </form>
      </div>
    </section>
  );
}