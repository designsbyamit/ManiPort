import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { projects } from '@/data/projects'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

/* ── Featured tile — alternating image/text layout ───────────────────────── */
function FeaturedTile({ project, index }: { project: typeof projects[0]; index: number }) {
  const [imgError, setImgError] = useState(false)
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/project/${project.slug}`}
        className={`group flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''} border border-[var(--border)] hover:border-accent transition-colors duration-300`}
      >
        {/* Image — 60% */}
        <div className="relative overflow-hidden w-full md:w-3/5 aspect-[16/9] md:aspect-auto md:min-h-[420px] bg-[var(--surface)]">
          {imgError ? (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[var(--muted)] text-sm">{project.title}</span>
            </div>
          ) : (
            <img
              src={project.thumbnailUrl}
              alt={project.title}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          )}
        </div>

        {/* Text — 40% */}
        <div className="w-full md:w-2/5 flex flex-col justify-center p-8 md:p-12 bg-[var(--bg)] group-hover:bg-[var(--surface)] transition-colors duration-300">
          <p className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-3">{project.domain}</p>
          <h3 className="font-serif text-2xl md:text-3xl text-[var(--text)] leading-tight">{project.title}</h3>
          <p className="text-[var(--muted)] text-sm mt-4 leading-relaxed">{project.shortDescription}</p>
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

/* ── Short story card — compact two-column grid ──────────────────────────── */
function ShortStoryCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/project/${project.slug}`} className="group block border border-[var(--border)] hover:border-accent transition-colors duration-300">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[3/2] bg-[var(--surface)]">
          {imgError ? (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[var(--muted)] text-sm">{project.title}</span>
            </div>
          ) : (
            <img
              src={project.thumbnailUrl}
              alt={project.title}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="border border-white/60 text-white text-xs tracking-widest uppercase px-4 py-2">
              Read Story
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="p-6">
          <p className="text-accent text-xs tracking-[0.2em] uppercase font-sans mb-2">{project.domain}</p>
          <h3 className="font-serif text-xl text-[var(--text)] group-hover:text-accent transition-colors duration-200 leading-snug">
            {project.title}
          </h3>
          <p className="text-[var(--muted)] text-sm mt-2 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-xs text-[var(--muted)]">{project.year}</span>
            <span className="w-px h-3 bg-[var(--border)]" />
            <span className="text-xs text-[var(--muted)]">{project.role}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function Work() {
  const featured = projects.filter((p) => p.type === 'featured')
  const shortStories = projects.filter((p) => p.type === 'short-story')

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Page hero */}
      <div className="pt-32 pb-16 bg-[var(--bg)]">
        <SectionWrapper>
          <motion.p {...fadeUp(0)} className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-4">
            Work
          </motion.p>
          <motion.h1 {...fadeUp(0.1)} className="font-serif text-5xl md:text-6xl text-[var(--text)] leading-tight max-w-2xl">
            Projects &amp; case studies
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-[var(--muted)] text-lg mt-6 max-w-xl leading-relaxed font-sans">
            A curated selection of design work spanning product, branding, and systems — each one a different kind of problem to untangle.
          </motion.p>
        </SectionWrapper>
      </div>

      {/* ── Featured ── */}
      <SectionWrapper>
        <div className="py-20">
          <motion.div {...fadeUp(0)} className="mb-12">
            <p className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-3">Deep dives</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text)]">Featured</h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {featured.map((project, i) => (
              <FeaturedTile key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Short Stories ── */}
      <div className="bg-[var(--surface)]">
        <SectionWrapper>
          <div className="py-20">
            <motion.div {...fadeUp(0)} className="mb-12">
              <p className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-3">Focused explorations</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--text)]">Short Stories</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shortStories.map((project, i) => (
                <ShortStoryCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </motion.div>
  )
}
