import { Section } from '@/components/Section'
import { skillGroups } from '@/data/profile'

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills" intro="The tools I reach for to ship reliable frontends.">
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="card skills-card" key={group.title}>
            <h3 className="skills-card__title">{group.title}</h3>
            <ul className="skills-card__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
