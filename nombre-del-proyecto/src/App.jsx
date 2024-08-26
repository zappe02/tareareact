// src/App.jsx

import React, { useState, useEffect } from 'react';
import Persona from './Persona'; // Asegúrate de importar el componente Persona
import './App.css';

const App = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/personas'); // Cambia a tu endpoint correcto
        if (!response.ok) {
          throw new Error('Error al obtener datos');
        }
        const data = await response.json();
        setPersonas(data); // Asumiendo que data es una lista de personas
      } catch (error) {
        console.error('Error fetching personas:', error);
      }
    };

    fetchPersonas();
  }, []);

  return (
    <div>
      <h1>Lista de Personas</h1>
      {personas.length > 0 ? (
        personas.map((persona, index) => (
          <Persona key={index} persona={persona} /> // Cambiado para usar index como key
        ))
      ) : (
        <p>No hay personas disponibles.</p>
      )}
    </div>
  );
};

export default App;


