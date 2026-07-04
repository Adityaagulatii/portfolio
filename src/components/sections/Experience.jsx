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
    <section id="experience" className="px-6 py-24 max-w-3xl mx-auto">
      <h2 className="text-xs font-mono text-muted tracking-widest uppercase mb-12">
        // experience
      </h2>

      <div className="space-y-8">
        {experience.map(job => (
          <div key={job.id} className="border-l border-border pl-6 relative">
            <div className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-accent" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-2">
              <span className="text-white font-mono font-medium text-sm">{job.role}</span>
              <span className="text-muted text-xs hidden sm:block">·</span>
              <span className="text-accent text-xs font-mono">{job.company}</span>
            </div>
            <p className="text-muted text-xs font-mono mb-3">{job.period}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              {job.tags.map(tag => (
                <span key={tag} className="text-xs font-mono px-2 py-0.5 bg-surface border border-border text-muted rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
