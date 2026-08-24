import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Recognition() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/recognition.json')
      .then(r => r.json())
      .then(setItems)
      .catch(() => {})
  }, [])

  return (
    <section id="recognition" className="px-8 md:px-16 lg:px-20 py-24 border-t border-border" style={{ scrollSnapAlign: 'start', minHeight: '100vh' }}>
      <div className="max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-black text-dark tracking-tight mb-20">Recognition</h2>

        <div className="divide-y divide-border">
          {items.map(item => (
            <div key={item.id} className="py-10 group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                <h3 className="font-semibold text-dark text-base">{item.title}</h3>
                <span className="text-sm text-muted shrink-0 font-mono">{item.date}</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Link
                  to={`/project/${item.projectId}`}
                  className="text-sm font-medium transition-colors hover:underline"
                  style={{ color: item.color }}
                >
                  {item.project} ↗
                </Link>
              </div>
              <p className="text-muted text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
