'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  
  const fullText = '> CSE is everything'
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background cyberpunk-grid pt-20 pb-20 px-4">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Terminal header */}
        <div className="inline-block border border-green-500/50 rounded px-4 py-2 mb-6 neon-border-green">
          <p className="text-xs text-green-400 font-mono">📡 SYSTEM_ONLINE</p>
        </div>

        {/* Main title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-foreground">
            Omar
          </h1>
          
          {/* Typewriter terminal effect */}
          <div className="flex items-center justify-center gap-2 font-mono text-lg sm:text-2xl">
            <span className="neon-text-green">
              {text}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity animate-blink`}>
                _
              </span>
            </span>
          </div>

          {/* Subtitle */}
          <div className="space-y-2 pt-4">
            <p className="text-base sm:text-lg text-cyan-400 font-semibold">Red Teamer | Exploit Analyst | Multi-Platform Developer</p>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              A 13-year-old cybersecurity enthusiast exploring reverse engineering, memory manipulation, and custom scripting across multiple platforms. Breaking systems to understand them better.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <a 
            href="#skills" 
            className="group relative px-8 py-3 font-semibold rounded border border-green-500/50 text-green-400 hover:text-background transition-all duration-300 overflow-hidden neon-border-green"
          >
            <span className="relative z-10">Explore Skills</span>
            <div className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 -z-0"></div>
          </a>
          
          <a 
            href="#projects" 
            className="px-8 py-3 font-semibold rounded bg-gradient-to-r from-green-500 to-cyan-500 text-background hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#skills" className="flex flex-col items-center gap-2 text-green-400 hover:text-cyan-400 transition-colors">
          <span className="text-sm font-mono">SCROLL</span>
          <ChevronDown className="w-6 h-6 animate-glow" />
        </a>
      </div>
    </section>
  )
}
