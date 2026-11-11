function TareaItem({ tarea, onCompletar, onEliminar }) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #eee' }}>
      <div onClick={() => onCompletar(tarea)} style={{ cursor: 'pointer', textDecoration: tarea.completada ? 'line-through' : 'none' }}>
        <strong>{tarea.titulo}</strong>
        {tarea.descripcion && <p style={{ margin: '4px 0 0', color: '#666', fontSize: '14px' }}>{tarea.descripcion}</p>}
      </div>
      <button onClick={() => onEliminar(tarea.id)} style={{ background: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>Eliminar</button>
    </li>
  );
}

export default TareaItem;