// GameStatus.js
"use client"


import React from 'react';

const GameStatus = ({ winner, xIsNext, nextBoard }) => (
  <div className="mt-4 text-center">
    <p>
      {winner 
        ? `¡${winner} ha ganado el juego!` 
        : `Siguiente jugador: ${xIsNext ? 'X' : 'O'}`}
    </p>
    <p>
      {nextBoard === null 
        ? "Puedes jugar en cualquier tablero disponible" 
        : `Debes jugar en el tablero ${nextBoard + 1}`}
    </p>
  </div>
);

export default GameStatus;