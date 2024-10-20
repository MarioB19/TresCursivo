'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Logo from './logo'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      className="bg-black border-b border-green-500 py-4 sm:py-6 px-4 sm:px-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="group flex items-center space-x-4">
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Logo className="w-10 h-10 sm:w-16 sm:h-16" />
            <motion.div
              className="absolute inset-0 bg-green-500 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            />
          </motion.div>
          <motion.span 
            className="text-green-400 text-3xl sm:text-5xl font-extrabold tracking-tight ml-2 sm:ml-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            style={{ textShadow: '0 0 10px rgba(74, 222, 128, 0.5)' }}
          >
            Trescursivo
          </motion.span>
        </Link>
        
        <div className="hidden sm:block">
          <NavButton />
        </div>
        
        <button 
          className="sm:hidden text-green-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 sm:hidden"
          >
            <NavButton className="w-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function NavButton({ className = '' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <Button asChild className="bg-green-500 text-black hover:bg-green-400 transition-all duration-300 shadow-lg shadow-green-500/50 hover:shadow-green-400/50 text-xl sm:text-2xl font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-lg w-full sm:w-auto">
        <Link href="/play" className="flex items-center justify-center">
          Jugar
        </Link>
      </Button>
    </motion.div>
  )
}