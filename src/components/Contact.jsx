import { useState } from 'react'
import { profile } from '../data/content'

// ── Replace this with your Formspree endpoint
// Get it free at formspree.io → New Form → copy the URL
const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.3a16 16 0 0 0 5.72 5.72l1.98-1.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const CHANNELS = [
  { icon: <EmailIcon />,    label: 'Email',    value: profile.email,                  href: `mailto:${profile.email}` },
  { icon: <LinkedinIcon />, label: 'LinkedIn', value: 'linkedin.com/in/nayeem-hasan', href: profile.linkedin, target: '_blank' },
  { icon: <GithubIcon />,   label: 'GitHub',   value: 'github.com/x-slasher',         href: profile.github,   target: '_blank' },
  { icon: <PhoneIcon />,    label: 'Phone',    value: profile.phone,                  href: `tel:${profile.phone}` },
]

export default function Contact() {
  const [form,     setForm]     = useState({ name: '', email: '', message: '' })
  const [errors,   setErrors]   = useState({})
  const [sending,  setSending]  = useState(false)
  const [sent,     setSent]     = useState(false)
  const [apiError, setApiError] = useState('')

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = true
    if (!form.email.trim())   e.email   = true
    if (!form.message.trim()) e.message = true
    return e
  }

  const handleChange = (field) => (e) => {
    setForm(v   => ({ ...v, [field]: e.target.value }))
    setErrors(v => ({ ...v, [field]: false }))
    setApiError('')
  }

  const handleSubmit = async () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }

    setSending(true)
    setApiError('')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name:    form.name.trim(),
          email:   form.email.trim(),
          message: form.message.trim(),
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setApiError(data?.errors?.[0]?.message || 'Something went wrong. Please try again.')
        return
      }

      setSent(true)

    } catch {
      setApiError(`Could not send message. Email me directly at ${profile.email}`)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section-divider">
      <div className="section-header reveal">
        <span className="section-num">05.</span>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-line" />
      </div>

      <div className="contact-grid">

        {/* Left */}
        <div className="reveal">
          <h3 className="contact-heading">
            Let&apos;s build<br />something <span style={{ color: 'var(--green)' }}>great</span>.
          </h3>
          <p className="contact-sub">
            I&apos;m currently open to new opportunities — full-time roles, contract projects,
            or research collaborations. If you have a challenging problem in distributed
            systems, healthcare tech, or high-scale backend engineering, I&apos;d love to hear
            from you.
          </p>
          <div className="contact-channels">
            {CHANNELS.map(ch => (
              <a key={ch.label} href={ch.href} className="contact-channel"
                 target={ch.target} rel={ch.target ? 'noreferrer' : undefined}>
                <div className="channel-icon">{ch.icon}</div>
                <div className="channel-info">
                  <div className="channel-label">{ch.label}</div>
                  <div className="channel-value">{ch.value}</div>
                </div>
                <span className="channel-arrow">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="reveal reveal-delay-2">
          <div className="contact-form">
            <div className="form-bar">
              <div className="term-dot" style={{ background: '#ff5f57', width: 9, height: 9 }} />
              <div className="term-dot" style={{ background: '#febc2e', width: 9, height: 9 }} />
              <div className="term-dot" style={{ background: '#28c840', width: 9, height: 9 }} />
              <span className="form-bar-title">send_message.sh</span>
            </div>

            {!sent ? (
              <div className="form-body">
                <div className="form-group">
                  <label className="form-label">// your name</label>
                  <input type="text" className="form-input" placeholder="John Doe"
                    value={form.name} onChange={handleChange('name')}
                    style={errors.name ? { borderColor: 'var(--red)' } : {}} />
                </div>
                <div className="form-group">
                  <label className="form-label">// email address</label>
                  <input type="email" className="form-input" placeholder="john@company.com"
                    value={form.email} onChange={handleChange('email')}
                    style={errors.email ? { borderColor: 'var(--red)' } : {}} />
                </div>
                <div className="form-group">
                  <label className="form-label">// message</label>
                  <textarea className="form-textarea" placeholder="Hi Nayeem, I'd love to discuss..."
                    value={form.message} onChange={handleChange('message')}
                    style={errors.message ? { borderColor: 'var(--red)' } : {}} />
                </div>

                {apiError && (
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--red)', background: 'rgba(255,77,106,0.08)',
                    border: '1px solid rgba(255,77,106,0.2)',
                    borderRadius: 'var(--radius)', padding: '10px 14px',
                    marginBottom: '16px', lineHeight: 1.6,
                  }}>
                    ⚠ {apiError}
                  </div>
                )}

                <button className="form-submit" onClick={handleSubmit} disabled={sending}>
                  {sending ? '// sending...' : './send_message'}
                </button>
              </div>
            ) : (
              <div className="form-success show">
                <div className="form-success-icon">✅</div>
                <div className="form-success-msg">
                  Message sent!<br />I&apos;ll get back to you soon.
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}