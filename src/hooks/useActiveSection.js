import { useState, useEffect } from 'react'

/**
 * Tracks which section is currently in view based on scroll position.
 * @param {string[]} sectionIds - array of section element ids
 * @param {number} offset - scroll offset in px (default 120)
 * @returns {string} id of the currently active section
 */
export function useActiveSection(sectionIds, offset = 120) {
  const [active, setActive] = useState('')

  useEffect(() => {
    function onScroll() {
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - offset) {
          current = id
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // run once on mount
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds, offset])

  return active
}
