"use client"

import React from 'react';
import { motion } from 'framer-motion';

const GameStatus = ({ winner, xIsNext, nextBoard }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className="mt-8 text-center bg-black p-4 rounded-lg border border-green-500 shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p 
        className="text-2xl font-bold mb-2"
        variants={textVariants}
      >
        {winner ? (
          winner === 'D' ? (
            <span className="text-red-400">¡El juego terminó en empate!</span>
          ) : (
            <span className="text-green-400">¡{winner} ha ganado el juego!</span>
          )
        ) : (
          <>
            Siguiente jugador: 
            <span className={`ml-2 ${xIsNext ? 'text-green-400' : 'text-yellow-400'}`}>
              {xIsNext ? 'X' : 'O'}
            </span>
          </>
        )}
      </motion.p>
      {!winner && (
        <motion.p 
          className="text-lg text-green-300"
          variants={textVariants}
        >
          {nextBoard === null 
            ? "Puedes jugar en cualquier tablero disponible" 
            : `Debes jugar en el tablero ${nextBoard + 1}`
          }
        </motion.p>
      )}
    </motion.div>
  );
};

export default GameStatus;
