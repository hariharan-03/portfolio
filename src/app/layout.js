import './globals.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL('https://dumbcoder.vercel.app'),
  title: 'Hariharan Ravichandran — Front-End Developer',
  description: 'HARIHARAN RAVICHANDRAN — Front-End Developer with 5+ years specialising in React.js and Next.js',
  openGraph: {
    title: 'Hariharan Ravichandran — Front-End Developer',
    description: 'Front-End Developer with 5+ years of experience building scalable web apps in eCommerce and AI domains with React.js & Next.js.',
    url: 'https://dumbcoder.vercel.app',
    siteName: 'dumbcoder.vercel.app',
    images: [{ url: '/opengraph-image.png', width: 800, height: 600 }],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.remove('dark');else document.documentElement.classList.add('dark');}())` }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
