"use client"
import { useState, useEffect } from 'react'

const navLinks = ['About', 'Experience', 'Work', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const dark = saved !== 'light'
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-2rem)] max-w-2xl">
      <div className={`flex items-center justify-between gap-4 px-5 py-3 rounded-2xl border transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 dark:bg-black/80 backdrop-blur-xl border-gray-200 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)]'
          : 'bg-white/50 dark:bg-black/20 backdrop-blur-md border-gray-200/60 dark:border-white/5'
      }`}>
        {/* Logo */}
        <a href="#" className="text-accent font-mono text-sm font-medium shrink-0 hover:opacity-80 transition-opacity">
          &lt;HRI /&gt;
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xs font-mono transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-xl border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-accent hover:border-accent/40 transition-all duration-200"
          >
            {isDark ? (
              /* Sun */
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              /* Moon */
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Resume CTA */}
          <a
            href="https://drive.google.com/file/d/1agxK72_N9LHAX8yThCj-qy2lL2Ow7ccc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs border border-accent/40 text-accent rounded-xl hover:bg-accent hover:text-black transition-all duration-200 font-medium"
          >
            Resume
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-5 py-4 rounded-2xl bg-white dark:bg-black/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-mono transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1agxK72_N9LHAX8yThCj-qy2lL2Ow7ccc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm font-mono"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}
