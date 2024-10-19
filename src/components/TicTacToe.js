"use client"
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
    <Card className="w-auto">
      <CardHeader>
        <CardTitle className="text-center">Ultimate Tres en Raya</CardTitle>
      </CardHeader>
      <CardContent>
        <GameBoard
          board={board}
          metaBoard={metaBoard}
          nextBoard={nextBoard}
          onSquareClick={handleClick}
          ultimateWinner={winner}
        />
        <GameStatus winner={winner} xIsNext={xIsNext} nextBoard={nextBoard} />
      </CardContent>
      <GameOverDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        winner={winner}
        onRestart={resetGame}
      />
    </Card>
  );
};

export default UltimateTicTacToe;