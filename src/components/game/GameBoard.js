"use client"

import React from 'react';
import { motion } from 'framer-motion';
import BigSquare from './BigSquare';

const GameBoard = ({ board, metaBoard, nextBoard, onSquareClick, ultimateWinner }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <motion.div 
        className="relative bg-black border-2 border-green-500 rounded-lg"
        style={{
          aspectRatio: '1 / 1',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          gap: '1px',
          padding: '1px',
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background grid lines */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
          <div className="border-r border-b border-green-500 opacity-30"></div>
          <div className="border-r border-b border-green-500 opacity-30"></div>
          <div className="border-b border-green-500 opacity-30"></div>
          <div className="border-r border-b border-green-500 opacity-30"></div>
          <div className="border-r border-b border-green-500 opacity-30"></div>
          <div className="border-b border-green-500 opacity-30"></div>
          <div className="border-r border-green-500 opacity-30"></div>
          <div className="border-r border-green-500 opacity-30"></div>
          <div></div>
        </div>

        {board.map((squares, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants} 
            className="relative"
            style={{ aspectRatio: '1 / 1' }}
          >
            <BigSquare
              squares={squares}
              onClick={(smallIndex) => onSquareClick(index, smallIndex)}
              isActive={nextBoard === null || nextBoard === index}
              winner={metaBoard[index]}
              ultimateWinner={ultimateWinner}
            />
            {nextBoard === index && (
              <motion.div
                className="absolute inset-0 border-2 border-yellow-400 rounded-lg pointer-events-none"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GameBoard;