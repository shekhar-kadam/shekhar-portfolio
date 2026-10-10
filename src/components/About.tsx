import { Section } from '@/components/Section'
import { education, profile } from '@/data/profile'

export function About() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="about">
        <div className="about__copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="card about__card" aria-label="Quick facts">
          <dl className="facts">
            <div>
              <dt>Currently</dt>
              <dd>Senior Software Engineer, Bold Technologies</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>React, Next.js, TypeScript, web performance, SEO</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>
                {education.degree}, {education.school} ({education.year})
              </dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{profile.location} · Open to remote</dd>
            </div>
          </dl>
        </aside>
      </div>
    </Section>
  )
}
