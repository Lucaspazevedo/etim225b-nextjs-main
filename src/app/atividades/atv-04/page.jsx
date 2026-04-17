'use client'

import { useState } from 'react';
import styles from './page.module.css';

export default function Atividade04() {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [lista, setLista] = useState([]);

  function adicionar(e) {
    e.preventDefault();

    if (produto === '' || quantidade === '') return;

    const novo = {
      id: Date.now(),
      produto: produto,
      quantidade: quantidade
    };

    setLista([...lista, novo]);

    setProduto('');
    setQuantidade('');
  }

  function excluir(id) {
    const novaLista = lista.filter(item => item.id !== id);
    setLista(novaLista);
  }

  return (
    <div className={styles.container}>
      <h1>Lista</h1>

      <form onSubmit={adicionar} className={styles.form}>
        <input
          className={styles.input}
          type="number"
          placeholder="Qtd"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />

        <input
          className={styles.input}
          type="text"
          placeholder="Produto"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />

        <button className={styles.botao} type="submit">
          Adicionar
        </button>
      </form>

      <ul className={styles.lista}>
        {lista.map((item) => (
          <li key={item.id} className={styles.linha}>
            {item.quantidade}x {item.produto}

            <button
              type="button"
              className={styles.botaoExcluir}
              onClick={() => excluir(item.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}