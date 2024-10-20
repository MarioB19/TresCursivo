import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Logo from './logo'

export default function Navbar() {
  return (
    <motion.nav 
      className="bg-black border-b border-green-500 py-6 px-8 flex items-center justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="group flex items-center space-x-4">
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
          className="text-green-400 text-4xl font-extrabold tracking-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          style={{ textShadow: '0 0 10px rgba(74, 222, 128, 0.5)' }}
        >
          Trescursivo
        </motion.span>
      </Link>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button asChild className="bg-green-500 text-black hover:bg-green-400 transition-all duration-300 shadow-lg shadow-green-500/50 hover:shadow-green-400/50 text-xl font-bold py-3 px-8 rounded-lg">
          <Link href="/play" className="flex items-center justify-center">
            Jugar
          </Link>
        </Button>
      </motion.div>
    </motion.nav>
  )
}