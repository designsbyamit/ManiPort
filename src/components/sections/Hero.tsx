import { motion } from 'framer-motion'
import TypewriterText from '@/components/ui/TypewriterText'
import Button from '@/components/ui/Button'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as number[] },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain-overlay">
      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at -10% 110%, rgba(201,169,110,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left — text */}
          <div className="flex flex-col">
            <motion.p
              {...fadeUp(0)}
              className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-6"
            >
              UX Designer · Based in Germany
            </motion.p>

            <motion.h1
              {...fadeUp(0.15)}
              className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[var(--text)]"
            >
              Hello, I'm Manisha,
              <br />
              a{' '}
              <TypewriterText
                words={['designer', 'problem-solver', 'artist', 'mother']}
                className="text-accent italic"
              />
              ,
              <br />
              who simplifies the
              <br />
              complexity of digital
              <br />
              experiences.
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-[var(--muted)] text-lg mt-8 max-w-md leading-relaxed font-sans"
            >
              UX Designer with 5+ years of experience creating human-centered
              digital products that balance beauty with function.
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center bg-accent text-dark-bg hover:bg-accent-light font-medium px-6 py-3 text-xs tracking-widest uppercase transition-all duration-200 font-sans cursor-pointer"
              >
                View My Work
              </button>
              <Button variant="outline" href="/about">
                About Me
              </Button>
            </motion.div>
          </div>

          {/* Right — decorative element (lg+) */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="relative w-64 h-64"
            >
              <div className="absolute inset-0 rounded-full border border-dashed border-accent opacity-20" />
              <div className="absolute inset-8 rounded-full border border-accent opacity-10" />
            </motion.div>

            <div className="absolute w-3 h-3 rounded-full bg-accent opacity-60" />
          </div>
        </div>
      </div>
    </section>
  )
}
