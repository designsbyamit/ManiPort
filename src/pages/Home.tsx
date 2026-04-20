import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import Works from '@/components/sections/Works'
import AboutPreview from '@/components/sections/AboutPreview'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [hash])

  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Hero />
      <Works />
      <AboutPreview />
    </motion.main>
  )
}
