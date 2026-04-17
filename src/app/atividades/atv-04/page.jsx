'use client'

import { useState } from 'react';
import styles from './page.module.css';

export default function Atividade04() {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [lista, setLista] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!produto || !quantidade) return;

    setLista([
      ...lista,
      { id: Date.now(), produto, quantidade }
    ]);

    setProduto('');
    setQuantidade('');
  };

  return (
    <div className={styles.container}>
      <h1>Formulário básico</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="number"
          placeholder="Qtd"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />

        <input
          type="text"
          placeholder="Produto..."
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>

      {lista.length > 0 && <h2>Lista de compras</h2>}

      <ul className={styles.lista}>
        {lista.map((item) => (
          <li key={item.id} className={styles.linha}>
            {item.quantidade}x {item.produto}
          </li>
        ))}
      </ul>
    </div>
  );
}
