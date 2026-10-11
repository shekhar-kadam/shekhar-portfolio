import { Icon } from '@/components/Icon'
import { ParticleField } from '@/components/ParticleField'
import { profile } from '@/data/profile'
import { useTypewriter } from '@/hooks/useTypewriter'
import { getYearsOfExperience } from '@/utils/getYearsOfExperience'

const NAME = [profile.name]
const ROLES = ['Senior Frontend Engineer.', 'React & Next.js specialist.', 'Performance & SEO nerd.', 'UI craftsman.']

export function Hero() {
  const years = getYearsOfExperience()
  const typedName = useTypewriter(NAME, { typeSpeed: 90, loop: false })
  const typedRole = useTypewriter(ROLES)

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <ParticleField />
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Available for senior frontend roles
          </p>

          <p className="hero__hello">Hello, I&apos;m</p>
          <h1 id="hero-title" className="hero__title">
            <span className="sr-only">{profile.name}</span>
            <span aria-hidden="true">
              {typedName}
              <span className="caret" />
            </span>
          </h1>

          <p className="hero__role">
            <span className="sr-only">{profile.role}</span>
            <span aria-hidden="true">
              <span className="gradient-text">{typedRole}</span>
              <span className="caret caret--thin" />
            </span>
          </p>

          <p className="hero__lead">
            {years}+ years building for the web. {profile.tagline}
          </p>

          <div className="hero__actions">
            <a className="button button--gradient" href="#contact">
              Let&apos;s connect
              <Icon name="arrowRight" size={18} />
            </a>
            <a className="button button--outline" href="#work">
              View my work
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="code-card">
            <div className="code-card__bar">
              <span className="code-card__dot" />
              <span className="code-card__dot" />
              <span className="code-card__dot" />
              <span className="code-card__file">shekhar.ts</span>
            </div>
            <pre className="code-card__body">
              <code>
                <span className="tok-key">const</span> <span className="tok-var">engineer</span> = {'{'}
                {'\n'}  name: <span className="tok-str">&apos;{profile.name}&apos;</span>,
                {'\n'}  role: <span className="tok-str">&apos;{profile.role}&apos;</span>,
                {'\n'}  experience: <span className="tok-num">{years}</span>,
                {'\n'}  stack: [<span className="tok-str">&apos;React&apos;</span>, <span className="tok-str">&apos;Next.js&apos;</span>, <span className="tok-str">&apos;TypeScript&apos;</span>],
                {'\n'}  loves: [<span className="tok-str">&apos;performance&apos;</span>, <span className="tok-str">&apos;a11y&apos;</span>, <span className="tok-str">&apos;SEO&apos;</span>],
                {'\n'}  openToWork: <span className="tok-key">true</span>,
                {'\n'}{'}'}
              </code>
            </pre>
          </div>
          <div className="floating-chip floating-chip--one">
            <strong>30+</strong> sites shipped
          </div>
          <div className="floating-chip floating-chip--two">
            <strong>+40%</strong> search visibility
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to About section">
        <span className="scroll-cue__mouse" aria-hidden="true">
          <span className="scroll-cue__wheel" />
        </span>
      </a>
    </section>
  )
}
