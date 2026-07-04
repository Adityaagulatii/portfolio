import { useParams, Link } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects'

export default function ProjectDetail() {
  const { id } = useParams()
  const { projects, loading } = useProjects()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-muted font-mono text-sm">loading...</span>
      </div>
    )
  }

  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted font-mono">project not found</p>
        <Link to="/" className="text-accent text-sm hover:underline">← back home</Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <Link to="/" className="text-muted text-sm hover:text-accent transition-colors">← back</Link>

      <div className="mt-8">
        {project.image && (
          <div className="w-full aspect-video bg-surface border border-border rounded-lg overflow-hidden mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={e => { e.target.style.display = 'none' }}
            />
          </div>
        )}

        <h1 className="text-3xl font-mono font-semibold text-white mb-2">{project.title}</h1>
        <p className="text-accent text-sm mb-6">{project.tagline}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-mono px-2 py-1 bg-surface border border-border text-muted rounded">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm leading-relaxed text-gray-300 mb-8">{project.description}</p>

        <div className="flex gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="text-sm font-mono px-4 py-2 border border-border hover:border-accent hover:text-accent transition-colors rounded">
              github →
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="text-sm font-mono px-4 py-2 bg-accent text-bg font-semibold hover:bg-opacity-90 transition-colors rounded">
              live demo →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
