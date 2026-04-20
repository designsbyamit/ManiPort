import { useState } from 'react'
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
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const contactDetails = [
  {
    label: 'Email',
    value: 'manisha@example.com',
    href: 'mailto:manisha@example.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="16" height="12" rx="2" />
        <path d="M2 7l8 5 8-5" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/manishakumari',
    href: 'https://linkedin.com/in/manishakumari',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="16" height="16" rx="2" />
        <line x1="6" y1="9" x2="6" y2="14" />
        <line x1="6" y1="6" x2="6" y2="6.5" strokeWidth="2" />
        <path d="M10 9v5M10 11.5a2.5 2.5 0 0 1 5 0V14" />
      </svg>
    ),
  },
]

type FormState = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Uses Formspree — replace YOUR_FORM_ID with your actual Formspree form ID
    // Get one free at https://formspree.io
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full bg-transparent border border-[var(--border)] px-4 py-3 text-sm font-sans text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-accent transition-colors duration-200'

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Page hero */}
      <div className="pt-36 pb-16 bg-[var(--bg)]">
        <SectionWrapper>
          <motion.p {...fadeUp(0)} className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-4">
            Contact
          </motion.p>
          <motion.h1 {...fadeUp(0.1)} className="font-serif text-5xl md:text-6xl text-[var(--text)] leading-tight max-w-2xl">
            Let's work together.
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-[var(--muted)] text-lg mt-6 max-w-xl leading-relaxed font-sans">
            Have a project in mind, or just want to say hello? I'd love to hear from you.
          </motion.p>
        </SectionWrapper>
      </div>

      {/* Main content */}
      <SectionWrapper>
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

            {/* Left — contact info */}
            <div className="lg:col-span-2">
              <motion.div {...fadeUp(0)} className="space-y-10">
                <div>
                  <p className="text-accent text-xs tracking-[0.25em] uppercase font-sans mb-6">
                    Reach me at
                  </p>
                  <div className="space-y-6">
                    {contactDetails.map(({ label, value, href, icon }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4 group"
                      >
                        <span className="text-[var(--muted)] group-hover:text-accent transition-colors duration-200 mt-0.5 shrink-0">
                          {icon}
                        </span>
                        <div>
                          <p className="text-xs tracking-widest uppercase font-sans text-[var(--muted)] mb-1">
                            {label}
                          </p>
                          <p className="text-[var(--text)] group-hover:text-accent transition-colors duration-200 font-sans text-sm">
                            {value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border)]">
                  <p className="text-[var(--muted)] text-sm leading-relaxed font-sans">
                    Based in Bengaluru, India. Open to remote collaborations and on-site
                    opportunities across India and Europe.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <motion.form
                {...fadeUp(0.1)}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-sans text-[var(--muted)] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-sans text-[var(--muted)] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs tracking-widest uppercase font-sans text-[var(--muted)] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {/* Submit */}
                <div className="flex items-center gap-6">
                  <button
                    type="submit"
                    disabled={status === 'sending' || status === 'sent'}
                    className="inline-flex items-center gap-2 bg-accent text-dark-bg hover:bg-accent-light disabled:opacity-60 disabled:cursor-not-allowed px-8 py-3 text-xs tracking-widest uppercase font-sans font-medium transition-all duration-200"
                  >
                    {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send Message'}
                  </button>

                  {status === 'sent' && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm text-[var(--muted)] font-sans"
                    >
                      Thanks! I'll get back to you soon.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm text-red-400 font-sans"
                    >
                      Something went wrong. Try emailing directly.
                    </motion.p>
                  )}
                </div>

                <p className="text-xs text-[var(--muted)] font-sans">
                  Form powered by{' '}
                  <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">
                    Formspree
                  </a>
                  . Replace <code className="text-accent">YOUR_FORM_ID</code> in{' '}
                  <code className="text-accent">Contact.tsx</code> with your own.
                </p>
              </motion.form>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </motion.div>
  )
}
