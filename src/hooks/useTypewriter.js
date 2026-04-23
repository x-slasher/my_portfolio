import { useState, useEffect, useRef } from 'react'

/**
 * Cycles through an array of strings with a typewriter effect.
 * @param {string[]} texts - array of strings to cycle through
 * @param {number} typeSpeed - ms per character while typing
 * @param {number} deleteSpeed - ms per character while deleting
 * @param {number} pauseMs - ms to pause after fully typed
 */
export function useTypewriter(texts, typeSpeed = 68, deleteSpeed = 42, pauseMs = 2200) {
  const [displayed, setDisplayed] = useState('')
  const indexRef   = useRef(0)
  const charRef    = useRef(0)
  const deletingRef = useRef(false)
  const timerRef   = useRef(null)

  useEffect(() => {
    if (!texts?.length) return

    function tick() {
      const current = texts[indexRef.current]
      if (!deletingRef.current) {
        charRef.current++
        setDisplayed(current.slice(0, charRef.current))
        if (charRef.current === current.length) {
          deletingRef.current = true
          timerRef.current = setTimeout(tick, pauseMs)
          return
        }
      } else {
        charRef.current--
        setDisplayed(current.slice(0, charRef.current))
        if (charRef.current === 0) {
          deletingRef.current = false
          indexRef.current = (indexRef.current + 1) % texts.length
        }
      }
      timerRef.current = setTimeout(tick, deletingRef.current ? deleteSpeed : typeSpeed)
    }

    timerRef.current = setTimeout(tick, 1800) // initial delay
    return () => clearTimeout(timerRef.current)
  }, [texts, typeSpeed, deleteSpeed, pauseMs])

  return displayed
}
