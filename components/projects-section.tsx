'use client'

import { ExternalLink, Github, Zap } from 'lucide-react'

interface ProjectData {
  title: string
  description: string
  technologies: string[]
  impact: string
  link?: string
  github?: string
}

const projectsData: ProjectData[] = [
  {
    title: 'Custom Exploit Framework',
    description: 'A modular exploit development framework written in C++ and Python for crafting and testing security vulnerabilities across multiple platforms.',
    technologies: ['C++', 'Python', 'Assembly'],
    impact: 'Accelerated vulnerability testing and proof-of-concept development',
    github: '#',
  },
  {
    title: 'Memory Analysis Toolkit',
    description: 'Advanced toolkit for analyzing and manipulating process memory, with capabilities for RAM hacking and process injection on Windows and Linux.',
    technologies: ['C++', 'Assembly', 'Windows API', 'Linux Kernel'],
    impact: 'Streamlined memory manipulation and debugging workflows',
    github: '#',
  },
  {
    title: 'Reverse Engineering Lab',
    description: 'Comprehensive setup for binary analysis and reverse engineering with automated disassembly, decompilation, and vulnerability pattern recognition.',
    technologies: ['IDA Pro', 'Ghidra', 'x64dbg', 'Python'],
    impact: 'Faster malware analysis and vulnerability discovery',
    github: '#',
  },
  {
    title: 'Network Security Scanner',
    description: 'Python-based network reconnaissance and vulnerability scanner with custom payload generation and result analysis capabilities.',
    technologies: ['Python', 'Nmap', 'Metasploit'],
    impact: 'Automated network assessment and threat identification',
    github: '#',
  },
  {
    title: 'Cryptanalysis Tool Suite',
    description: 'Collection of tools for analyzing cryptographic implementations, finding weaknesses, and developing practical attacks on weak ciphers.',
    technologies: ['Python', 'Rust', 'C++'],
    impact: 'Educational cryptography analysis and vulnerability detection',
    github: '#',
  },
  {
    title: 'Secure Communication Platform',
    description: 'End-to-end encrypted messaging application demonstrating secure coding practices and modern cryptographic standards.',
    technologies: ['Rust', 'TLS', 'AES-256'],
    impact: 'Proof-of-concept for secure application development',
    link: '#',
  },
]

function ProjectCard({ title, description, technologies, impact, link, github }: ProjectData) {
  return (
    <div className="group relative p-6 rounded border border-green-500/30 bg-card hover:bg-card/80 transition-all duration-300 overflow-hidden neon-border-green hover:shadow-lg hover:shadow-green-500/20">
      {/* Accent line */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-cyan-500 group-hover:w-full transition-all duration-500"></div>

      <div className="relative z-10 space-y-4">
        {/* Title with icon */}
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-foreground group-hover:text-green-400 transition-colors">
            {title}
          </h3>
          <Zap className="w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity animate-glow" />
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed">
          {description}
        </p>

        {/* Impact */}
        <div className="pt-2 border-t border-green-500/20">
          <p className="text-xs text-cyan-400 font-semibold">
            💡 {impact}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map(tech => (
            <span key={tech} className="text-xs px-2.5 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          {github && (
            <a
              href={github}
              className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-green-400 transition-colors group/link"
              aria-label="View GitHub"
            >
              <Github className="w-4 h-4 group-hover/link:animate-glow" />
              <span>Code</span>
            </a>
          )}
          {link && (
            <a
              href={link}
              className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-400 transition-colors group/link"
              aria-label="View Project"
            >
              <ExternalLink className="w-4 h-4 group-hover/link:animate-glow" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded border border-cyan-500/30 bg-cyan-500/10">
            <p className="text-xs font-mono text-cyan-400">$ ls -la projects/</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Notable Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects demonstrating expertise in exploit development, reverse engineering, and secure software engineering.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-400 mb-4">
            Want to see more? These represent just a fraction of ongoing research and development.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all neon-border-cyan"
          >
            Get in Touch
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
