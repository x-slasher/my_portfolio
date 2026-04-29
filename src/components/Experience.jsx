import { useState } from 'react'
import { experience } from '../data/content'

function ExpItem({ job }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`exp-item reveal ${job.current ? 'current' : ''}`}>
      <div className="exp-meta">
        <div className="exp-dates">{job.dates}</div>
        <div className="exp-loc">
          {job.location.code.split(' ').map((c, i) => (
            <span key={c} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              {i > 0 && <span style={{ color: 'var(--text-faint)', margin: '0 2px' }}>/</span>}
              <span className={`fi fi-${c}`} style={{ borderRadius: '2px', fontSize: '12px' }} />
            </span>
          ))}
          <span>{job.location.label}</span>
        </div>
      </div>

      <div className="exp-body">
        <div className="exp-company">{job.company}</div>
        <div className="exp-role">{job.role}</div>

        <div className="exp-stack">
          {job.stack.map(tag => (
            <span key={tag} className="stack-tag">{tag}</span>
          ))}
        </div>

        <ul className="exp-bullets">
          {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>

        {job.extraBullets.length > 0 && (
          <>
            <div className="exp-extra" style={{ maxHeight: expanded ? '600px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
              <ul className="exp-bullets" style={{ marginTop: '8px' }}>
                {job.extraBullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
            <button className="exp-toggle" onClick={() => setExpanded(v => !v)}>
              <span>{expanded ? 'show less' : 'show more'}</span>
              <span className="exp-toggle-icon" style={{ transform: expanded ? 'rotate(180deg)' : 'none', display: 'inline-block', transition: 'transform 0.3s' }}>▾</span>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-divider">
      <div className="section-header reveal">
        <span className="section-num">02.</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
      </div>

      <div className="exp-timeline">
        {experience.map(job => (
          <ExpItem key={job.id} job={job} />
        ))}
      </div>
    </section>
  )
}