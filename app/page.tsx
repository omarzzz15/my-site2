import { NavHeader } from '@/components/nav-header'
import { HeroSection } from '@/components/hero-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'

export default function Page() {
  return (
    <main className="w-full bg-background text-foreground">
      <NavHeader />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
