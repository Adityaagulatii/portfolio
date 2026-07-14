import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-5 flex items-center justify-between">
      <Link to="/" className="font-mono font-semibold text-dark hover:text-accent transition-colors text-sm tracking-tight">
        ag<span className="text-accent">.</span>
      </Link>

      {pathname === '/' && (
        <div className="flex items-center gap-8 text-sm text-muted">
          <a href="#projects" className="hover:text-dark transition-colors">Projects</a>
          <a href="#experience" className="hover:text-dark transition-colors">Experience</a>
          <a href="#contact" className="hover:text-dark transition-colors">Contact</a>
        </div>
      )}
    </nav>
  )
}
