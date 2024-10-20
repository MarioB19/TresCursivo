"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const SmallSquare = ({ value, onClick, disabled }) => {
  const variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    tap: { scale: 0.95 },
    hover: { scale: 1.05 }
  };

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      initial="initial"
      animate="animate"
      whileTap="tap"
      whileHover={!disabled && "hover"}
      variants={variants}
      transition={{ duration: 0.2 }}
    >
      <Button
        variant="outline"
        className={`
          w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px]
          p-0 text-xl sm:text-2xl md:text-3xl font-bold rounded-sm
          flex items-center justify-center
          ${disabled ? 'bg-gray-800 text-gray-500' : 'bg-black text-green-400'}
          ${value === 'X' ? 'text-green-400' : value === 'O' ? 'text-yellow-400' : ''}
          border border-green-500 hover:bg-green-900 hover:text-white
          transition-colors duration-200
        `}
        onClick={onClick}
        disabled={disabled}
      >
        {value}
      </Button>
    </motion.div>
  );
};

export default SmallSquare;