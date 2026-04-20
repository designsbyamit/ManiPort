import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as number[] } },
}

export default function Works() {
  const featured = projects.slice(0, 3)

  return (
    <SectionWrapper id="work">
      <div className="py-24">
        {/* Section header */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <p className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--text)]">Selected Work</h2>
        </motion.div>

        {/* Project grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="/about"
            className="text-sm font-sans text-[var(--muted)] hover:text-accent transition-colors duration-200 tracking-widest uppercase"
          >
            View All Projects →
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
