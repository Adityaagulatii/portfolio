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
    <section
      id="experience"
      className="border-t border-border flex flex-col"
      style={{ scrollSnapAlign: 'start', height: '100vh' }}
    >
      <div className="px-8 md:px-16 lg:px-20 pt-20 pb-8 flex flex-col flex-1 min-h-0">
        <h2 className="text-5xl md:text-6xl font-black text-dark tracking-tight mb-8 shrink-0">Experience</h2>

        <div className="flex-1 flex flex-col divide-y divide-border min-h-0">
          {experience.map(job => (
            <div key={job.id} className="flex-1 flex flex-col justify-center py-4 group min-h-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-semibold text-dark text-base group-hover:text-accent transition-colors">{job.role}</h3>
                <span className="text-sm text-muted shrink-0 font-mono">{job.period}</span>
              </div>
              <p className="text-accent text-sm font-medium mb-3">{job.company}</p>
              <p className="text-muted text-sm leading-relaxed mb-3">{job.description}</p>
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
