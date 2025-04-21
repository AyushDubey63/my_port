import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Contact from "@/components/sections/contact"
import { Toaster } from "@/components/ui/toaster"
import ScrollIndicator from "@/components/scroll-indicator"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ScrollIndicator />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Toaster />
    </main>
  )
}
