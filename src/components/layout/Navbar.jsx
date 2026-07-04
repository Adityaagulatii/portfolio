import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
      style={{ background: 'linear-gradient(to bottom, #0a0a0a, transparent)' }}>
      <Link to="/" className="font-mono font-semibold text-white hover:text-accent transition-colors text-sm">
        ag<span className="text-accent">.</span>
      </Link>

      {pathname === '/' && (
        <div className="flex items-center gap-6 text-xs font-mono text-muted">
          <a href="#projects" className="hover:text-white transition-colors">projects</a>
          <a href="#experience" className="hover:text-white transition-colors">experience</a>
          <a href="#contact" className="hover:text-white transition-colors">contact</a>
        </div>
      )}
    </nav>
  )
}
