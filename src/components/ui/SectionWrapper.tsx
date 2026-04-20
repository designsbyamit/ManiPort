interface SectionWrapperProps {
  id?: string
  className?: string
  children: React.ReactNode
  fullWidth?: boolean
}

export default function SectionWrapper({
  id,
  className = '',
  children,
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={className}>
      {fullWidth ? (
        children
      ) : (
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">{children}</div>
      )}
    </section>
  )
}
