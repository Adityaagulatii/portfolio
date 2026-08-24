import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [active, setActive] = useState('')

  useEffect(() => {
    if (pathname !== '/') return
    const ids = ['projects', 'recognition', 'experience', 'contact']
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [pathname])

  const isHome = pathname === '/'
  const isProject = pathname.startsWith('/project/')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 lg:px-20 py-5 flex items-center justify-between">
      <Link to="/" className="font-mono font-semibold text-dark hover:text-accent transition-colors text-sm tracking-tight">
        ag<span className="text-accent">.</span>
      </Link>

      {isHome && (
        <div className="flex items-center gap-6 md:gap-8 text-sm text-muted">
          {['projects', 'recognition', 'experience', 'contact'].map(id => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="capitalize transition-colors hover:text-dark"
              style={{ color: active === id ? '#111111' : '', fontWeight: active === id ? 600 : 400 }}
            >
              {id}
            </button>
          ))}
        </div>
      )}

      {isProject && (
        <div className="flex items-center gap-6 text-sm text-muted">
          <Link to="/" className="hover:text-dark transition-colors">← All Projects</Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition-colors">Resume ↗</a>
        </div>
      )}
    </nav>
  )
}
