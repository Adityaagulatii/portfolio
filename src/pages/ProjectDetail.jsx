import { useParams, Link } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects'

function Tag({ label }) {
  return (
    <span className="text-xs px-2.5 py-1 bg-surface border border-border text-muted rounded-sm">
      {label}
    </span>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const { projects, loading } = useProjects()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse space-y-4 max-w-3xl w-full px-8">
          <div className="h-8 bg-surface rounded w-1/3" />
          <div className="aspect-video bg-surface rounded" />
          <div className="h-6 bg-surface rounded w-1/2" />
        </div>
      </div>
    )
  }

  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-dark font-semibold">Project not found</p>
        <Link to="/" className="text-accent text-sm hover:underline">← Back to home</Link>
      </div>
    )
  }

  const color = project.color || '#f97316'

  return (
    <div className="min-h-screen animate-fade-in" style={{ backgroundColor: `${color}0c` }}>

      {/* Full-bleed hero image — outside padded wrapper */}
      <div className="w-full aspect-[21/9] overflow-hidden" style={{ backgroundColor: `${color}18` }}>
        <img
          src={project.demoGif || project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-90"
          onError={e => {
            if (project.demoGif && e.target.src.includes(project.demoGif)) {
              e.target.src = project.image
            } else {
              e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-7xl opacity-20">${project.emoji || '🛠️'}</span></div>`
            }
          }}
        />
      </div>

      <div className="px-8 md:px-16 lg:px-20 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-muted text-sm transition-colors mb-12" style={{ color: 'inherit' }}
        onMouseEnter={e => e.currentTarget.style.color = color}
        onMouseLeave={e => e.currentTarget.style.color = ''}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </Link>

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-dark tracking-tight mb-3">{project.title}</h1>
          <p className="text-lg font-medium" style={{ color }}>{project.tagline}</p>
        </div>
        <div className="flex gap-3 shrink-0">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 border border-border rounded-sm transition-colors text-muted"
              onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.color = color }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.color = '' }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 text-white font-medium rounded-sm transition-opacity hover:opacity-80"
              style={{ backgroundColor: color }}>
              Live Demo ↗
            </a>
          )}
        </div>
      </div>

      {project.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-12">
          {project.tags.map(tag => <Tag key={tag} label={tag} />)}
        </div>
      )}

      <div className="mb-10">
        <p className="text-dark text-base leading-relaxed">{project.description}</p>
        {project.longDescription && (
          <p className="text-muted text-base leading-relaxed mt-4">{project.longDescription}</p>
        )}
      </div>

      {project.inspiration && (
        <div className="mb-10 border-l-2 pl-6" style={{ borderColor: color }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color }}>Inspiration</p>
          <p className="text-muted text-sm leading-relaxed">{project.inspiration}</p>
        </div>
      )}

      {project.techBreakdown && (
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">Skills</p>
          <div className="flex flex-wrap gap-2">
            {[...new Set(Object.values(project.techBreakdown).flat())].map(item => (
              <span key={item} className="text-xs px-2.5 py-1 border border-border text-muted rounded-sm">{item}</span>
            ))}
          </div>
        </div>
      )}

      {project.parts?.length > 0 && (
        <div className="mb-16 flex flex-col gap-px -mx-8 md:-mx-16 lg:-mx-20" style={{ background: `${color}20` }}>
          {project.parts.map((part, i) => (
            <div key={i} className="p-8" style={{ backgroundColor: 'rgba(255,255,255,0.75)' }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 text-white text-xs font-bold flex items-center justify-center shrink-0" style={{ backgroundColor: color }}>
                  {i + 1}
                </span>
                <h3 className="font-bold text-dark">{part.label}</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-5">{part.summary}</p>
              <ul className="space-y-2 mb-6">
                {part.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm text-muted">
                    <span className="mt-0.5 shrink-0" style={{ color }}>→</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                {part.github && (
                  <a href={part.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 border rounded-sm transition-opacity hover:opacity-70"
                    style={{ borderColor: `${color}40`, color }}>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {part.demo && (
                  <a href={part.demo} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-sm transition-opacity hover:opacity-80 text-white"
                    style={{ backgroundColor: color }}>
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}



      <div className="border-t pt-12" style={{ borderColor: `${color}30` }}>
        <p className="text-muted text-xs uppercase tracking-widest mb-6">More projects</p>
        <div className="flex flex-wrap gap-3">
          {projects.filter(p => p.id !== id).slice(0, 3).map(p => (
            <Link key={p.id} to={`/project/${p.id}`}
              className="text-sm px-4 py-2 border border-border rounded-sm text-muted transition-colors hover:border-current"
              style={{ '--hover-color': p.color || '#f97316' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.color = p.color }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.color = '' }}
            >
              {p.title} →
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
