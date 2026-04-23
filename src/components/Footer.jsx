export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="footer-logo">&gt; nayeem.dev</div>
      <div className="footer-copy">
        © {year} Nayeem Hasan · Built with ♥ and JetBrains Mono
      </div>
      <div className="footer-links">
        {['about', 'experience', 'projects', 'contact'].map(id => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </footer>
  )
}
