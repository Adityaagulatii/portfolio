import { useParams, Link } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects'

export default function ProjectDetail() {
  const { id } = useParams()
  const { projects, loading } = useProjects()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse space-y-4 max-w-3xl w-full px-6">
          <div className="h-8 bg-slate-100 rounded w-1/3" />
          <div className="aspect-video bg-slate-100 rounded-xl" />
          <div className="h-6 bg-slate-100 rounded w-1/2" />
          <div className="h-4 bg-slate-100 rounded w-full" />
        </div>
      </div>
    )
  }

  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-2xl">🔍</p>
        <p className="text-dark font-semibold">Project not found</p>
        <Link to="/" className="text-accent text-sm hover:underline">← Back to home</Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 animate-fade-in">
      <Link to="/" className="inline-flex items-center gap-2 text-muted text-sm hover:text-accent transition-colors mb-8">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to projects
      </Link>

      {/* Hero image */}
      <div className="w-full aspect-video bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl overflow-hidden mb-10 shadow-sm">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={e => {
            e.target.parentElement.innerHTML = `
              <div class="w-full h-full flex flex-col items-center justify-center gap-3">
                <span class="text-6xl">${project.emoji || '🛠️'}</span>
                <span class="text-muted text-sm">${project.title}</span>
              </div>`
          }}
        />
      </div>

      {/* Title + links */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div>
          <h1 className="text-4xl font-bold text-dark mb-2">{project.title}</h1>
          <p className="text-accent text-lg">{project.tagline}</p>
        </div>
        <div className="flex gap-3 shrink-0">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 border border-border rounded-lg hover:border-accent hover:text-accent transition-colors text-dark">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 bg-accent text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Live Demo ↗
            </a>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {project.tags.map(tag => (
          <span key={tag} className="text-sm px-3 py-1 bg-accent-light text-accent rounded-full font-mono">
            {tag}
          </span>
        ))}
      </div>

      {/* Overview */}
      <div className="prose prose-slate max-w-none mb-12">
        <p className="text-dark text-base leading-relaxed">{project.description}</p>
        {project.longDescription && (
          <p className="text-muted text-base leading-relaxed mt-4">{project.longDescription}</p>
        )}
      </div>

      {/* Key highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-dark mb-6">Key Highlights</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.highlights.map((item, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white border border-border rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-dark text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tech breakdown */}
      {project.techBreakdown && (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-dark mb-6">Tech Stack</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(project.techBreakdown).map(([category, items]) => (
              <div key={category} className="p-5 bg-white border border-border rounded-xl">
                <p className="text-xs font-mono text-muted uppercase tracking-wider mb-3">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="text-sm px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Challenges */}
      {project.challenges && (
        <div className="mb-12 p-6 bg-amber-50 border border-amber-100 rounded-xl">
          <h2 className="text-lg font-bold text-dark mb-3 flex items-center gap-2">
            <span>⚡</span> Challenges
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">{project.challenges}</p>
        </div>
      )}

      {/* What I learned */}
      {project.learnings && (
        <div className="mb-12 p-6 bg-blue-50 border border-blue-100 rounded-xl">
          <h2 className="text-lg font-bold text-dark mb-3 flex items-center gap-2">
            <span>💡</span> What I Learned
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">{project.learnings}</p>
        </div>
      )}

      {/* Related projects */}
      <div className="border-t border-border pt-10">
        <p className="text-muted text-sm mb-4">More projects</p>
        <div className="flex flex-wrap gap-3">
          {projects.filter(p => p.id !== id).slice(0, 3).map(p => (
            <Link key={p.id} to={`/project/${p.id}`}
              className="text-sm px-4 py-2 border border-border rounded-lg hover:border-accent hover:text-accent text-dark transition-colors">
              {p.title} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
