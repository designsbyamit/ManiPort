import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const processSteps = [
  {
    number: '01',
    phase: 'Discover',
    description:
      'Research users, stakeholders, and the problem space through interviews, surveys, and competitive analysis.',
  },
  {
    number: '02',
    phase: 'Define',
    description:
      'Synthesise research into personas, journey maps, and a clear problem statement that the whole team can rally around.',
  },
  {
    number: '03',
    phase: 'Ideate',
    description:
      'Generate divergent solutions through sketching, workshops, and collaborative brainstorming sessions.',
  },
  {
    number: '04',
    phase: 'Prototype',
    description:
      'Build low and high fidelity prototypes in Figma, testing assumptions early and often to de-risk decisions.',
  },
  {
    number: '05',
    phase: 'Deliver',
    description:
      'Ship production-ready designs with thorough developer handoff documentation and continued support post-launch.',
  },
]

const skills = [
  'UX Research',
  'User Interviews',
  'Usability Testing',
  'Journey Mapping',
  'UI Design',
  'Interaction Design',
  'Visual Design',
  'Accessibility',
  'Figma',
  'Prototyping',
  'Design Systems',
  'Component Libraries',
  'Wireframing',
  'Information Architecture',
  'Typography',
  'Brand Identity',
]

const education = [
  {
    degree: 'B.Des. Visual Communication',
    institution: 'National Institute of Design',
    year: '2017–2021',
    location: 'Ahmedabad, India',
  },
  {
    degree: 'UX Design Certificate',
    institution: 'Google UX Design Program',
    year: '2021',
    location: 'Online',
  },
]

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <div className="min-h-[55vh] flex items-center pt-24 pb-16 bg-[var(--bg)]">
        <SectionWrapper>
          <div className="max-w-3xl py-8">
            <motion.p {...fadeUp(0)} className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-4">
              About Me
            </motion.p>
            <motion.h1 {...fadeUp(0.1)} className="font-serif text-5xl md:text-6xl text-[var(--text)] leading-tight">
              I design experiences
              <br />
              that feel human.
            </motion.h1>
            <motion.p {...fadeUp(0.2)} className="text-[var(--muted)] text-lg mt-8 leading-relaxed max-w-xl font-sans">
              I'm Manisha — a UX designer, researcher, and occasional artist based in Germany.
              I'm drawn to the messy, human side of design problems, and I believe the best
              interfaces are the ones you never have to think about.
            </motion.p>
          </div>
        </SectionWrapper>
      </div>

      {/* My Process */}
      <SectionWrapper>
        <div className="py-24">
          <motion.div {...fadeUp(0)} className="mb-14">
            <p className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-4">How I Work</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text)]">My Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                {...fadeUp(i * 0.08)}
                className="border border-[var(--border)] p-6 hover:border-accent transition-colors duration-300"
              >
                <span className="font-serif text-4xl text-accent opacity-30">{step.number}</span>
                <h3 className="font-sans font-semibold text-xs tracking-widest uppercase mt-4 text-[var(--text)]">
                  {step.phase}
                </h3>
                <p className="text-[var(--muted)] text-sm mt-3 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Skills */}
      <div className="bg-[var(--surface)]">
        <SectionWrapper>
          <div className="py-20">
            <motion.div {...fadeUp(0)} className="mb-12">
              <p className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-4">Expertise</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--text)]">Skills &amp; Tools</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  {...fadeUp(i * 0.04)}
                  className="border border-[var(--border)] px-4 py-3 text-sm font-medium text-[var(--muted)] hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* Education */}
      <SectionWrapper>
        <div className="py-24">
          <motion.div {...fadeUp(0)} className="mb-12">
            <p className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-4">Background</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text)]">Education</h2>
          </motion.div>

          <div className="space-y-10 max-w-2xl">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                {...fadeUp(i * 0.1)}
                className="flex gap-8 border-b border-[var(--border)] pb-10 last:border-0"
              >
                <span className="text-accent font-sans text-sm font-medium w-20 shrink-0 pt-0.5">
                  {edu.year}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-[var(--text)]">{edu.degree}</h3>
                  <p className="text-[var(--muted)] text-sm mt-1">{edu.institution}</p>
                  <p className="text-[var(--muted)] text-xs mt-0.5">{edu.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Personal note */}
      <div className="bg-[var(--surface)]">
        <SectionWrapper>
          <div className="py-24 max-w-2xl mx-auto text-center">
            <motion.p {...fadeUp(0)} className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-6">
              A Personal Note
            </motion.p>
            <motion.blockquote {...fadeUp(0.1)} className="font-serif text-2xl md:text-3xl leading-relaxed italic text-[var(--text)]">
              "Design is not just about making things beautiful. It's about understanding
              people so deeply that you can speak to them without words."
            </motion.blockquote>
            <motion.p {...fadeUp(0.2)} className="text-[var(--muted)] mt-6 font-sans text-sm">
              — Manisha
            </motion.p>
            <motion.p {...fadeUp(0.3)} className="text-[var(--muted)] mt-8 leading-relaxed font-sans max-w-lg mx-auto">
              Outside of work, I'm a mother — and honestly, that has made me a better
              designer. Parenthood teaches you patience, perspective, and the art of solving
              problems with incomplete information. Sound familiar?
            </motion.p>
          </div>
        </SectionWrapper>
      </div>
    </motion.div>
  )
}
