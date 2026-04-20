import SectionWrapper from '@/components/ui/SectionWrapper'

function ReaderSVG() {
  return (
    <svg
      width="160"
      height="200"
      viewBox="0 0 160 200"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* ── Hair (back layer, drawn first) ── */}
      <path strokeWidth="1.2" d="M48 38 Q44 18 55 10 Q70 2 90 4 Q110 2 121 10 Q132 18 112 38" />
      {/* Long hair flowing down left */}
      <path strokeWidth="1" d="M48 38 Q40 55 38 75 Q37 88 40 95" />
      {/* Long hair flowing down right */}
      <path strokeWidth="1" d="M112 38 Q120 55 120 72" />

      {/* ── Head ── */}
      <ellipse cx="80" cy="36" rx="22" ry="24" strokeWidth="1.4" />

      {/* ── Face details ── */}
      {/* Left eye */}
      <path strokeWidth="1" d="M70 33 Q72 31 74 33" />
      <circle cx="72" cy="33" r="1" fill="currentColor" stroke="none" />
      {/* Right eye */}
      <path strokeWidth="1" d="M86 33 Q88 31 90 33" />
      <circle cx="88" cy="33" r="1" fill="currentColor" stroke="none" />
      {/* Nose */}
      <path strokeWidth="0.8" d="M79 37 Q80 40 81 37" />
      {/* Mouth — subtle smile */}
      <path strokeWidth="1" d="M75 43 Q80 47 85 43" />
      {/* Left eyebrow */}
      <path strokeWidth="1" d="M68 28 Q72 26 76 28" />
      {/* Right eyebrow */}
      <path strokeWidth="1" d="M84 28 Q88 26 92 28" />

      {/* ── Hair parting / fringe detail ── */}
      <path strokeWidth="0.9" d="M58 18 Q70 14 80 16 Q90 14 102 18" />
      <path strokeWidth="0.8" d="M60 22 Q70 19 80 20" />

      {/* ── Neck ── */}
      <path strokeWidth="1.3" d="M74 59 Q72 66 72 70" />
      <path strokeWidth="1.3" d="M86 59 Q88 66 88 70" />

      {/* ── Shoulders & upper body ── */}
      <path strokeWidth="1.4" d="M40 95 Q38 82 44 74 Q56 68 72 70" />
      <path strokeWidth="1.4" d="M120 90 Q122 78 116 72 Q104 66 88 70" />

      {/* Torso sides */}
      <path strokeWidth="1.3" d="M40 95 Q38 112 42 128" />
      <path strokeWidth="1.3" d="M120 90 Q122 108 118 126" />

      {/* Clothing detail — neckline */}
      <path strokeWidth="1" d="M72 70 Q80 76 88 70" />
      {/* Shirt crease */}
      <path strokeWidth="0.7" d="M76 76 Q78 90 80 100" />

      {/* ── Left arm ── */}
      <path strokeWidth="1.3" d="M42 92 Q32 108 28 130 Q26 142 32 150" />
      {/* Left forearm angled onto book */}
      <path strokeWidth="1.2" d="M32 150 Q38 155 50 156" />

      {/* ── Right arm ── */}
      <path strokeWidth="1.3" d="M118 88 Q128 105 132 128 Q134 140 128 150" />
      {/* Right forearm angled onto book */}
      <path strokeWidth="1.2" d="M128 150 Q122 155 110 156" />

      {/* ── Hands ── */}
      {/* Left hand fingers */}
      <path strokeWidth="0.8" d="M50 156 Q48 160 46 162" />
      <path strokeWidth="0.8" d="M50 156 Q50 161 49 163" />
      <path strokeWidth="0.8" d="M50 156 Q53 160 52 163" />
      {/* Right hand fingers */}
      <path strokeWidth="0.8" d="M110 156 Q112 160 114 162" />
      <path strokeWidth="0.8" d="M110 156 Q110 161 111 163" />
      <path strokeWidth="0.8" d="M110 156 Q107 160 108 163" />

      {/* ── Open book ── */}
      {/* Book outer shape */}
      <path strokeWidth="1.4" d="M32 150 Q55 142 80 145 Q105 142 128 150 Q122 162 80 165 Q38 162 32 150Z" />
      {/* Spine */}
      <line x1="80" y1="145" x2="80" y2="165" strokeWidth="1.2" />
      {/* Left page text lines */}
      <line x1="42" y1="150" x2="76" y2="148" strokeWidth="0.7" />
      <line x1="43" y1="153" x2="76" y2="151" strokeWidth="0.7" />
      <line x1="44" y1="156" x2="76" y2="154" strokeWidth="0.7" />
      <line x1="46" y1="159" x2="75" y2="158" strokeWidth="0.7" />
      {/* Right page text lines */}
      <line x1="84" y1="148" x2="118" y2="150" strokeWidth="0.7" />
      <line x1="84" y1="151" x2="117" y2="153" strokeWidth="0.7" />
      <line x1="84" y1="154" x2="116" y2="156" strokeWidth="0.7" />
      <line x1="85" y1="158" x2="114" y2="159" strokeWidth="0.7" />
      {/* Book page curl on left */}
      <path strokeWidth="0.9" d="M36 148 Q34 145 38 143" />

      {/* ── Crossed legs ── */}
      {/* Left leg */}
      <path strokeWidth="1.3" d="M42 128 Q36 142 34 160 Q32 175 40 183 Q52 190 64 185 Q72 180 70 170" />
      {/* Right leg crossing over */}
      <path strokeWidth="1.3" d="M118 126 Q124 140 124 158 Q124 172 114 180 Q102 188 90 183 Q82 178 84 168" />
      {/* Cross point detail */}
      <path strokeWidth="1" d="M68 162 Q80 158 92 162" />

      {/* ── Feet ── */}
      {/* Left foot */}
      <path strokeWidth="1.1" d="M40 183 Q36 188 38 193 Q44 196 52 193 Q56 190 52 186" />
      {/* Right foot */}
      <path strokeWidth="1.1" d="M114 180 Q118 186 116 192 Q110 196 102 194 Q98 190 102 185" />

      {/* ── Subtle ambient detail — small stars/dots around ── */}
      <circle cx="18" cy="60" r="1" fill="currentColor" stroke="none" opacity="0.3" />
      <circle cx="142" cy="45" r="1.2" fill="currentColor" stroke="none" opacity="0.3" />
      <circle cx="148" cy="80" r="0.8" fill="currentColor" stroke="none" opacity="0.25" />
      <circle cx="14" cy="100" r="0.8" fill="currentColor" stroke="none" opacity="0.25" />
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
