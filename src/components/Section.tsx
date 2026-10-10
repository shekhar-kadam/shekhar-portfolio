import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  index: string
  title: string
  intro?: string
  children: ReactNode
}

export function Section({ id, index, title, intro, children }: SectionProps) {
  const headingId = `${id}-title`

  return (
    <section className="section" id={id} aria-labelledby={headingId}>
      <div className="container">
        <header className="section__header">
          <p className="section__index" aria-hidden="true">
            {index}
          </p>
          <h2 id={headingId} className="section__title">
            {title}
          </h2>
          {intro ? <p className="section__intro">{intro}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
