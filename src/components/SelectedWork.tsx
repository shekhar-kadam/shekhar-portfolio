import type { PointerEvent } from 'react'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { TagList } from '@/components/TagList'
import { caseStudies } from '@/data/profile'

const trackPointer = (event: PointerEvent<HTMLElement>) => {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
}

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
          <Reveal key={study.title} delay={index * 100} className="work-grid__cell">
            <article className="card work-card" onPointerMove={trackPointer}>
              <div className="work-card__top">
                <p className="work-card__context">{study.context}</p>
                <p className="work-card__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </p>
              </div>
              <h3 className="work-card__title">{study.title}</h3>
              <p className="work-card__description">{study.description}</p>
              <ul className="work-card__outcomes">
                {study.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <TagList items={study.stack} label={`${study.title} tech stack`} />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
