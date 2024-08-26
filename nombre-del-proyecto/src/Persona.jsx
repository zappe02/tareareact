// src/Persona.jsx

import React from 'react';
import './Persona.css'; // Importa el archivo de estilos

const Persona = ({ persona }) => {
  return (
    <div className="persona-card">
      <h2 className="persona-name">{persona.nombre}</h2>
      <p className="persona-email">Email: {persona.email}</p>
    </div>
  );
};

export default Persona;

