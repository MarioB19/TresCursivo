'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import WelcomeCard from './WelcomeCard'
import WhyChooseTrescursivo from './WhyChooseTrescursivo'
import GameInfo from './GameInfo'
import ContactSection from './ContactSection'
import TrescursivoFeatures from './Features'
import Navbar from '../navbar'
import Footer from '../footer'

const sectionVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
}

export default function HomePage() {
  const [visibleSections, setVisibleSections] = useState(new Set())
  const sectionsRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const newVisibleSections = new Set()

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom >= window.innerHeight * 0.25
          if (isVisible) {
            newVisibleSections.add(index)
          }
        }
      })

      setVisibleSections(newVisibleSections)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { Component: WelcomeCard, id: 'welcome' },
    { Component: WhyChooseTrescursivo, id: 'why-choose' },
    { Component: TrescursivoFeatures, id: 'features' },
    { Component: GameInfo, id: 'game-info' },
    { Component: ContactSection, id: 'contact' }
  ]

  return (
    <>
    <Navbar></Navbar>
    <div className="bg-black text-green-400">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {sections.map(({ Component, id }, index) => (
            <motion.div
              key={id}
              ref={el => sectionsRef.current[index] = el}
              variants={sectionVariants}
              initial="hidden"
              animate={visibleSections.has(index) ? "visible" : "hidden"}
              custom={index}
            >
              <Component />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>

    <Footer></Footer>
    </>
  )
}