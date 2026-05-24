'use client'

import { Mail, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react'
import { useState } from 'react'

interface SocialLink {
  icon: React.ReactNode
  label: string
  href: string
  color: 'green' | 'cyan'
}

const socialLinks: SocialLink[] = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    href: 'mailto:omar@example.com',
    color: 'green',
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    href: 'https://github.com',
    color: 'cyan',
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    label: 'Twitter',
    href: 'https://twitter.com',
    color: 'green',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    color: 'cyan',
  },
]

function SocialButton({ icon, label, href, color }: SocialLink) {
  const bgColor = color === 'green' ? 'hover:bg-green-500/20' : 'hover:bg-cyan-500/20'
  const textColor = color === 'green' ? 'text-green-400 hover:text-green-300' : 'text-cyan-400 hover:text-cyan-300'
  const borderColor = color === 'green' ? 'border-green-500/30 hover:border-green-500/50' : 'border-cyan-500/30 hover:border-cyan-500/50'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group p-3 rounded border ${borderColor} ${bgColor} ${textColor} transition-all duration-300 flex items-center justify-center hover:shadow-lg`}
      aria-label={label}
      title={label}
    >
      {icon}
    </a>
  )
}

export function ContactSection() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple form handling - in production, send to backend
    console.log('Form submitted:', { email, message })
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
      setMessage('')
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded border border-cyan-500/30 bg-cyan-500/10">
            <p className="text-xs font-mono text-cyan-400">$ connect --secure</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Interested in collaboration, research partnerships, or just want to talk about cybersecurity? Reach out!
          </p>
        </div>

        {/* Contact form and social */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Form */}
          <div className="p-6 rounded border border-green-500/30 bg-card neon-border-green hover:shadow-lg hover:shadow-green-500/10 transition-all">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-green-400">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded bg-background border border-green-500/30 text-foreground placeholder-slate-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message here..."
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-background border border-green-500/30 text-foreground placeholder-slate-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 rounded bg-gradient-to-r from-green-500 to-cyan-500 text-background font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all"
              >
                {submitted ? '✓ Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Social and info */}
          <div className="space-y-6">
            {/* Quick contact */}
            <div className="p-6 rounded border border-cyan-500/30 bg-card neon-border-cyan hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-cyan-400">Connect</h3>
              <p className="text-sm text-slate-400 mb-4">
                Available for collaboration, questions, and security discussions:
              </p>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((link, index) => (
                  <SocialButton key={index} {...link} />
                ))}
              </div>
            </div>

            {/* Info box */}
            <div className="p-4 rounded border border-green-500/30 bg-green-500/5 space-y-2">
              <p className="text-sm text-slate-300">
                <span className="text-green-400 font-semibold">Status:</span> Open to collaboration
              </p>
              <p className="text-sm text-slate-300">
                <span className="text-green-400 font-semibold">Focus:</span> Security Research & Development
              </p>
              <p className="text-sm text-slate-300">
                <span className="text-green-400 font-semibold">Response:</span> Within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-green-500/20 text-center space-y-4">
          <p className="text-slate-400 text-sm">
            Built with security-first principles. Protected by ethical standards.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
            <span>CSE © 2024</span>
            <span>•</span>
            <span className="neon-text-green font-mono">$ whoami = Omar</span>
            <span>•</span>
            <span>Cybersecurity Everything</span>
          </div>
          <p className="text-xs text-slate-600 pt-4 font-mono">
            All work is ethical. Vulnerabilities disclosed responsibly.
          </p>
        </div>
      </div>
    </section>
  )
}
