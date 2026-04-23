import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/content'

function SkillBar({ name, level, pct }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(pct)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [pct])

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-item-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: `${width}%`,
            transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-divider">
      <div className="section-header reveal">
        <span className="section-num">04.</span>
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-line" />
      </div>

      <div className="skills-grid">
        {skills.groups.map((group, i) => (
          <div key={group.label} className={`skill-group reveal ${i % 2 !== 0 ? 'reveal-delay-1' : ''}`}>
            <div className="skill-group-label">{group.label}</div>
            <div className="skill-items">
              {group.items.map(item => (
                <SkillBar key={item.name} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-extra reveal" style={{ marginTop: '20px' }}>
        <div className="skills-extra-header">Additional Expertise</div>
        <div className="skills-tags">
          {skills.extras.map(tag => (
            <span key={tag} className="skills-tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
