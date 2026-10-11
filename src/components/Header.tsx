import { useEffect, useState } from 'react'
import { Icon } from '@/components/Icon'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useTheme } from '@/hooks/useTheme'
import { profile } from '@/data/profile'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

// The hero ("top") is tracked too, so no nav link is highlighted while it is in view.
const SECTION_IDS = ['top', ...NAV_ITEMS.map((item) => item.id)]

export function Header() {
  const activeId = useActiveSection(SECTION_IDS)
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${menuOpen ? ' header--open' : ''}`}>
      <div className="header__pill">
        <a className="brand" href="#top" onClick={closeMenu} aria-label={`${profile.name}, back to top`}>
          <span className="brand__mark" aria-hidden="true">
            SK
          </span>
          <span className="brand__name">Shekhar</span>
        </a>

        <nav id="primary-nav" className="nav" aria-label="Primary">
          <ul className="nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav__link${activeId === item.id ? ' is-active' : ''}`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="gradient-border-button nav__resume"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <span>Resume</span>
          </a>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
            title={`Switch to ${nextTheme} theme`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <a
            className="gradient-border-button header__resume"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              Resume
              <Icon name="arrowUpRight" size={15} />
            </span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className={`menu-toggle__bars${menuOpen ? ' is-open' : ''}`} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
