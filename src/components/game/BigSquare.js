"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import SmallSquare from './SmallSquare'

const BigSquare = ({ squares, onClick, isActive, winner, ultimateWinner }) => {
  let content

  if (winner) {
    if (winner === 'D') {
      content = (
        <motion.div 
          className="absolute inset-0 bg-red-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )
    } else {
      const isX = winner === 'X'
      content = (
        <motion.div 
          className={`absolute inset-0 flex items-center justify-center bg-opacity-90
            ${isX ? 'bg-green-800' : 'bg-yellow-800'}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isX ? (
            <motion.svg
              viewBox="0 0 100 100"
              className="w-4/5 h-4/5 text-green-300"
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M20,20 L80,80 M80,20 L20,80"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { 
                    pathLength: 1, 
                    opacity: 1,
                    transition: { 
                      pathLength: { duration: 0.8, ease: "easeInOut" },
                      opacity: { duration: 0.3 }
                    }
                  }
                }}
              />
            </motion.svg>
          ) : (
            <motion.svg
              viewBox="0 0 100 100"
              className="w-4/5 h-4/5 text-yellow-300"
              initial="hidden"
              animate="visible"
            >
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="8"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { 
                    pathLength: 1, 
                    opacity: 1,
                    transition: { 
                      pathLength: { duration: 1, ease: "easeInOut" },
                      opacity: { duration: 0.3 }
                    }
                  }
                }}
              />
            </motion.svg>
          )}
        </motion.div>
      )
    }
  } else {
    content = (
      <div className="grid grid-cols-3 gap-1 h-full relative">
        <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-green-500 opacity-30"></div>
        <div className="absolute right-1/3 top-0 bottom-0 w-0.5 bg-green-500 opacity-30"></div>
        <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-green-500 opacity-30"></div>
        <div className="absolute bottom-1/3 left-0 right-0 h-0.5 bg-green-500 opacity-30"></div>
        {squares.map((value, index) => (
          <SmallSquare
            key={index}
            value={value}
            onClick={() => onClick(index)}
            disabled={!isActive || ultimateWinner}
          />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full"
    >
      <Card 
        className={`w-full h-full relative overflow-hidden
          ${winner === 'X' ? 'bg-green-900' : winner === 'O' ? 'bg-yellow-900' : winner === 'D' ? 'bg-red-900' : 'bg-gray-900'}
          ${isActive ? 'ring-2 ring-green-400 ring-opacity-50' : ''}
          transition-all duration-300 ease-in-out rounded-lg`}
      >
        <CardContent className="p-1 h-full">
          {content}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default BigSquare