import { Section } from '@/components/Section'
import { TagList } from '@/components/TagList'
import { caseStudies } from '@/data/profile'

export function SelectedWork() {
  return (
    <Section
      id="work"
      index="03"
      title="Selected work"
      intro="Highlights from the products and client work I have shipped."
    >
      <div className="work-grid">
        {caseStudies.map((study, index) => (
          <article className="card work-card" key={study.title}>
            <p className="work-card__number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </p>
            <p className="work-card__context">{study.context}</p>
            <h3 className="work-card__title">{study.title}</h3>
            <p className="work-card__description">{study.description}</p>
            <ul className="work-card__outcomes">
              {study.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
            <TagList items={study.stack} label={`${study.title} tech stack`} />
          </article>
        ))}
      </div>
    </Section>
  )
}
