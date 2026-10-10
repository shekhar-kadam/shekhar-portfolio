import { useState } from 'react'
import { Section } from '@/components/Section'
import { profile } from '@/data/profile'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <Section id="contact" index="05" title="Let’s work together">
      <div className="card contact">
        <p className="contact__lead">
          I&apos;m open to senior frontend roles and interesting freelance projects. The fastest way to reach me is
          email.
        </p>

        <div className="contact__email-row">
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <button type="button" className="button button--ghost button--small" onClick={copyEmail}>
            {copied ? 'Copied!' : 'Copy email'}
          </button>
          <span className="sr-only" role="status" aria-live="polite">
            {copied ? 'Email address copied to clipboard' : ''}
          </span>
        </div>

        <ul className="contact__links">
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
          <li>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Download resume (PDF)
            </a>
          </li>
        </ul>
      </div>
    </Section>
  )
}
