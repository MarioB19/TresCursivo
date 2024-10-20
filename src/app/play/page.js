'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import UltimateTicTacToe from '@/components/game/UltimateTicTacToe'
import GameDescription from '@/components/game/GameDescription'
import { Instagram, AlertTriangle, X } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
export default function PlayPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-green-900 to-black text-green-400">
      <motion.h1 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4 text-center text-green-300 tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Juega Trescursivo
      </motion.h1>

      <div className="flex-grow flex flex-col md:flex-row justify-center items-center p-4 space-y-4 md:space-y-0 md:space-x-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/4 text-center"
        >
          <a 
            href="https://www.instagram.com/trescursivo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center space-x-2 text-green-300 hover:text-green-100 transition-colors duration-300 text-lg md:text-xl lg:text-2xl"
          >
            <Instagram className="w-8 h-8 md:w-10 md:h-10" />
            <span>Síguenos en Instagram</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 bg-black bg-opacity-50 p-4 md:p-6 rounded-xl shadow-2xl"
        >
          <UltimateTicTacToe />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/4 text-center"
        >
          <div className="relative">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center space-x-2 text-green-300 hover:text-green-100 transition-colors duration-300 text-lg md:text-xl lg:text-2xl"
            >
              <AlertTriangle className="w-8 h-8 md:w-10 md:h-10" />
              <span>Reportar error</span>
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 bg-black bg-opacity-90 rounded-md shadow-lg py-1 z-10"
                >
                  <button
                    onClick={toggleMenu}
                    className="absolute top-2 right-2 text-green-300 hover:text-green-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <a href="https://www.instagram.com/trescursivo" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-base text-green-300 hover:bg-green-800 transition-colors duration-300">
                    Instagram DM
                  </a>
                  <a href="mailto:trescursivo@gmail.com" className="block px-4 py-2 text-base text-green-300 hover:bg-green-800 transition-colors duration-300">
                    Correo electrónico
                  </a>
                  <Link href="/#contact" className="block px-4 py-2 text-base text-green-300 hover:bg-green-800 transition-colors duration-300">
                    Formulario de contacto
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <GameDescription />
      <Footer></Footer>
    </div>

    </>
  )
}