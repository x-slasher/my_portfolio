import { useState } from 'react'
import { profile } from '../data/content'

// ── Replace this with your Formspree endpoint
// Get it free at formspree.io → New Form → copy the URL
const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL

const CHANNELS = [
  { icon: '✉️', label: 'Email',    value: profile.email,                  href: `mailto:${profile.email}` },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/nayeem-hasan', href: profile.linkedin, target: '_blank' },
  { icon: '🐙', label: 'GitHub',   value: 'github.com/x-slasher',         href: profile.github,   target: '_blank' },
  { icon: '📱', label: 'Phone',    value: profile.phone,                  href: `tel:${profile.phone}` },
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