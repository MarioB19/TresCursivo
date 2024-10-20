'use client'

import Link from 'next/link'
import { Github, Instagram, Linkedin } from 'lucide-react'
import Logo from './logo'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black text-green-400 border-t border-green-500">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo and Description */}
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="group flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Logo className="w-12 h-12" />
                <motion.div
                  className="absolute inset-0 bg-green-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                />
              </motion.div>
              <motion.span 
                className="text-green-400 text-3xl font-extrabold tracking-tight"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                style={{ textShadow: '0 0 10px rgba(74, 222, 128, 0.5)' }}
              >
                Trescursivo
              </motion.span>
            </Link>
            <motion.p 
              className="text-sm max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Explorando la recursividad en el clásico juego del tres en raya. Nuestra misión es hacer del aprendizaje una experiencia divertida e interactiva.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
  className="mb-8 md:mb-0"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  <h3 className="text-xl font-semibold mb-4 text-green-300">Enlace rápido</h3>
  <ul className="space-y-2">
    <motion.li 
      whileHover={{ x: 5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link href="/play" className="hover:text-green-300 transition-colors text-lg font-medium">
        Jugar
      </Link>
    </motion.li>
  </ul>
</motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-300">Síguenos</h3>
            <div className="flex space-x-4">
              {[
               
                { icon: Instagram, href: 'https://www.instagram.com/trescursivo/' },
               
              ].map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-300 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-12 text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          © {new Date().getFullYear()} Trescursivo. Todos los derechos reservados.
        </motion.div>
      </div>
    </footer>
  )
}