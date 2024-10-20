"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const GameOverDialog = ({ isOpen, onClose, winner, onRestart }) => {
  const isXWinner = winner === 'X';
  const isOWinner = winner === 'O';
  const isDraw = winner === 'draw';

  const winnerColor = isXWinner ? 'green' : 'yellow';

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className={`bg-gray-900 border-4 border-${winnerColor}-500 text-${winnerColor}-400 max-w-md mx-auto`}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <DialogTitle className={`text-3xl font-bold text-center mb-4 text-${winnerColor}-400`}>
                  Fin del Juego
                </DialogTitle>
                <DialogDescription className={`text-xl text-center text-${winnerColor}-300`}>
                  {isDraw ? (
                    <span>¡Es un empate!</span>
                  ) : (
                    <span>
                      El ganador es: <span className={`text-2xl font-bold text-${winnerColor}-300`}>{winner}</span>
                    </span>
                  )}
                </DialogDescription>
              </DialogHeader>
              <div className="my-6 flex justify-center">
                <motion.div
                  className={`w-24 h-24 rounded-full bg-${winnerColor}-500 flex items-center justify-center`}
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  <span className="text-5xl font-bold text-gray-900">
                    {isDraw ? '=' : winner}
                  </span>
                </motion.div>
              </div>
              <DialogFooter className="flex justify-center">
                <Button 
                  onClick={onRestart}
                  className={`bg-${winnerColor}-500 hover:bg-${winnerColor}-600 text-gray-900 font-bold py-2 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Jugar de nuevo
                </Button>
              </DialogFooter>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default GameOverDialog;