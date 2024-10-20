"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from 'lucide-react';
import GameBoard from './GameBoard';
import GameStatus from './GameStatus';
import GameOverDialog from './GameOverDialog';

const UltimateTicTacToe = () => {
  const initialBoard = Array(9).fill().map(() => Array(9).fill(null));
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [nextBoard, setNextBoard] = useState(null);
  const [metaBoard, setMetaBoard] = useState(Array(9).fill(null));

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const isBoardFull = (boardIndex) => {
    return board[boardIndex].every(cell => cell !== null);
  };

  const handleClick = (bigSquare, smallSquare) => {
    if (winner || board[bigSquare][smallSquare] || metaBoard[bigSquare]) return;
    if (nextBoard !== null && nextBoard !== bigSquare) return;

    const newBoard = board.map((row, index) => 
      index === bigSquare ? [...row] : row
    );
    newBoard[bigSquare][smallSquare] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);

    let newMetaBoard = [...metaBoard];
    const bigWinner = checkWinner(newBoard[bigSquare]);
    if (bigWinner) {
      newMetaBoard[bigSquare] = bigWinner;
      setMetaBoard(newMetaBoard);

      const ultimateWinner = checkWinner(newMetaBoard);
      if (ultimateWinner) {
        setWinner(ultimateWinner);
        setIsDialogOpen(true);
        return;
      }
    }
    
    setXIsNext(!xIsNext);
    
    // Determine the next board
    if (newMetaBoard[smallSquare] || isBoardFull(smallSquare)) {
      setNextBoard(null);  // Allow play in any available board
    } else {
      setNextBoard(smallSquare);
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setXIsNext(true);
    setWinner(null);
    setIsDialogOpen(false);
    setNextBoard(null);
    setMetaBoard(Array(9).fill(null));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <Card className="w-full bg-black border border-green-500 shadow-lg shadow-green-500/20">
        <CardHeader className="p-4 sm:p-6 flex justify-center items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={resetGame}
              variant="outline"
              className="bg-green-700 text-green-100 hover:bg-green-600 transition-colors duration-200 text-lg sm:text-xl py-3 px-6 rounded-full"
            >
              <RefreshCw className="w-6 h-6 mr-2 animate-spin-slow" />
              Reiniciar Juego
            </Button>
          </motion.div>
        </CardHeader>
        <CardContent className="p-2 sm:p-4 md:p-6 lg:p-8">
          <GameBoard
            board={board}
            metaBoard={metaBoard}
            nextBoard={nextBoard}
            onSquareClick={handleClick}
            ultimateWinner={winner}
          />
          <GameStatus winner={winner} xIsNext={xIsNext} nextBoard={nextBoard} />
        </CardContent>
      </Card>
      <GameOverDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        winner={winner}
        onRestart={resetGame}
      />
    </motion.div>
  );
};

export default UltimateTicTacToe;