import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SelectedWork } from '@/components/SelectedWork'
import { Skills } from '@/components/Skills'
import { SocialRail } from '@/components/SocialRail'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <SocialRail />
      <main id="main">
        <Hero />
        <About />
        <ExperienceTimeline />
        <SelectedWork />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
