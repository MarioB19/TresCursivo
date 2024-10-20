import React from 'react';
import { motion } from 'framer-motion';

const GameDescription = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="mt-12 mb-16 pb-8 text-center max-w-xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p 
        className="text-xl font-medium text-green-300 mb-4"
        variants={textVariants}
      >
        Trescursivo es una versión recursiva del clásico juego de tres en raya.
      </motion.p>
      <motion.p 
        className="text-lg text-green-200"
        variants={textVariants}
      >
        ¡Demuestra tu estrategia en este desafiante juego!
      </motion.p>
    </motion.div>
  );
};

export default GameDescription;