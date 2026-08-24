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
    <section
      id="recognition"
      className="border-t border-border flex flex-col"
      style={{ scrollSnapAlign: 'start', height: '100vh' }}
    >
      <div className="px-8 md:px-16 lg:px-20 pt-20 pb-8 flex flex-col flex-1 min-h-0">
        <h2 className="text-5xl md:text-6xl font-black text-dark tracking-tight mb-8 shrink-0">Recognition</h2>

        <div className="flex-1 flex flex-col divide-y divide-border min-h-0">
          {items.map(item => (
            <div key={item.id} className="flex-1 flex flex-col justify-center py-2 group min-h-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-semibold text-dark text-sm">{item.title}</h3>
                <span className="text-sm text-muted shrink-0 font-mono">{item.date}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
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
