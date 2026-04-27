"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [tasks, setTasks] = useState([

  ]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);

  function handleAdd() {
    if (!input.trim()) return;

    if (editingId) {
      setTasks(tasks.map(t =>
        t.id === editingId ? { ...t, text: input } : t
      ));
      setEditingId(null);
    } else {
      setTasks([
        ...tasks,
        { id: Date.now(), text: input }
      ]);
    }

    setInput("");
  }

  function handleEdit(task) {
    setInput(task.text);
    setEditingId(task.id);
  }

  function handleDelete(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  return (
    <main className={styles.container}>
      <h1>Mockup CRUD Vite</h1>

      <input
        className={styles.input}
        placeholder="Digite algo..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <button className={styles.addBtn} onClick={handleAdd}>
        + {editingId ? "Salvar" : "Adicionar"}
      </button>

      <div className={styles.list}>
        {tasks.map(task => (
          <div key={task.id} className={styles.item}>
            <span>{task.text}</span>

            <div className={styles.actions}>
              <button
                className={styles.editBtn}
                onClick={() => handleEdit(task)}
              >
                ✏️
              </button>

              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(task.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

