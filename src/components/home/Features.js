import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Users, UserPlus, Brain, Network } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Juego para dos",
    description: "Desafía a un amigo en emocionantes partidas de Trescursivo en el mismo dispositivo.",
    available: true,
  },
  {
    icon: Brain,
    title: "Estrategia Recursiva",
    description: "Experimenta un tres en raya llevado al siguiente nivel con tableros dentro de tableros.",
    available: true,
  },
  {
    icon: UserPlus,
    title: "Multijugador Online",
    description: "Próximamente, podrás enfrentarte a jugadores de todo el mundo en partidas en línea.",
    available: false,
  },
  {
    icon: Network,
    title: "Torneos y Ligas",
    description: "En el futuro, participa en torneos y ligas para demostrar tus habilidades en Trescursivo.",
    available: false,
  },
]

const FeatureCard = ({ icon: Icon, title, description, available }) => (
  <Card className={`bg-black/70 border-green-400 ${available ? 'border-opacity-100' : 'border-opacity-50'} hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300`}>
    <CardHeader className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent z-0"></div>
      <Icon className={`w-16 h-16 mb-4 relative z-10 ${available ? 'text-green-400' : 'text-green-700'}`} />
      <CardTitle className={`text-2xl font-bold relative z-10 ${available ? 'text-green-400' : 'text-green-700'}`}>
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className={`text-base mb-4 ${available ? 'text-green-300' : 'text-green-600'}`}>
        {description}
      </p>
      {available ? (
        <Button className="w-full bg-green-500 text-black hover:bg-green-400 transition-colors duration-300">
          Disponible ahora
        </Button>
      ) : (
        <Button className="w-full bg-green-900 text-green-400 hover:bg-green-800 transition-colors duration-300" disabled>
          Próximamente
        </Button>
      )}
    </CardContent>
  </Card>
)

export default function TrescursivoFeatures() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full py-16 bg-gradient-to-b from-green-900 via-green-950 to-black"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-green-400 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Características de Trescursivo
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}