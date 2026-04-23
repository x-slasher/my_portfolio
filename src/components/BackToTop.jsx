import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: 32, right: 32,
        width: 44, height: 44,
        background: 'var(--bg-card)',
        border: '1px solid var(--border-mid)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.25s, transform 0.25s, background 0.25s, border-color 0.25s',
        zIndex: 400,
        fontSize: 18,
        color: 'var(--green)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      ↑
    </button>
  )
}
