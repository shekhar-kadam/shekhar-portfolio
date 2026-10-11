import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { skillGroups } from '@/data/profile'

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills" intro="The tools I reach for to ship reliable frontends.">
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 80} className="skills-grid__cell">
            <div className="card skills-card">
              <p className="skills-card__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="skills-card__title">{group.title}</h3>
              <ul className="skills-card__list">
                {group.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
