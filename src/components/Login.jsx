import { useState } from 'react';
import './Login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Login: ${email}`);
  }

  return (
    <div className="login-container">
      <h2>Tela de Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </div>
        <div className="field">
          <label>Senha</label>
          <input
            type={mostrarSenha ? 'text' : 'password'}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
          />
          <button type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
            {mostrarSenha ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
