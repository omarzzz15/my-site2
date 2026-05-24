'use client'

import { Award, Lightbulb, Heart, Target } from 'lucide-react'

interface StatItem {
  icon: React.ReactNode
  label: string
  value: string
}

const stats: StatItem[] = [
  {
    icon: <Target className="w-6 h-6" />,
    label: 'Years in Security',
    value: '3+',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    label: 'Projects Completed',
    value: '20+',
  },
  {
    icon: <Award className="w-6 h-6" />,
    label: 'Vulnerabilities Found',
    value: '50+',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    label: 'Passion Level',
    value: '∞',
  },
]

const achievements = [
  'Self-taught cybersecurity researcher starting at age 10',
  'Founded and lead the Cyber Security in Everything (CSE) initiative',
  'Expertise across multiple programming languages and platforms',
  'Active contributor to security research and education',
  'Proven ability to identify and exploit complex vulnerabilities',
  'Focused on ethical hacking and responsible disclosure',
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded border border-green-500/30 bg-green-500/10">
            <p className="text-xs font-mono text-green-400">$ cat bio.txt</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Story */}
          <div className="space-y-6">
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-slate-300 leading-relaxed">
                I'm a 13-year-old from the digital frontier with an insatiable curiosity about how systems work—and how to break them ethically. My journey into cybersecurity began at age 10, driven by the desire to understand the intricate mechanisms that power our connected world.
              </p>

              <p className="text-slate-300 leading-relaxed">
                What started as a hobby has evolved into a serious research endeavor. I've dedicated myself to mastering reverse engineering, exploit development, and memory manipulation techniques. Every vulnerability discovered is a lesson in defensive security.
              </p>

              <p className="text-slate-300 leading-relaxed">
                As the founder and team leader of CSE (Cyber Security in Everything), I&apos;m building a community of young security enthusiasts committed to pushing the boundaries of what we know about system security. We believe in breaking systems to understand them, and in the power of knowledge-sharing within the community.
              </p>

              <p className="text-slate-300 leading-relaxed">
                I&apos;m not just about finding vulnerabilities—I&apos;m about understanding the why, the how, and the implications. This is why CSE exists: because cybersecurity is everything in our digital age.
              </p>
            </div>

            {/* Motto */}
            <div className="p-6 rounded border-2 border-green-500/50 bg-green-500/5 neon-border-green mt-8">
              <p className="text-center font-bold text-2xl neon-text-green">
                CSE is everything
              </p>
              <p className="text-center text-sm text-slate-400 mt-2">
                A philosophy that cybersecurity knowledge and principles are foundational to everything we do.
              </p>
            </div>
          </div>

          {/* Right column - Stats and achievements */}
          <div className="space-y-8">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded border border-cyan-500/30 bg-card hover:bg-card/80 transition-all neon-border-cyan hover:shadow-lg hover:shadow-cyan-500/20 group"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-10 h-10 rounded border border-cyan-500/50 flex items-center justify-center text-cyan-400 group-hover:animate-glow">
                      {stat.icon}
                    </div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-slate-400">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h3>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex gap-3 items-start p-3 rounded border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-colors">
                    <div className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-sm text-slate-300">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core values */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 pt-12 border-t border-green-500/20">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-400 mb-2">Learn</p>
            <p className="text-sm text-slate-400">Understanding systems through rigorous study and hands-on experimentation</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-cyan-400 mb-2">Build</p>
            <p className="text-sm text-slate-400">Creating tools and frameworks that advance security research and education</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-400 mb-2">Share</p>
            <p className="text-sm text-slate-400">Contributing knowledge to the security community responsibly and ethically</p>
          </div>
        </div>
      </div>
    </section>
  )
}
