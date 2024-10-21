"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, AlertTriangle, X } from 'lucide-react'
import UltimateTicTacToe from '@/components/game/UltimateTicTacToe'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import AnimatedTitle from '@/components/game/AnimatedTitleGame'
import GameDescription from '@/components/game/GameDescription'

const TrescursivoGame = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (

    <>

    <Navbar></Navbar>

    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-900 to-black text-green-300">
      <AnimatedTitle></AnimatedTitle>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto mb-8">
          <UltimateTicTacToe />
        </div>

        <div className="w-full max-w-4xl mx-auto flex justify-center space-x-8 relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg border border-green-500"
          >
            <a 
              href="https://www.instagram.com/trescursivo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center space-y-2 hover:text-green-100 transition-colors duration-300"
            >
              <Instagram className="w-8 h-8" />
              <span className="text-sm text-center">Síguenos en Instagram</span>
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg border border-green-500 z-40"
          >
            <div className="relative">
              <button 
                onClick={toggleMenu}
                className="flex flex-col items-center space-y-2 hover:text-green-100 transition-colors duration-300"
              >
                <AlertTriangle className="w-8 h-8" />
                <span className="text-sm text-center">Reportar error</span>
              </button>
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-56 bg-black bg-opacity-90 rounded-md shadow-lg py-1 z-50"
                  >
                    <button
                      onClick={toggleMenu}
                      className="absolute top-2 right-2 text-green-300 hover:text-green-100"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <a href="https://www.instagram.com/trescursivo" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-green-300 hover:bg-green-800 transition-colors duration-300">
                      Instagram DM
                    </a>
                    <a href="mailto:trescursivo@gmail.com" className="block px-4 py-2 text-sm text-green-300 hover:bg-green-800 transition-colors duration-300">
                      Correo electrónico
                    </a>
                    <a href="/#contact" className="block px-4 py-2 text-sm text-green-300 hover:bg-green-800 transition-colors duration-300">
                      Formulario de contacto
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </main>

      <GameDescription></GameDescription>
    </div>

    <Footer></Footer>

    </>
  )
}

export default TrescursivoGame