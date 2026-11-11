import { useEffect, useState } from 'react';
import TareaForm from './components/TareaForm';
import TareaList from './components/TareaList';
import { obtenerTareas, crearTarea, actualizarTarea, eliminarTarea } from './services/api';

function App() {
  const [tareas, setTareas] = useState([]);

  const cargarTareas = async () => {
    try {
      const respuesta = await obtenerTareas();
      setTareas(respuesta.data);
    } catch (error) {
      console.error("Error cargando tareas:", error);
    }
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  const manejarCrear = async (nuevaTarea) => {
    await crearTarea(nuevaTarea);
    cargarTareas();
  };

  const manejarCompletar = async (tarea) => {
    await actualizarTarea(tarea.id, { ...tarea, completada: !tarea.completada });
    cargarTareas();
  };

  const manejarEliminar = async (id) => {
    await eliminarTarea(id);
    cargarTareas();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Gestor de Tareas</h1>
      <TareaForm onCrear={manejarCrear} />
      <TareaList
        tareas={tareas}
        onCompletar={manejarCompletar}
        onEliminar={manejarEliminar}
      />
    </div>
  );
}

export default App;