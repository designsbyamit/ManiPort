import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as number[] },
  }),
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      className="group cursor-pointer"
    >
      <Link to={`/project/${project.slug}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden aspect-[4/3] bg-[var(--surface)]">
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
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-dark-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="border border-accent text-accent text-xs tracking-widest uppercase px-5 py-2.5">
              View Case Study
            </span>
          </div>
        </div>

        {/* Card footer */}
        <div className="pt-5 pb-2">
          <h3 className="font-serif text-xl text-[var(--text)] group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-[var(--muted)] text-sm mt-1.5 leading-relaxed">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {[project.role, project.year, project.domain].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 border border-[var(--border)] text-[var(--muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
