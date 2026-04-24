"use client";
import { useState } from "react";
import Styles from "./page.module.css";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Aprender Vite.js" },
    { id: 2, text: "Estudar CRUD" },
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
    <main classname={styles.container}>
      <h1>Mockup CRUD Vite</h1>

      <input
        style={styles.input}
        placeholder="Digite algo..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <button style={styles.addBtn} onClick={handleAdd}>
        + {editingId ? "Salvar" : "Adicionar"}
      </button>

      <div style={{ marginTop: 20 }}>
        {tasks.map(task => (
          <div key={task.id} style={styles.item}>
            <span>{task.text}</span>

            <div>
              <button
                style={styles.editBtn}
                onClick={() => handleEdit(task)}
              >
                ✏️
              </button>

              <button
                style={styles.deleteBtn}
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

