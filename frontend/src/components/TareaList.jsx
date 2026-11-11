import TareaItem from './TareaItem';

function TareaList({ tareas, onCompletar, onEliminar }) {
  if (tareas.length === 0) {
    return <p style={{ textAlign: 'center', color: '#888' }}>No hay tareas todavía. ¡Agrega la primera!</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tareas.map((tarea) => (
        <TareaItem
          key={tarea.id}
          tarea={tarea}
          onCompletar={onCompletar}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  );
}

export default TareaList;