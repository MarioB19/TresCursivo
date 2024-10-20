// GameBoard.js
"use client"
import React from 'react';
import BigSquare from './BigSquare';

const GameBoard = ({ board, metaBoard, nextBoard, onSquareClick, ultimateWinner }) => (
  <div className="flex justify-center items-center">
    <div className="grid grid-cols-3 gap-3">
      {board.map((squares, index) => (
        <BigSquare
          key={index}
          squares={squares}
          onClick={(smallIndex) => onSquareClick(index, smallIndex)}
          isActive={nextBoard === null || nextBoard === index}
          winner={metaBoard[index]}
          ultimateWinner={ultimateWinner}
        />
      ))}
    </div>
  </div>
);

export default GameBoard;
