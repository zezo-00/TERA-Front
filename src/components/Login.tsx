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
    <div className="login-container">
      <div className="login-left">
        <div className="login-brand"><h1>TERA.</h1></div>
        <div className="login-welcome">
          <h2>Bem-vindo.</h2>
          <p>O melhor sistema de gestão para sua educação financeira.</p>
        </div>
        <div></div>
      </div>

      <div className="login-right">
        <div className="login-form-wrapper">
          <h2>Acesse sua conta</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn-login">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}