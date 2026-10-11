import { useState, type FormEvent } from 'react'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
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

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Hello from ${name || 'your portfolio'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section
      id="contact"
      index="05"
      title="Let’s connect"
      intro="I’m open to senior frontend roles and interesting freelance projects. The fastest way to reach me is email."
    >
      <div className="contact">
        <Reveal className="contact__links">
          <div className="contact-row">
            <a className="contact-row__link" href={`mailto:${profile.email}`}>
              <span className="contact-row__icon">
                <Icon name="mail" />
              </span>
              <span>
                <span className="contact-row__label">Email</span>
                <span className="contact-row__value">{profile.email}</span>
              </span>
            </a>
            <button
              type="button"
              className="icon-button"
              onClick={copyEmail}
              aria-label={copied ? 'Email copied' : 'Copy email address'}
              title={copied ? 'Copied!' : 'Copy email'}
            >
              <Icon name={copied ? 'check' : 'copy'} size={17} />
            </button>
            <span className="sr-only" role="status" aria-live="polite">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </div>

          <a className="contact-row contact-row__link" href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <span className="contact-row__icon">
              <Icon name="linkedin" />
            </span>
            <span>
              <span className="contact-row__label">LinkedIn</span>
              <span className="contact-row__value">in/shekhar-kadam</span>
            </span>
            <Icon name="arrowUpRight" size={18} className="contact-row__arrow" />
          </a>

          <a className="contact-row contact-row__link" href={profile.links.github} target="_blank" rel="noreferrer">
            <span className="contact-row__icon">
              <Icon name="github" />
            </span>
            <span>
              <span className="contact-row__label">GitHub</span>
              <span className="contact-row__value">@shekhar-kadam</span>
            </span>
            <Icon name="arrowUpRight" size={18} className="contact-row__arrow" />
          </a>

          <a className="contact-row contact-row__link" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            <span className="contact-row__icon">
              <Icon name="file" />
            </span>
            <span>
              <span className="contact-row__label">Resume</span>
              <span className="contact-row__value">Download PDF</span>
            </span>
            <Icon name="arrowUpRight" size={18} className="contact-row__arrow" />
          </a>
        </Reveal>

        <Reveal delay={120} className="card contact-form-card">
          <h3 className="contact-form-card__title">Get in touch</h3>
          <form className="contact-form" onSubmit={onSubmit}>
            <label className="field">
              <span className="field__label">Your name</span>
              <input className="field__input" name="name" type="text" autoComplete="name" required placeholder="Jane Doe" />
            </label>
            <label className="field">
              <span className="field__label">Message</span>
              <textarea
                className="field__input field__input--area"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project or role…"
              />
            </label>
            <button type="submit" className="button button--gradient">
              Send message
              <Icon name="send" size={17} />
            </button>
            <p className="contact-form__hint">Opens your email app with the message ready to send.</p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
