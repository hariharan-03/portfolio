const projects = [
  {
    title: 'Chups',
    type: 'Web', lang: 'Next JS',
    desc: 'Full-stack eCommerce platform with kiosk and catering integration, serving high-traffic retail operations.',
    url: 'https://chups.com/',
  },
  {
    title: 'Chupshop',
    type: 'Web', lang: 'Next JS',
    desc: 'Scalable admin shopping system with real-time order tracking and inventory management.',
    url: 'https://admin.chups.com/',
  },
  {
    title: 'Capton AI',
    type: 'Web', lang: 'React JS',
    desc: 'AI-powered analytics dashboard with role-based access, interactive charts, and data tools.',
    url: 'https://capton.com/',
  },
  {
    title: 'Chups App',
    type: 'App', lang: 'React Native',
    desc: 'Native iOS application for the Chups platform — browse, order, and track in real time.',
    url: 'https://apps.apple.com/in/app/chups/id1224124736',
  },
  {
    title: 'Kiosk',
    type: 'App', lang: 'React Native',
    desc: 'Self-service kiosk application for Chups restaurant locations, enabling rapid in-store ordering.',
    url: 'https://apps.apple.com/in/app/chups-kiosk/id6443938349',
  },
  {
    title: 'Sun Groups',
    type: 'Web', lang: 'Next JS',
    desc: 'Corporate web presence for Sun Groups with modern design and optimised performance.',
    url: 'https://www.sungroups.in/',
  },
  {
    title: 'Lasles VPN',
    type: 'Web', lang: 'Next JS',
    desc: 'Pixel-perfect landing page for a VPN product — responsive layout and smooth interactions.',
    url: 'https://dumbs-lasles-vpn.vercel.app/',
  },
  {
    title: 'Leaf Learn',
    type: 'Web', lang: 'Next JS',
    desc: 'Educational platform UI with course browsing, progress tracking, and clean content layout.',
    url: 'https://leaflearning.vercel.app/',
  },
  {
    title: 'Dot Pay',
    type: 'Web', lang: 'React JS',
    desc: 'Digital payments interface with transaction flow, balance overview, and minimal UX design.',
    url: 'https://dotpay.vercel.app/',
  },
]

export default function Work() {
  return (
    <section id="work" className="pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent font-mono text-xs tracking-widest mb-2">03. portfolio</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">Things I've Built</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col border border-gray-200 dark:border-white/[0.07] rounded-2xl p-5 bg-white dark:bg-white/[0.02] hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(54,161,212,0.10)] overflow-hidden"
            >
              {/* Faint project number watermark */}
              <span className="absolute -top-2 -right-1 text-6xl font-bold text-gray-100 dark:text-white/[0.03] font-mono select-none pointer-events-none leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Top row: badges + arrow */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex gap-1.5">
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-accent/10 text-accent border border-accent/20 font-mono">{item.type}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.05] text-gray-500 border border-gray-200 dark:border-white/[0.07] font-mono">{item.lang}</span>
                </div>
                <svg
                  className="w-4 h-4 text-gray-300 dark:text-gray-700 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-gray-900 dark:text-white text-base font-semibold mb-2 group-hover:text-accent transition-colors duration-200 relative z-10">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs leading-relaxed relative z-10 flex-1">
                {item.desc}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-accent to-accent/20 group-hover:w-full transition-all duration-500 ease-out" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
