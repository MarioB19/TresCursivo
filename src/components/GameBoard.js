// GameBoard.js
"use client"
import React from 'react';
import BigSquare from './BigSquare';



// En GameBoard.js
const GameBoard = ({ board, metaBoard, nextBoard, onSquareClick, ultimateWinner }) => (
    <div className="grid grid-cols-3 gap-2">
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
  );


export default GameBoard;