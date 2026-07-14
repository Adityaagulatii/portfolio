import { Link, useLocation } from 'react-router-dom'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-5 flex items-center justify-between">
      <Link to="/" className="font-mono font-semibold text-dark hover:text-accent transition-colors text-sm tracking-tight">
        ag<span className="text-accent">.</span>
      </Link>

      {pathname === '/' && (
        <div className="flex items-center gap-8 text-sm text-muted">
          <button onClick={() => scrollTo('projects')} className="hover:text-dark transition-colors">Projects</button>
          <button onClick={() => scrollTo('experience')} className="hover:text-dark transition-colors">Experience</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-dark transition-colors">Contact</button>
        </div>
      )}
    </nav>
  )
}
