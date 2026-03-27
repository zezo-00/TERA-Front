import React, { useState, useEffect } from 'react'; 
import './clientes.css';


export const Clientes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    doc: '',
    phone: ''
  });

  const [clientes, setClientes] = useState<any[]>([]);

 const buscarClientes = async () => {
  try {
    const token = localStorage.getItem('tera_token'); 
    const resposta = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/list/customer`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      }
    });

    const dados = await resposta.json();
    
    console.log("CONTEÚDO DO BANCO:", dados);

    if (resposta.ok) {
      setClientes(dados.customers || dados.data?.data || dados || []); 
    }
  } catch (error) {
    console.error('Erro de conexão.', error);
  }
};

  useEffect(() => {
    buscarClientes();
  }, []);

  const handleCreateCustomer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const resposta = await fetch(`${import.meta.env.VITE_API_URL}/api/create/customer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        alert("Cliente cadastrado com sucesso no PostgreSQL!");
        setIsModalOpen(false); 
        setFormData({ name: '', email: '', doc: '', phone: '' }); 
        
        //Recarrega a tabela na mesma hora sem precisar do f5
        buscarClientes(); 
      } else {
        alert("Erro do Zod: " + JSON.stringify(dados.error || dados.message));
      }
    } catch (error) {
      alert('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="clientes-wrapper">
      
      <div className="clientes-toolbar">
        <input 
          type="text" 
          placeholder="Buscar por nome, e-mail ou documento..." 
          className="search-input"
        />
        <div className="toolbar-actions">
          <button className="btn-new" onClick={() => setIsModalOpen(true)}>
            + Novo Cliente
          </button>
        </div>
      </div>

      {/* MODAL DE CADASTRO */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Cadastrar Cliente</h2>
            <form onSubmit={handleCreateCustomer} className="modal-form">
              
              <input type="text" placeholder="Nome Completo" required
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              
              <input type="email" placeholder="E-mail" required
                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              
              <input type="text" placeholder="CPF ou CNPJ (apenas números)" required
                value={formData.doc} onChange={e => setFormData({...formData, doc: e.target.value})} />
              
              <input type="text" placeholder="Telefone (apenas números)" required
                value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                <button type="submit" className="btn-submit">Salvar Cliente</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TABELA DE DADOS */}
      <div className="table-container">
        <table className="clientes-table">
          <thead>
            <tr>
              <th>NOME</th>
              <th>EMAIL</th>
              <th>CPF / CNPJ</th>
              <th>TELEFONE</th>
            </tr>
          </thead>
          <tbody>
            {/*  Array.isArray antes do map para a segurança e para rodar a tabela */}
            {Array.isArray(clientes) && clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td className="col-nome">
                  <div className="avatar-mini">{cliente.name ? cliente.name.charAt(0) : '-'}</div>
                  {cliente.name}
                </td>
                <td>{cliente.email}</td>
                <td>{cliente.doc}</td>
                <td>{cliente.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};