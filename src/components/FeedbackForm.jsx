import { useState } from 'react';

export function FeedbackForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome || !email || !comentario) {
      alert('Preencha todos os campos!');
      return;
    }
    alert(`Feedback enviado!\nNome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`);
  }

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>Formulário de Feedback</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Comentário"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}