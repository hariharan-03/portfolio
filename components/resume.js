const experience = [
  {
    period: 'June 2021 — Present',
    role: 'Software Engineer',
    company: 'Skoruz Technologies · Bengaluru, KA',
    current: true,
    points: [
      'Delivered 7+ web applications end-to-end using React.js and Next.js — contributing to ~50% growth in conversions.',
      'Built eCommerce, kiosk, and AI analytics platforms serving high-traffic production environments.',
      'Mentored 5 internal staff and drove performance optimisation across multiple product lines.',
    ],
    projects: ['Chups Platform – eCommerce + Kiosk integration', 'Chupshop – Scalable shopping with real-time tracking', 'Eesa AI, Capton AI – AI analytics dashboards with role-based charts'],
  },
  {
    period: 'October 2019 — December 2020',
    role: 'Software Engineer',
    company: 'Skoruz Technologies · Bengaluru, KA',
    current: false,
    points: [],
    projects: ['Chups – Chups + Chupshop integration'],
  },
]

const education = [
  {
    period: 'Graduated 2018',
    degree: 'B.Sc. Computer Science',
    institution: 'Sengunthar Arts and Science',
    meta: 'CGPA: 7.6 / 10',
  },
]

export default function Resume() {
  return (
    <section id="experience" className="pb-16 px-6 relative">
      <div className="absolute top-1/2 right-0 w-[350px] h-[350px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <p className="text-accent font-mono text-xs tracking-widest mb-2">02. experience</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">Where I've Worked</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Timeline */}
          <div>
            <p className="text-xs font-mono text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-6">Career</p>
            <div className="relative">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-10 pb-10 last:pb-0">
                  {i < experience.length - 1 && (
                    <div className="absolute left-3 top-6 bottom-0 w-px bg-gradient-to-b from-accent/30 to-transparent" />
                  )}
                  <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    exp.current ? 'border-accent bg-accent/15' : 'border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900'
                  }`}>
                    {exp.current && <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />}
                  </div>

                  <p className="text-xs font-mono text-accent mb-1">{exp.period}</p>
                  <h4 className="text-gray-900 dark:text-white font-semibold text-base mb-0.5">{exp.role}</h4>
                  <p className="text-gray-500 text-sm mb-3">{exp.company}</p>

                  {exp.points.length > 0 && (
                    <ul className="space-y-1.5 mb-3">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 text-gray-500 dark:text-gray-500 text-sm">
                          <span className="text-accent mt-0.5 shrink-0">›</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="pl-1">
                    <p className="text-[10px] font-mono text-gray-400 dark:text-gray-700 uppercase tracking-widest mb-1.5">Key Projects</p>
                    <div className="space-y-1">
                      {exp.projects.map((p, j) => (
                        <p key={j} className="text-xs text-gray-400 dark:text-gray-600 flex gap-1.5">
                          <span className="text-accent/50">▸</span>{p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education + download */}
          <div>
            <p className="text-xs font-mono text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-6">Education</p>
            {education.map((edu, i) => (
              <div
                key={i}
                className="border border-gray-200 dark:border-white/[0.07] rounded-2xl p-6 bg-white dark:bg-white/[0.02] hover:border-accent/30 transition-colors duration-300 mb-4"
              >
                <p className="text-xs font-mono text-accent mb-3">{edu.period}</p>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-1">{edu.degree}</h4>
                <p className="text-gray-500 text-sm mb-3">{edu.institution}</p>
                <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-accent/10 text-accent border border-accent/20">
                  {edu.meta}
                </span>
              </div>
            ))}

            <a
              href="https://drive.google.com/file/d/1-WF3bCxfWRPKoj086q5M8IbC7R8ubN7C/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-accent/20 rounded-2xl p-5 bg-accent/[0.04] hover:border-accent/50 hover:bg-accent/[0.07] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-900 dark:text-white text-sm font-medium">Full Resume</p>
                <p className="text-gray-400 dark:text-gray-600 text-xs font-mono">hariharan_ravichandran_resume.pdf</p>
              </div>
              <svg className="w-4 h-4 text-gray-400 dark:text-gray-600 group-hover:text-accent ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
