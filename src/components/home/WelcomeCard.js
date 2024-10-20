import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Logo from "../logo"
import Link from "next/link"


export default function WelcomeCard() {

  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-16 bg-gradient-to-b from-green-950 via-green-900 to-black"
      
    >
      <Card className="bg-black/50 backdrop-blur-md border-green-500 max-w-2xl mx-auto text-center shadow-lg shadow-green-500/20">
        <CardHeader className="space-y-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <Logo></Logo>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <CardTitle className="text-5xl font-bold text-green-400 mb-2">
              Bienvenido a Trescursivo
            </CardTitle>
            <CardDescription className="text-green-300 text-2xl">
              Una nueva dimensión del clásico juego que desafiará tu mente
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent className="text-green-200 text-lg space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Descubre y comparte la experiencia única de Trescursivo, donde cada movimiento
            abre un nuevo universo de posibilidades estratégicas. 
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Juega sin crear cuenta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
              <Link href="/play" passHref>
      <Button className="bg-green-500 text-black hover:bg-green-400 text-xl px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 font-semibold">
        Jugar →
      </Button>
    </Link>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}