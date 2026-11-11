import { useState } from 'react';

function TareaForm({ onCrear }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    onCrear({ titulo, descripcion });
    setTitulo('');
    setDescripcion('');
  };

  return (
    <form onSubmit={manejarEnvio} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      <input
        type="text"
        placeholder="Título de la tarea"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        style={{ padding: '8px', flex: 1 }}
      />
      <input
        type="text"
        placeholder="Descripción (opcional)"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        style={{ padding: '8px', flex: 1 }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>Agregar</button>
    </form>
  );
}

export default TareaForm;