
CREATE TABLE tareas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    completada BOOLEAN DEFAULT false,
    fecha_creacion TIMESTAMP DEFAULT NOW()
);	
