import { Icon } from '@/components/Icon'
import { profile } from '@/data/profile'

const CURRENT_YEAR = new Date().getFullYear()

const QUICK_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta">
          <h2 className="footer__headline">
            Let&apos;s build something <span className="gradient-text">great together.</span>
          </h2>
          <p className="footer__sub">Got a project in mind or just want to say hi? My inbox is always open.</p>
          <a className="button button--gradient" href={`mailto:${profile.email}`}>
            Say hello
            <Icon name="arrowRight" size={18} />
          </a>
        </div>

        <div className="footer__grid">
          <div>
            <p className="footer__brand">
              <span className="brand__mark" aria-hidden="true">
                SK
              </span>
              {profile.name}
            </p>
            <p className="footer__tagline">Crafting fast, accessible interfaces people enjoy using.</p>
          </div>

          <nav aria-label="Footer">
            <p className="footer__heading">Quick links</p>
            <ul className="footer__list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="footer__heading">Elsewhere</p>
            <ul className="footer__list">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {CURRENT_YEAR} {profile.name}. Based in India.
          </p>
          <p>Built with React, TypeScript, and Vite.</p>
        </div>
      </div>
    </footer>
  )
}
