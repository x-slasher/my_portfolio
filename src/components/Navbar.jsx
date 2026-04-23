import { useState, useEffect } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import { profile } from '../data/content'

const NAV_ITEMS = [
  { id: 'about',      label: 'About',      num: '01.' },
  { id: 'experience', label: 'Experience', num: '02.' },
  { id: 'projects',   label: 'Projects',   num: '03.' },
  { id: 'skills',     label: 'Skills',     num: '04.' },
  { id: 'contact',    label: 'Contact',    num: '05.' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const active = useActiveSection(NAV_ITEMS.map(n => n.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <a href="#hero" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          nayeem.dev
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_ITEMS.map(({ id, label, num }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick(id) }}
              >
                <span className="nav-num">{num}</span> {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop action buttons */}
        <div className="nav-actions">
          <a href={profile.cvFile} download="Nayeem_Hasan_CV.pdf" className="nav-cv">
            <span className="dl-icon">⬇</span> Resume
          </a>
          <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}>
            ./hire_me
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map(({ id, label, num }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => { e.preventDefault(); handleNavClick(id) }}
          >
            <span className="nav-num">{num}</span> {label}
          </a>
        ))}
        <a
          href={profile.cvFile}
          download="Nayeem_Hasan_CV.pdf"
          onClick={() => setMenuOpen(false)}
          style={{ color: 'var(--green)', borderColor: 'var(--border-mid)', background: 'var(--green-faint)' }}
        >
          <span className="dl-icon">⬇</span> Download Resume
        </a>
      </div>
    </>
  )
}
