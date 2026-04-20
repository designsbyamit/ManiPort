import SectionWrapper from '@/components/ui/SectionWrapper'

function ReaderSVG() {
  return (
    <svg
      width="120"
      height="132"
      viewBox="0 0 200 220"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Head */}
      <ellipse cx="100" cy="42" rx="18" ry="20" />
      {/* Hair - flowing over head */}
      <path d="M82 35 Q78 20 85 15 Q100 8 115 15 Q122 20 118 35" />
      <path d="M82 35 Q76 50 80 62" />
      <path d="M118 35 Q124 50 120 62" />
      {/* Neck */}
      <line x1="100" y1="62" x2="100" y2="72" />
      {/* Shoulders */}
      <path d="M80 62 Q70 70 65 82 Q62 90 64 100" />
      <path d="M120 62 Q130 70 135 82 Q138 90 136 100" />
      {/* Body / torso */}
      <path d="M64 100 Q66 115 70 125" />
      <path d="M136 100 Q134 115 130 125" />
      {/* Arms holding book */}
      <path d="M67 88 Q55 105 52 130 Q51 140 60 145" />
      <path d="M133 88 Q145 105 148 130 Q149 140 140 145" />
      {/* Open book on lap */}
      <path d="M60 145 Q80 138 100 142 Q120 138 140 145" />
      <path d="M60 145 Q80 155 100 152 Q120 155 140 145" />
      {/* Book spine */}
      <line x1="100" y1="142" x2="100" y2="152" />
      {/* Book left page lines */}
      <line x1="68" y1="145" x2="96" y2="143" />
      <line x1="70" y1="148" x2="96" y2="146" />
      <line x1="72" y1="151" x2="96" y2="149" />
      {/* Book right page lines */}
      <line x1="104" y1="143" x2="130" y2="145" />
      <line x1="104" y1="146" x2="128" y2="148" />
      <line x1="104" y1="149" x2="126" y2="151" />
      {/* Crossed legs */}
      <path d="M70 125 Q60 140 55 165 Q52 178 65 185 Q80 190 90 180" />
      <path d="M130 125 Q140 140 145 165 Q148 178 135 185 Q120 190 110 180" />
      {/* Feet */}
      <path d="M90 180 Q100 185 110 180" />
      {/* Small decorative dot — reading glasses hint */}
      <circle cx="93" cy="46" r="1.5" fill="currentColor" />
      <circle cx="107" cy="46" r="1.5" fill="currentColor" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="16" height="16" rx="2" />
      <line x1="6" y1="9" x2="6" y2="14" />
      <line x1="6" y1="6" x2="6" y2="6.5" strokeWidth="2" />
      <path d="M10 9v5M10 11.5a2.5 2.5 0 0 1 5 0V14" />
    </svg>
  )
}

function DribbbleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="10" cy="10" r="8" />
      <path d="M2.5 8.5 Q7 10 10 16" />
      <path d="M17.5 8.5 Q13 7 10 4" />
      <path d="M4 14 Q8 12 17 13" />
    </svg>
  )
}

function BehanceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5h5.5a3 3 0 0 1 0 6H3V5z" />
      <path d="M3 11h6a3 3 0 0 1 0 6H3v-6z" />
      <line x1="12" y1="7" x2="18" y2="7" />
      <path d="M18 12H12a3 3 0 1 0 6 0z" />
    </svg>
  )
}

const socials = [
  { href: 'https://linkedin.com', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: 'https://dribbble.com', label: 'Dribbble', Icon: DribbbleIcon },
  { href: 'https://behance.net', label: 'Behance', Icon: BehanceIcon },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)]">
      <SectionWrapper>
        <div className="py-16 flex flex-col items-center gap-8 text-center">
          <div className="text-[var(--muted)]">
            <ReaderSVG />
          </div>

          <p className="font-serif text-xl text-[var(--muted)] italic max-w-sm leading-relaxed">
            Designing with empathy, building with purpose.
          </p>

          <div className="flex gap-6">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--muted)] hover:text-accent transition-colors duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>

          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Manisha Kumari. All rights reserved.
          </p>
        </div>
      </SectionWrapper>
    </footer>
  )
}
