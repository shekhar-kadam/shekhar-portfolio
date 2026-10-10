import { profile, stats } from '@/data/profile'
import { getYearsOfExperience } from '@/utils/getYearsOfExperience'

export function Hero() {
  const years = getYearsOfExperience()

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          {profile.role} · {profile.location}
        </p>

        <h1 id="hero-title" className="hero__title">
          Hi, I&apos;m Shekhar.
          <span className="hero__title-accent">I craft interfaces people enjoy using.</span>
        </h1>

        <p className="hero__lead">
          Frontend engineer with <strong>{years} years</strong> of experience. {profile.tagline}
        </p>

        <div className="hero__actions">
          <a className="button" href="#work">
            View my work
          </a>
          <a className="button button--ghost" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
        </div>

        <dl className="stats">
          <div className="stats__item">
            <dt>Years building for the web</dt>
            <dd>{years}+</dd>
          </div>
          {stats.map((stat) => (
            <div className="stats__item" key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
