'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function NavHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-green-500/20 z-50 animate-slide-in-down">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded border-2 border-green-500 flex items-center justify-center group-hover:neon-border-green transition-all">
            <span className="text-sm font-bold text-green-400 group-hover:animate-glow">O</span>
          </div>
          <span className="text-lg font-bold text-foreground hidden sm:inline">Omar</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-slate-300 hover:text-green-400 transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded border border-green-500/30 text-green-400 hover:neon-border-green transition-all"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-green-500/20 bg-background/95 backdrop-blur-sm animate-slide-in-down">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded text-sm font-medium text-slate-300 hover:bg-green-500/10 hover:text-green-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
