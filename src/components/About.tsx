import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { education, profile, stats, techStrip, type Stat } from '@/data/profile'
import { useCountUp } from '@/hooks/useCountUp'
import { getYearsOfExperience } from '@/utils/getYearsOfExperience'

function StatCard({ value, suffix, label }: Stat) {
  const { ref, value: current } = useCountUp<HTMLDivElement>(value)

  return (
    <div className="stat" ref={ref}>
      <dt className="stat__label">{label}</dt>
      <dd className="stat__value">
        <span className="sr-only">
          {value}
          {suffix}
        </span>
        <span aria-hidden="true">
          {current}
          {suffix}
        </span>
      </dd>
    </div>
  )
}

export function About() {
  const allStats: Stat[] = [{ value: getYearsOfExperience(), suffix: '+', label: 'Years of experience' }, ...stats]

  return (
    <Section id="about" index="01" title="About me">
      <div className="about">
        <Reveal className="about__copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <ul className="about__facts" aria-label="Quick facts">
            <li>
              <Icon name="pin" size={16} />
              {profile.location} · Open to remote
            </li>
            <li>
              <Icon name="file" size={16} />
              {education.degree}, {education.school} ({education.year})
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <dl className="stats-grid">
            {allStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal className="marquee" delay={200}>
        <p className="sr-only">Technologies I work with: {techStrip.join(', ')}</p>
        <div className="marquee__track" aria-hidden="true">
          {[...techStrip, ...techStrip].map((tech, index) => (
            <span className="marquee__item" key={`${tech}-${index}`}>
              {tech}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
