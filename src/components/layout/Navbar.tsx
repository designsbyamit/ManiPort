import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion'
import ThemeToggle from '@/components/ui/ThemeToggle'

const navLinks = [
  { label: 'Home', href: '/', isAnchor: false },
  { label: 'Work', href: '#work', isAnchor: true },
  { label: 'About', href: '/about', isAnchor: false },
  { label: 'Contact', href: '#contact', isAnchor: true },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-2xl text-accent hover:text-accent-light transition-colors duration-200"
        >
          M.
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href, isAnchor }) =>
            isAnchor ? (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  e.preventDefault()
                  const id = href.replace('#', '')
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="relative text-sm font-sans text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200 group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ) : (
              <Link
                key={label}
                to={href}
                className={`relative text-sm font-sans transition-colors duration-200 group ${
                  isActive(href) ? 'text-accent' : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          )}
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="text-[var(--muted)] hover:text-accent transition-colors duration-200 p-1"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {isMenuOpen ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" />
                  <line x1="18" y1="4" x2="4" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="19" y2="7" />
                  <line x1="3" y1="11" x2="19" y2="11" />
                  <line x1="3" y1="15" x2="19" y2="15" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden md:hidden bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)]"
          >
            <div className="flex flex-col px-6 py-4 gap-5">
              {navLinks.map(({ label, href, isAnchor }) =>
                isAnchor ? (
                  <a
                    key={label}
                    href={href}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMenuOpen(false)
                      const id = href.replace('#', '')
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-sm font-sans text-[var(--muted)] hover:text-accent transition-colors duration-200 py-1"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={label}
                    to={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-sans py-1 transition-colors duration-200 ${
                      isActive(href) ? 'text-accent' : 'text-[var(--muted)] hover:text-accent'
                    }`}
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
