import { Section } from '@/components/Section'
import { TagList } from '@/components/TagList'
import { experience } from '@/data/profile'
import { getYearsOfExperience } from '@/utils/getYearsOfExperience'

export function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      intro={`${getYearsOfExperience()} years across product companies, agencies, and enterprise teams.`}
    >
      <ol className="timeline">
        {experience.map((job) => (
          <li className="timeline__item" key={`${job.company}-${job.start}`}>
            <div className="timeline__meta">
              <p className="timeline__dates">
                {job.start} — {job.end}
              </p>
              <p className="timeline__location">{job.location}</p>
            </div>

            <article className="card timeline__card">
              <h3 className="timeline__role">
                {job.role} <span className="timeline__company">· {job.company}</span>
              </h3>
              <p className="timeline__summary">{job.summary}</p>
              <ul className="timeline__highlights">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <TagList items={job.stack} label={`${job.company} tech stack`} />
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
