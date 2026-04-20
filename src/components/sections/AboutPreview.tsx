import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Button from '@/components/ui/Button'

export default function AboutPreview() {
  return (
    <SectionWrapper id="about" className="bg-[var(--surface)]">
      <div className="py-24 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-4"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-5xl text-[var(--text)] leading-tight"
        >
          Designing with intent,
          <br />
          thinking with empathy.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[var(--muted)] text-lg mt-8 leading-relaxed font-sans"
        >
          I'm Manisha — a UX designer with 5+ years of experience turning complex problems
          into intuitive, beautiful interfaces. Based in Germany, I work at the intersection
          of research, strategy, and craft. My goal is always the same: to make technology
          feel human.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <Button variant="outline" href="/about">
            Read More About Me →
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
