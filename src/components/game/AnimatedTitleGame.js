'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedTitle() {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.08
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 }
    }
  }

  return (
    <motion.div 
      className="text-center py-8 mb-6"
      variants={titleVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 
        className="text-4xl sm:text-5xl md:text-6xl font-bold inline-block"
        aria-label="Juega Trescursivo"
      >
        {["Juega", "Trescursivo"].map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            className="inline-block relative mx-2"
            whileHover={{ scale: 1.05 }}
          >
            {word.split('').map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                style={{ 
                  textShadow: '0 0 5px rgba(34, 197, 94, 0.5), 0 0 10px rgba(34, 197, 94, 0.3)',
                }}
              >
                {letter}
              </motion.span>
            ))}
            {wordIndex === 0 && (
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-green-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            )}
          </motion.span>
        ))}
      </h1>
    </motion.div>
  )
}