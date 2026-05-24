'use client'

import { Shield, Code, Cpu, Lock, Zap, Terminal } from 'lucide-react'

interface SkillCard {
  icon: React.ReactNode
  title: string
  description: string
  skills: string[]
  color: 'green' | 'cyan'
}

const skillsData: SkillCard[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Red Teaming',
    description: 'Offensive security techniques for identifying vulnerabilities',
    skills: ['Penetration Testing', 'Exploit Development', 'Social Engineering', 'Network Reconnaissance'],
    color: 'cyan',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Reverse Engineering',
    description: 'Analyzing software to understand functionality and behavior',
    skills: ['Binary Analysis', 'Disassembly', 'Code Decompilation', 'Malware Analysis'],
    color: 'green',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Memory Manipulation',
    description: 'RAM hacking and process injection techniques',
    skills: ['Process Injection', 'Shellcode Development', 'Memory Patching', 'DLL Injection'],
    color: 'cyan',
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Custom Scripting',
    description: 'Crafting efficient tools and exploits',
    skills: ['C++', 'Python', 'Rust', 'Assembly'],
    color: 'green',
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Secure Development',
    description: 'Building applications with security-first mindset',
    skills: ['Cryptography', 'Secure Coding', 'Input Validation', 'Threat Modeling'],
    color: 'cyan',
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: 'Multi-Platform Dev',
    description: 'Cross-platform application development',
    skills: ['Windows', 'Linux', 'macOS', 'Embedded Systems'],
    color: 'green',
  },
]

function SkillCard({ icon, title, description, skills, color }: SkillCard) {
  const textColor = color === 'green' ? 'text-green-400' : 'text-cyan-400'
  const borderClass = color === 'green' ? 'border-green-500/30' : 'border-cyan-500/30'
  const glowClass = color === 'green' ? 'group-hover:shadow-green-500/20' : 'group-hover:shadow-cyan-500/20'
  const neonClass = color === 'green' ? 'neon-border-green' : 'neon-border-cyan'
  const iconBorder = color === 'green' ? 'border-green-500/50' : 'border-cyan-500/50'
  const skillBg = color === 'green' ? 'bg-green-500/10' : 'bg-cyan-500/10'
  const skillBorder = color === 'green' ? 'border-green-500/30' : 'border-cyan-500/30'

  return (
    <div className={`group relative p-6 rounded border ${borderClass} bg-card hover:bg-card/80 transition-all duration-300 overflow-hidden ${neonClass} ${glowClass} hover:shadow-lg`}>
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 transition-all duration-300 -z-0 ${color === 'green' ? 'group-hover:from-green-500/5 group-hover:to-green-500/10' : 'group-hover:from-cyan-500/5 group-hover:to-cyan-500/10'}`}></div>

      <div className="relative z-10 space-y-4">
        {/* Icon */}
        <div className={`w-12 h-12 rounded border ${iconBorder} flex items-center justify-center group-hover:neon-glow transition-all ${textColor}`}>
          {icon}
        </div>

        {/* Title and description */}
        <div>
          <h3 className="text-lg font-bold text-foreground group-hover:animate-glow transition-all">{title}</h3>
          <p className="text-sm text-slate-400 mt-1">{description}</p>
        </div>

        {/* Skills list */}
        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <span key={skill} className={`text-xs px-3 py-1 rounded-full border ${skillBorder} ${skillBg} ${textColor}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded border border-green-500/30 bg-green-500/10">
            <p className="text-xs font-mono text-green-400">$ whoami</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Expertise & Skillset
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Core competencies spanning cybersecurity, reverse engineering, and multi-platform development. Constantly evolving and exploring new attack vectors.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        {/* Team leader note */}
        <div className="mt-12 p-6 rounded border border-cyan-500/50 bg-cyan-500/5 neon-border-cyan">
          <p className="text-center">
            <span className="text-cyan-400 font-semibold">Team Leader of CSE</span>
            <span className="text-slate-400 block mt-2">
              Leading the Cyber Security in Everything initiative, fostering a community of young security researchers and developers dedicated to protecting the digital landscape.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
