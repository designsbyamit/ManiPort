import { useEffect, useRef, useState } from 'react'

interface TypewriterTextProps {
  words: string[]
  speed?: number
  pause?: number
  deleteSpeed?: number
  className?: string
}

export default function TypewriterText({
  words,
  speed = 80,
  pause = 1800,
  deleteSpeed = 40,
  className = '',
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const tick = () => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
          timeoutRef.current = setTimeout(tick, speed)
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1))
          timeoutRef.current = setTimeout(tick, deleteSpeed)
        } else {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }

    timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : speed)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [displayText, wordIndex, isDeleting, words, speed, pause, deleteSpeed])

  return (
    <span className={className}>
      {displayText}
      <span aria-hidden="true" className="animate-pulse text-accent">
        |
      </span>
    </span>
  )
}
