import Typewriter from './Typewriter'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '9+', label: 'Projects Shipped' },
  { value: '2', label: 'Stints at Skoruz' },
]

const webStack = [
  { src: 'react-2.svg', alt: 'React JS' },
  { src: 'next-js.svg', alt: 'Next JS', whiteBg: true },
  { src: 'javascript-1.svg', alt: 'JavaScript' },
  { src: 'typescript.svg', alt: 'TypeScript' },
  { src: 'html-1.svg', alt: 'HTML & CSS' },
  { src: 'bootstrap-5-1.svg', alt: 'Bootstrap' },
  { src: 'react-native-1.svg', alt: 'React Native' },
  { src: null, alt: 'Git' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden pt-20 px-6">
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-accent/[0.12] dark:bg-accent/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/[0.08] dark:bg-violet-600/[0.06] rounded-full blur-[100px] pointer-events-none" />

        {/* Concentric rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[160, 320, 480, 640, 800].map((size, i) => (
            <div
              key={size}
              className="absolute rounded-full border border-accent"
              style={{
                width: size,
                height: size,
                opacity: 0.06 - i * 0.008,
                animation: `ring-pulse ${4 + i * 0.8}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Subtle dot cluster — top right */}
        <div className="absolute top-28 right-10 pointer-events-none hidden md:grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-accent/20 dark:bg-accent/15" />
          ))}
        </div>
        {/* Dot cluster — bottom left */}
        <div className="absolute bottom-16 left-10 pointer-events-none hidden md:grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-accent/20 dark:bg-accent/15" />
          ))}
        </div>

        {/* Corner bracket decorations */}
        <div className="absolute top-24 left-4 md:left-10 w-6 h-6 border-l-2 border-t-2 border-accent/25 pointer-events-none" />
        <div className="absolute top-24 right-4 md:right-10 w-6 h-6 border-r-2 border-t-2 border-accent/25 pointer-events-none" />
        <div className="absolute bottom-10 left-4 md:left-10 w-6 h-6 border-l-2 border-b-2 border-accent/25 pointer-events-none" />
        <div className="absolute bottom-10 right-4 md:right-10 w-6 h-6 border-r-2 border-b-2 border-accent/25 pointer-events-none" />

        <div className="flex-1 flex flex-col items-center justify-center relative z-10 text-center max-w-2xl mx-auto w-full">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/[0.06] text-accent text-xs font-mono mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </div>

          {/* Profile image */}
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl scale-110" />
            <img
              src="/profile4.jpg"
              alt="Hariharan Ravichandran"
              className="relative w-24 h-24 rounded-full object-cover border border-accent/30"
            />
          </div>

          <p className="text-gray-500 dark:text-gray-600 font-mono text-xs tracking-widest mb-2">SOFTWARE ENGINEER</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight leading-none">
            HARIHARAN
          </h1>
          <h2 className="text-base md:text-xl font-mono mb-6">
            <span className="text-gray-500">Specialising in — </span>
            <Typewriter />
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
            From idea to production — I craft web experiences that are fast,
            intuitive, and built to grow with your business.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#work"
              className="px-7 py-3 bg-accent text-black font-semibold text-sm rounded-xl hover:bg-accent/90 transition-all duration-200 hover:shadow-[0_0_24px_rgba(54,161,212,0.35)]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white text-sm rounded-xl hover:border-accent/50 hover:text-accent transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 pb-8 relative z-10">
          <span className="text-gray-400 dark:text-gray-700 text-[10px] font-mono tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-400 dark:from-gray-600 to-transparent" />
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <section id="about" className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent font-mono text-xs tracking-widest mb-2">01. about</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">Who I Am</h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-7 mb-4">
                Front-End Developer with{' '}
                <span className="text-gray-900 dark:text-white">5+ years of experience</span> specialising in
                React.js, Next.js and building scalable web apps in eCommerce and AI domains.
              </p>
              <p className="text-gray-500 text-sm leading-7 mb-8">
                Proven success delivering high-traffic platforms and boosting business KPIs by
                optimising UX and performance. Strong communicator with mentoring experience
                and a hands-on approach to innovation. Currently at{' '}
                <span className="text-accent">Skoruz Technologies</span>, Bengaluru.
              </p>

              <div className="flex gap-8 border-t border-gray-200 dark:border-white/5 pt-6">
                {stats.map(s => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-accent mb-0.5">{s.value}</p>
                    <p className="text-[11px] text-gray-400 dark:text-gray-600 font-mono">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-4">// tech stack</p>
              <div className="flex flex-wrap gap-2">
                {webStack.map(item => (
                  <div
                    key={item.alt}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.02] hover:border-accent/40 hover:bg-accent/[0.04] transition-all duration-200"
                  >
                    {item.src ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className={`h-3.5 w-auto ${item.whiteBg ? 'rounded-full bg-white p-[2px]' : ''}`}
                      />
                    ) : (
                      <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.722 4.008C13.902 2.155 11.374 1.185 8.719 1.185c-4.492 0-8.137 3.567-8.137 7.955 0 2.172.86 4.178 2.437 5.696l-.01 2.82 2.695-1.465c.88.268 1.839.41 2.82.41.32 0 .636-.016.949-.045-.168-.59-.262-1.207-.262-1.844 0-3.877 3.265-7.046 7.293-7.046.403 0 .8.034 1.19.098-.392-1.359-1.29-2.602-2.772-3.756zm-4.4 3.584c-.634 0-1.147-.513-1.147-1.147s.513-1.147 1.147-1.147 1.147.513 1.147 1.147-.513 1.147-1.147 1.147zm-5.85 0c-.634 0-1.147-.513-1.147-1.147s.513-1.147 1.147-1.147 1.147.513 1.147 1.147-.513 1.147-1.147 1.147zM22.185 15.694c0-3.443-3.29-6.243-7.34-6.243-4.054 0-7.344 2.8-7.344 6.243s3.29 6.242 7.344 6.242c.838 0 1.643-.123 2.387-.348l2.283 1.241-.008-2.39c1.303-1.148 2.678-2.85 2.678-4.745zm-9.832-.72c-.534 0-.967-.433-.967-.967s.433-.967.967-.967.967.433.967.967-.433.967-.967.967zm4.983 0c-.534 0-.967-.433-.967-.967s.433-.967.967-.967.967.433.967.967-.433.967-.967.967z"/>
                      </svg>
                    )}
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">{item.alt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
