import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Hariharan Ravichandran — Front-End Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#050510',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px 100px',
          position: 'relative',
          fontFamily: 'monospace',
        }}
      >
        {/* Dot grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Blue glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(54,161,212,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Tag line */}
        <div
          style={{
            display: 'flex',
            color: 'rgba(54,161,212,0.9)',
            fontSize: '18px',
            letterSpacing: '0.2em',
            marginBottom: '24px',
            textTransform: 'uppercase',
          }}
        >
          {'<Portfolio />'}
        </div>

        {/* Name */}
        <div
          style={{
            display: 'flex',
            color: '#f1f5f9',
            fontSize: '64px',
            fontWeight: '700',
            lineHeight: '1.1',
            marginBottom: '16px',
          }}
        >
          Hariharan Ravichandran
        </div>

        {/* Role */}
        <div
          style={{
            display: 'flex',
            color: 'rgba(241,245,249,0.55)',
            fontSize: '28px',
            fontWeight: '400',
            marginBottom: '48px',
          }}
        >
          Front-End Developer
        </div>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            width: '60px',
            height: '3px',
            background: 'rgba(54,161,212,0.7)',
            marginBottom: '40px',
            borderRadius: '2px',
          }}
        />

        {/* Stack */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          {['React.js', 'Next.js', 'TypeScript'].map((tech) => (
            <div
              key={tech}
              style={{
                display: 'flex',
                padding: '8px 20px',
                border: '1px solid rgba(54,161,212,0.3)',
                borderRadius: '4px',
                color: 'rgba(241,245,249,0.7)',
                fontSize: '16px',
                letterSpacing: '0.05em',
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '100px',
            display: 'flex',
            color: 'rgba(54,161,212,0.5)',
            fontSize: '16px',
            letterSpacing: '0.1em',
          }}
        >
          dumbcoder.vercel.app
        </div>
      </div>
    ),
    { ...size }
  )
}
