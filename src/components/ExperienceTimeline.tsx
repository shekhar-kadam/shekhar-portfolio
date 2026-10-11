import { useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { TagList } from '@/components/TagList'
import { experience } from '@/data/profile'
import { getYearsOfExperience } from '@/utils/getYearsOfExperience'

export function ExperienceTimeline() {
  const [active, setActive] = useState(0)
  const [indicator, setIndicator] = useState({ offset: 0, size: 0 })
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const job = experience[active]!

  useLayoutEffect(() => {
    const measure = () => {
      const tab = tabRefs.current[active]
      if (!tab) return
      const horizontal = window.matchMedia('(max-width: 840px)').matches
      setIndicator(
        horizontal
          ? { offset: tab.offsetLeft, size: tab.offsetWidth }
          : { offset: tab.offsetTop, size: tab.offsetHeight },
      )
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }
    let next: number | null = null
    if (event.key in keys) next = (active + keys[event.key]! + experience.length) % experience.length
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = experience.length - 1
    if (next === null) return
    event.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <Section
      id="experience"
      index="02"
      title="Work timeline"
      intro={`${getYearsOfExperience()} years across product companies, agencies, and enterprise teams.`}
    >
      <Reveal className="experience">
        <div
          className="experience__tabs"
          role="tablist"
          aria-label="Companies"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          style={{ '--indicator-offset': `${indicator.offset}px`, '--indicator-size': `${indicator.size}px` } as CSSProperties}
        >
          <span className="experience__indicator" aria-hidden="true" />
          {experience.map((item, index) => (
            <button
              key={`${item.company}-${item.start}`}
              ref={(el) => {
                tabRefs.current[index] = el
              }}
              type="button"
              role="tab"
              id={`exp-tab-${index}`}
              aria-selected={active === index}
              aria-controls="exp-panel"
              tabIndex={active === index ? 0 : -1}
              className={`experience__tab${active === index ? ' is-active' : ''}`}
              onClick={() => setActive(index)}
            >
              <span className="experience__tab-company">{item.company}</span>
              <span className="experience__tab-dates">
                {item.start} — {item.end}
              </span>
            </button>
          ))}
        </div>

        <div
          className="experience__panel"
          role="tabpanel"
          id="exp-panel"
          aria-labelledby={`exp-tab-${active}`}
          tabIndex={0}
          key={active}
        >
          <div className="experience__head">
            <h3 className="experience__role">
              {job.role} <span className="experience__company">@ {job.company}</span>
            </h3>
            <span className="pill">
              {job.start} – {job.end}
            </span>
          </div>
          <p className="experience__location">{job.location}</p>
          <p className="experience__summary">{job.summary}</p>
          <ul className="bullet-list">
            {job.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <TagList items={job.stack} label={`${job.company} tech stack`} />
        </div>
      </Reveal>
    </Section>
  )
}
