
import React, { useState } from "react";

const GridComponent = () => {
  const [rows, setRows] = useState(2); // Estado para el número de filas

  const cargarMas = () => {
    setRows(rows + 1); // Aumenta el número de filas al hacer clic en "Cargar más"
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Genera las celdas según el número de filas */}
      {Array.from({ length: rows * 4 }).map((_, index) => (
        <div key={index} className="bg-gray-300 h-20 flex justify-center items-center">
          Celda {index + 1}
        </div>
      ))}
      {/* Botón "Cargar más" */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={cargarMas}
      >
        Cargar más
      </button>
    </div>
  );
};

export default GridComponent;
