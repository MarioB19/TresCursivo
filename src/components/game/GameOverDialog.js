"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import clsx from 'clsx'

const GameOverDialog = ({ isOpen, onClose, winner, onRestart }) => {
  const isXWinner = winner === 'X'
  const isOWinner = winner === 'O'
  const isDraw = winner === 'D'

  // Removed getWinnerColor function

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent 
            className={clsx(
              "bg-gray-900 border-4 max-w-md mx-auto",
              {
                'border-green-500': isXWinner,
                'border-yellow-500': isOWinner,
                'border-red-500': isDraw
              }
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <DialogTitle 
                  className={clsx(
                    "text-3xl font-bold text-center mb-4",
                    {
                      'text-green-400': isXWinner,
                      'text-yellow-400': isOWinner,
                      'text-red-400': isDraw
                    }
                  )}
                >
                  Fin del Juego
                </DialogTitle>
                <DialogDescription 
                  className={clsx(
                    "text-xl text-center",
                    {
                      'text-green-300': isXWinner,
                      'text-yellow-300': isOWinner,
                      'text-red-300': isDraw
                    }
                  )}
                >
                  {isDraw ? (
                    <span>¡Es un empate!</span>
                  ) : (
                    <span>
                      El ganador es: <span className={clsx("text-2xl font-bold", {'text-green-300': isXWinner, 'text-yellow-300': isOWinner, 'text-red-300': isDraw})}>{winner}</span>
                    </span>
                  )}
                </DialogDescription>
              </DialogHeader>
              <div className="my-6 flex justify-center">
                <motion.div
                  className={clsx(
                    `w-24 h-24 rounded-full flex items-center justify-center`,
                    {
                      'bg-green-500': isXWinner,
                      'bg-yellow-500': isOWinner,
                      'bg-red-500': isDraw
                    }
                  )}
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
                  className={clsx(
                    `text-gray-900 font-bold py-2 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105`,
                    {
                      'bg-green-500 hover:bg-green-600': isXWinner,
                      'bg-yellow-500 hover:bg-yellow-600': isOWinner,
                      'bg-red-500 hover:bg-red-600': isDraw
                    }
                  )}
                >
                  Jugar de nuevo
                </Button>
              </DialogFooter>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

export default GameOverDialog