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
    <section id="experience" className="px-6 py-24 bg-white border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-accent text-sm font-mono mb-2">// where i've worked</p>
          <h2 className="text-3xl font-bold text-dark">Experience</h2>
        </div>

        <div className="space-y-6">
          {experience.map(job => (
            <div key={job.id} className="flex gap-6 p-6 border border-border rounded-xl hover:shadow-sm transition-shadow bg-bg">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden">
                {job.logo ? (
                  <img src={job.logo} alt={job.company} className="w-full h-full object-contain p-1"
                    onError={e => { e.target.parentElement.innerHTML = `<span class="text-xl">${job.emoji || '🏢'}</span>` }} />
                ) : (
                  <span className="text-xl">{job.emoji || '🏢'}</span>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-semibold text-dark">{job.role}</h3>
                  <span className="text-xs text-muted font-mono shrink-0">{job.period}</span>
                </div>
                <p className="text-accent text-sm mb-3">{job.company}</p>
                <p className="text-muted text-sm leading-relaxed mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
