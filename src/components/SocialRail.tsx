import { Icon } from '@/components/Icon'
import { profile } from '@/data/profile'

export function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Social links">
      <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <Icon name="github" />
      </a>
      <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <Icon name="linkedin" />
      </a>
      <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}>
        <Icon name="mail" />
      </a>
      <span className="social-rail__line" aria-hidden="true" />
    </aside>
  )
}
