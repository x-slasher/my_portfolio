import { useEffect } from 'react'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Skills     from './components/Skills'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import Cursor     from './components/Cursor'
import BackToTop  from './components/BackToTop'

export default function App() {
  // Scroll-reveal observer — watches every .reveal element
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )

    // Observe existing elements
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    // Re-observe when new elements mount (e.g. accordion content)
    const mutationObs = new MutationObserver(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el))
    })
    mutationObs.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObs.disconnect()
    }
  }, [])

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
