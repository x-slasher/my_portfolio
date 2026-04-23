import { useTypewriter } from '../hooks/useTypewriter'
import { profile } from '../data/content'

export default function Hero() {
  const role = useTypewriter(profile.typewriterRoles)

  return (
    <section id="hero" style={{ position: 'relative' }}>
      <div className="grid-bg" />
      <div className="hero-glow" />

      <div className="hero-grid">
        {/* ── Left: Text ── */}
        <div>
          <div className="hero-badge reveal">
            <span className="pulse" />
            Available for opportunities
          </div>

          <div className="hero-eyebrow reveal reveal-delay-1">
            ~/portfolio <span>$</span> whoami
          </div>

          <h1 className="hero-name reveal reveal-delay-2">
            NAYEEM<br /><span className="accent">HASAN</span>
          </h1>

          <div className="hero-role reveal reveal-delay-3">
            {role || profile.typewriterRoles[0]}
          </div>

          <p className="hero-bio reveal reveal-delay-3">
            Building <strong>secure, high-performance distributed systems</strong> across
            EU healthcare research, fintech, and e-commerce. Currently leading backend
            platform development for an active{' '}
            <span style={{ color: 'var(--green)' }}>EU federated learning project (FLUTE)</span>,
            with successfully delivered infrastructure for TRUMPET.
          </p>

          <div className="hero-ctas reveal reveal-delay-4">
            <a href="#projects" className="btn-primary"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              ./view_projects <span>→</span>
            </a>
            <a href="#contact" className="btn-secondary"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              get_in_touch()
            </a>
            <a href={profile.cvFile} download="Nayeem_Hasan_CV.pdf" className="btn-cv">
              <span className="dl-icon">⬇</span> Download CV
            </a>
          </div>

          <div className="hero-stats reveal reveal-delay-4">
            {profile.stats.map(({ num, suffix, label }) => (
              <div key={label}>
                <div className="hero-stat-num">{num}<span>{suffix}</span></div>
                <div className="hero-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Terminal Card ── */}
        <div className="terminal-card reveal reveal-delay-2">
          <div className="term-bar">
            <div className="term-dot" style={{ background: '#ff5f57' }} />
            <div className="term-dot" style={{ background: '#febc2e' }} />
            <div className="term-dot" style={{ background: '#28c840' }} />
            <span className="term-title">bash — nayeem@dev</span>
          </div>
          <div className="term-body">
            <div className="t-cmd">cat profile.json</div>
            <div className="t-blank" />
            <div className="t-out"><span className="t-key">"name"</span>: <span className="t-val">"Nayeem Hasan"</span>,</div>
            <div className="t-out"><span className="t-key">"title"</span>: <span className="t-val">"Sr. Software Engineer"</span>,</div>
            <div className="t-out"><span className="t-key">"location"</span>: <span className="t-val">"Dhaka, Bangladesh"</span>,</div>
            <div className="t-out"><span className="t-key">"remote"</span>: <span className="t-highlight">true</span>,</div>
            <div className="t-out"><span className="t-key">"experience"</span>: <span className="t-val">"8+ years"</span>,</div>
            <div className="t-blank" />
            <div className="t-out"><span className="t-key">"primary_stack"</span>: [</div>
            <div className="t-out" style={{ paddingLeft: '28px' }}><span className="t-val">"Python"</span>, <span className="t-val">"FastAPI"</span>, <span className="t-val">"Django"</span>,</div>
            <div className="t-out" style={{ paddingLeft: '28px' }}><span className="t-val">"PHP"</span>, <span className="t-val">"Laravel"</span></div>
            <div className="t-out">],</div>
            <div className="t-blank" />
            <div className="t-out"><span className="t-key">"specialties"</span>: [</div>
            <div className="t-out" style={{ paddingLeft: '28px' }}><span className="t-val">"Federated Learning"</span>,</div>
            <div className="t-out" style={{ paddingLeft: '28px' }}><span className="t-val">"Zero-Trust Architecture"</span>,</div>
            <div className="t-out" style={{ paddingLeft: '28px' }}><span className="t-val">"HL7 FHIR / DICOM"</span></div>
            <div className="t-out">],</div>
            <div className="t-blank" />
            <div className="t-out"><span className="t-key">"status"</span>: <span className="t-highlight">"open_to_work"</span></div>
            <div className="t-blank" />
            <div className="t-cmd t-cursor-line">ping nayeem </div>
          </div>
        </div>
      </div>
    </section>
  )
}
