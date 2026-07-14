import { useState, useEffect } from 'react'

export default function Experience() {
  const [experience, setExperience] = useState([])

  useEffect(() => {
    fetch('/experience.json')
      .then(r => r.json())
      .then(setExperience)
      .catch(() => {})
  }, [])

  return (
    <section id="experience" className="px-8 md:px-16 lg:px-20 py-24 border-t border-border" style={{ scrollSnapAlign: 'start', minHeight: '100vh', overflowY: 'auto' }}>
      <div className="max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-black text-dark tracking-tight mb-20">Experience</h2>

        <div className="divide-y divide-border">
          {experience.map(job => (
            <div key={job.id} className="py-10 group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                <h3 className="font-semibold text-dark text-base group-hover:text-accent transition-colors">{job.role}</h3>
                <span className="text-sm text-muted shrink-0 font-mono">{job.period}</span>
              </div>
              <p className="text-accent text-sm font-medium mb-4">{job.company}</p>
              <p className="text-muted text-sm leading-relaxed mb-5">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 bg-surface border border-border text-muted rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
