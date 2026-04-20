import { useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
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
  viewport: { once: true as const, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [imgError, setImgError] = useState(false)

  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[projectIndex]
  const nextProject = projects[(projectIndex + 1) % projects.length]

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 pt-20">
        <h1 className="font-serif text-4xl text-[var(--text)]">Project not found</h1>
        <Link to="/" className="text-accent text-sm tracking-widest uppercase hover:text-accent-light transition-colors">
          ← Back to Home
        </Link>
      </div>
    )
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Back nav */}
      <div className="pt-24 pb-4">
        <SectionWrapper>
          <button
            onClick={() => navigate(-1)}
            className="text-[var(--muted)] hover:text-accent text-sm tracking-widest uppercase transition-colors duration-200 font-sans"
          >
            ← Back to Work
          </button>
        </SectionWrapper>
      </div>

      {/* Hero image */}
      <div className="relative h-[55vh] md:h-[65vh] overflow-hidden bg-[var(--surface)]">
        {!imgError ? (
          <img
            src={project.heroImageUrl}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[var(--surface)] flex items-center justify-center">
            <span className="font-serif text-2xl text-[var(--muted)]">{project.title}</span>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-10">
          <SectionWrapper>
            <p className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-3">{project.domain}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight">{project.title}</h1>
            <div className="flex flex-wrap gap-3 mt-4">
              {[project.role, project.year].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 border border-white/30 text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-[var(--border)] bg-[var(--surface)]">
        <SectionWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
            {[
              { label: 'Role', value: project.role },
              { label: 'Year', value: project.year },
              { label: 'Domain', value: project.domain },
              { label: 'Tags', value: project.tags.join(', ') },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[var(--muted)] text-xs tracking-widest uppercase font-sans mb-1">{label}</p>
                <p className="text-[var(--text)] text-sm font-medium">{value}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* Overview */}
      <SectionWrapper>
        <motion.div {...fadeUp(0)} className="max-w-3xl py-20">
          <p className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-4">Overview</p>
          <p className="text-[var(--text)] text-lg leading-relaxed font-sans">{project.overview}</p>
        </motion.div>
      </SectionWrapper>

      {/* Problem statement */}
      <div className="bg-[var(--surface)]">
        <SectionWrapper>
          <motion.div {...fadeUp(0)} className="max-w-3xl py-20">
            <p className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-6">Problem Statement</p>
            <blockquote className="border-l-2 border-accent pl-6 font-serif italic text-xl md:text-2xl text-[var(--text)] leading-relaxed">
              {project.problem}
            </blockquote>
          </motion.div>
        </SectionWrapper>
      </div>

      {/* Process */}
      <SectionWrapper>
        <div className="py-20 max-w-3xl">
          <motion.p {...fadeUp(0)} className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-4">
            Process
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} className="font-serif text-3xl md:text-4xl text-[var(--text)] mb-14">
            How I approached it
          </motion.h2>

          <div className="space-y-14">
            {project.process.map((step, i) => (
              <motion.div key={step.phase} {...fadeUp(i * 0.08)} className="flex gap-8">
                <span className="font-serif text-3xl text-accent opacity-30 w-10 shrink-0 pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-sans font-semibold text-xs tracking-widest uppercase text-[var(--text)] mb-3">
                    {step.phase}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Outcome */}
      <div className="bg-[var(--surface)]">
        <SectionWrapper>
          <motion.div {...fadeUp(0)} className="max-w-3xl py-20">
            <p className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-4">Final Outcome</p>
            <p className="text-[var(--text)] text-lg leading-relaxed font-sans">{project.outcome}</p>
          </motion.div>
        </SectionWrapper>
      </div>

      {/* Learnings */}
      <SectionWrapper>
        <motion.div {...fadeUp(0)} className="max-w-3xl py-20">
          <p className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-4">Learnings</p>
          <p className="text-[var(--text)] text-lg leading-relaxed font-sans">{project.learnings}</p>
        </motion.div>
      </SectionWrapper>

      {/* Next project */}
      <div className="border-t border-[var(--border)]">
        <SectionWrapper>
          <div className="py-16">
            <p className="text-[var(--muted)] text-xs tracking-widest uppercase font-sans mb-3">Next Project</p>
            <Link
              to={`/project/${nextProject.slug}`}
              className="font-serif text-3xl md:text-4xl text-[var(--text)] hover:text-accent transition-colors duration-200 block"
            >
              {nextProject.title} →
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </motion.div>
  )
}
