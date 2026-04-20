import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { projects } from '@/data/projects'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as number[] } },
}

function WorkTile({ project, index }: { project: typeof projects[0]; index: number }) {
  const [imgError, setImgError] = useState(false)
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/project/${project.slug}`}
        className={`group flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''} gap-0 border border-[var(--border)] hover:border-accent transition-colors duration-300`}
      >
        {/* Image — 60% width on desktop */}
        <div className="relative overflow-hidden w-full md:w-3/5 aspect-[16/9] md:aspect-auto md:min-h-[380px] bg-[var(--surface)]">
          {imgError ? (
            <div className="w-full h-full bg-[var(--surface)] flex items-center justify-center">
              <span className="text-[var(--muted)] text-sm font-sans">{project.title}</span>
            </div>
          ) : (
            <img
              src={project.thumbnailUrl}
              alt={project.title}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            />
          )}
        </div>

        {/* Text — 40% width on desktop */}
        <div className={`w-full md:w-2/5 flex flex-col justify-center p-8 md:p-12 bg-[var(--bg)] group-hover:bg-[var(--surface)] transition-colors duration-300`}>
          <p className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-3">{project.domain}</p>
          <h3 className="font-serif text-2xl md:text-3xl text-[var(--text)] leading-tight">
            {project.title}
          </h3>
          <p className="text-[var(--muted)] text-sm mt-4 leading-relaxed">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {[project.role, project.year].map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 border border-[var(--border)] text-[var(--muted)]">
                {tag}
              </span>
            ))}
          </div>
          <span className="mt-8 text-xs tracking-widest uppercase text-accent font-sans group-hover:translate-x-1 transition-transform duration-200 inline-block">
            View Case Study →
          </span>
        </div>
      </Link>
    </motion.div>
  )
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
          <p className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-4">Portfolio</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--text)]">Selected Work</h2>
        </motion.div>

        {/* Full-width stacked tiles */}
        <div className="flex flex-col gap-6">
          {featured.map((project, i) => (
            <WorkTile key={project.slug} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="/work"
            className="text-sm font-sans text-[var(--muted)] hover:text-accent transition-colors duration-200 tracking-widest uppercase"
          >
            View All Projects →
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
