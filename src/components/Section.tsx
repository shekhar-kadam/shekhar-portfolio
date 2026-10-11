import type { ReactNode } from 'react'
import { Reveal } from '@/components/Reveal'

type SectionProps = {
  id: string
  index: string
  title: string
  intro?: string
  className?: string
  children: ReactNode
}

export function Section({ id, index, title, intro, className, children }: SectionProps) {
  const headingId = `${id}-title`

  return (
    <section className={`section${className ? ` ${className}` : ''}`} id={id} aria-labelledby={headingId}>
      <div className="container">
        <Reveal as="header" className="section__header">
          <div className="section__heading-row">
            <p className="section__index" aria-hidden="true">
              {index}
            </p>
            <h2 id={headingId} className="section__title">
              {title}
            </h2>
            <span className="section__line" aria-hidden="true" />
          </div>
          {intro ? <p className="section__intro">{intro}</p> : null}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
