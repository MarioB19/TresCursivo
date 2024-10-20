import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Info, Book, GamepadIcon } from 'lucide-react'

const SectionContent = ({ title, content, isActive, toggleSection, icon: Icon }) => (
  <motion.div layout className="mb-4">
    <Button
      onClick={toggleSection}
      className={`w-full bg-gradient-to-r ${isActive ? 'from-green-700 to-green-600' : 'from-green-900 to-green-800'} text-green-100 font-bold py-3 px-6 rounded-lg flex justify-between items-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20`}
    >
      <span className="flex items-center text-lg">
        <Icon className="mr-3 w-6 h-6" />
        {title}
      </span>
      {isActive ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
    </Button>
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <Card className="mt-3 bg-green-900/50 border-green-400 backdrop-blur-sm">
            <CardContent className="text-green-200 p-6">
              {typeof content === 'string' ? (
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg leading-relaxed"
                >
                  {content}
                </motion.p>
              ) : (
                <motion.ol className="list-decimal list-inside space-y-4">
                  {content.map((rule, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                      className="text-lg leading-relaxed"
                    >
                      {rule}
                    </motion.li>
                  ))}
                </motion.ol>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
)

export default function GameInfo() {
  const [activeSection, setActiveSection] = useState(null)

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const sections = [
    {
      title: "Acerca del juego",
      content: "El Tres en Raya Recursivo lleva el juego clásico a un nuevo nivel. Cada casilla del tablero principal contiene otro juego de tres en raya, creando un desafío estratégico multinivel que pondrá a prueba tus habilidades de pensamiento.",
      icon: Info
    },
    {
      title: "Reglas del juego",
      content: [
        "El juego se desarrolla en un tablero 3x3, donde cada casilla es otro juego de tres en raya.",
        "Ganas una casilla del tablero principal al ganar el juego dentro de esa casilla.",
        "Tu movimiento determina en qué tablero jugará tu oponente a continuación.",
        "Gana tres casillas en línea en el tablero principal para ganar el juego."
      ],
      icon: Book
    }
  ]

  return (
    <div className="w-full py-16 bg-gradient-to-b from-black via-green-950 to-green-900">
      <Card className="bg-black/70 border-green-400 overflow-hidden max-w-4xl mx-auto shadow-2xl shadow-green-500/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-green-400 text-4xl font-bold text-center flex items-center justify-center">
            <GamepadIcon className="w-10 h-10 mr-4" />
            Trescursivo: El Desafío Estratégico
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          {sections.map((section) => (
            <SectionContent
              key={section.title}
              title={section.title}
              content={section.content}
              isActive={activeSection === section.title}
              toggleSection={() => toggleSection(section.title)}
              icon={section.icon}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}