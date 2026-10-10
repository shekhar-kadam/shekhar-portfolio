import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SelectedWork } from '@/components/SelectedWork'
import { Skills } from '@/components/Skills'
import { profile } from '@/data/profile'

const CURRENT_YEAR = new Date().getFullYear()

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <ExperienceTimeline />
        <SelectedWork />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <p>
            © {CURRENT_YEAR} {profile.name}
          </p>
          <p>Built with React, TypeScript, and Vite.</p>
        </div>
      </footer>
    </>
  )
}
