import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const listItems = [
  "Desafía tu pensamiento estratégico a múltiples niveles",
  "Experimenta una versión evolucionada del clásico tres en raya",
  "Perfecto para jugadores que buscan retos mentales complejos",
  "Diseño visual atractivo con estética neón"
]

export default function WhyChooseTrescursivo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-16 bg-gradient-to-b from-black via-green-950 to-green-900"
    >
      <Card className="bg-black/50 backdrop-blur-md border-green-400 overflow-hidden max-w-4xl mx-auto shadow-lg shadow-green-500/20">
        <CardHeader className="pb-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CardTitle className="text-green-400 text-4xl font-bold text-center mb-2">
              ¿Por qué elegir Trescursivo?
            </CardTitle>
            <p className="text-green-300 text-center text-lg">
              Descubre las razones que hacen de Trescursivo una experiencia única
            </p>
          </motion.div>
        </CardHeader>
        <CardContent className="text-green-200">
          <motion.ul 
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {listItems.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center bg-green-900/20 rounded-lg p-4 transition-all duration-300 hover:bg-green-900/30"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <motion.div
                  className="mr-4 text-green-400"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle size={24} />
                </motion.div>
                <span className="text-lg">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}