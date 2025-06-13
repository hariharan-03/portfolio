import './globals.scss'

export const metadata = {
  title: 'Dumbcoder',
  description: 'HARIHARAN RAVICHANDRAN - software developer|React js|Next js|React Native',
  openGraph: {
    title: 'Dumbcoder',
    description: 'A passionate web developer having an experience of 3+ years in building Web applications with JavaScript / React js / Next js / HTML / Bootstrap.',
    url: 'https://dumbcoder.vercel.app',
    siteName: 'dumbcoder.vercel.app',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-100">{children}</body>
    </html>
  )
}
