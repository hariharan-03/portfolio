"use client"
import { useState, useEffect, useRef } from 'react'

const WORDS = ['React.js', 'Next.js']

export default function Typewriter() {
  const [display, setDisplay] = useState('')
  const timerRef = useRef(null)
  const state = useRef({ wordIdx: 0, charIdx: 0, deleting: false })

  useEffect(() => {
    const tick = () => {
      const s = state.current
      const word = WORDS[s.wordIdx]

      if (!s.deleting) {
        s.charIdx++
        setDisplay(word.slice(0, s.charIdx))
        const done = s.charIdx === word.length
        if (done) s.deleting = true
        timerRef.current = setTimeout(tick, done ? 1500 : 110)
      } else {
        s.charIdx--
        setDisplay(word.slice(0, s.charIdx))
        const done = s.charIdx === 0
        if (done) {
          s.deleting = false
          s.wordIdx = (s.wordIdx + 1) % WORDS.length
        }
        timerRef.current = setTimeout(tick, done ? 400 : 65)
      }
    }

    timerRef.current = setTimeout(tick, 600)
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <span className="text-accent">
      {display}
      <span className="inline-block w-[2px] h-4 bg-accent ml-[3px] align-middle animate-pulse rounded-sm" />
    </span>
  )
}
