"use client"
import { useState } from 'react'

const WEB3FORMS_KEY = '7dc1c02c-5010-42a9-b0b9-7286e0245293'

const contactInfo = [
  {
    icon: '/phone.png',
    label: 'Phone',
    value: '+91 9865007511',
    href: 'tel:+919865007511',
  },
  {
    icon: '/email.png',
    label: 'Email',
    value: 'rhariharan461@gmail.com',
    href: 'mailto:rhariharan461@gmail.com',
  },
  {
    icon: '/location.png',
    label: 'Location',
    value: 'BTM 1st Stage, Bengaluru, Karnataka — 560068',
    href: null,
  },
  {
    icon: null,
    label: 'LinkedIn',
    value: 'linkedin.com/in/hari-haran-1a307015a',
    href: 'https://linkedin.com/in/hari-haran-1a307015a',
  },
]

const inputClass =
  'w-full bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] text-gray-900 dark:text-white text-sm font-mono rounded-xl px-4 py-3 placeholder-gray-400 dark:placeholder-gray-700 focus:outline-none focus:border-accent/50 focus:bg-accent/[0.03] transition-all duration-200'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio contact from ${form.name}`,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-4 sm:px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <p className="text-accent font-mono text-xs tracking-widest mb-2">04. contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
        <p className="text-gray-500 text-sm mb-10 max-w-md">
          Open to new projects, collaborations and opportunities in the tech world.
          Drop me a message and I'll get back to you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 w-full min-w-0">
          {/* Contact info */}
          <div className="space-y-3 min-w-0">
            {contactInfo.map(item => {
              const inner = (
                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.02] group-hover:border-accent/30 transition-all duration-200 w-full min-w-0 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center shrink-0">
                    {item.icon ? (
                      <img src={item.icon} className="w-5 h-5 object-contain" alt={item.label} />
                    ) : (
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.73a1.77 1.77 0 110-3.54 1.77 1.77 0 010 3.54zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.77C14.4 7.5 20 7.35 20 12.72V19z"/>
                      </svg>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-gray-600 mb-0.5">{item.label}</p>
                    <p className="text-gray-900 dark:text-white text-sm group-hover:text-accent transition-colors duration-200 truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              )

              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="group block w-full min-w-0">
                  {inner}
                </a>
              ) : (
                <div key={item.label} className="w-full min-w-0">{inner}</div>
              )
            })}

            {/* Availability note */}
            <div className="mt-2 p-4 rounded-xl border border-accent/15 bg-accent/[0.04]">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <p className="text-accent text-xs font-mono">Currently Available</p>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                Open to full-time roles, freelance projects, partnerships and mentorship opportunities.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 min-w-0">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              className={`${inputClass} resize-none`}
            />

            {/* Status feedback */}
            {status === 'success' && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-green-500/20 bg-green-500/[0.06] text-green-400 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-red-500/20 bg-red-500/[0.06] text-red-400 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 bg-accent text-black font-semibold text-sm rounded-xl hover:bg-accent/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(54,161,212,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs font-mono">
            &lt;HRI /&gt; — Hariharan Ravichandran
          </p>
          {/* <p className="text-gray-700 text-xs font-mono">
            Built with Next.js & Tailwind CSS
          </p> */}
        </div>
      </div>
    </section>
  )
}
