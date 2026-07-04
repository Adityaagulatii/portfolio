import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`}
      className="group block bg-surface border border-border rounded-lg p-5 hover:border-accent transition-all duration-200 hover:-translate-y-0.5">

      {project.image && (
        <div className="w-full aspect-video bg-bg rounded mb-4 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            onError={e => { e.target.parentElement.style.display = 'none' }}
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="font-mono font-semibold text-white text-sm group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        {project.featured && (
          <span className="text-[10px] font-mono text-accent border border-accent px-1.5 py-0.5 rounded shrink-0">
            featured
          </span>
        )}
      </div>

      <p className="text-muted text-xs font-mono mb-3">{project.tagline}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map(tag => (
          <span key={tag} className="text-[10px] font-mono px-1.5 py-0.5 bg-bg border border-border text-muted rounded">
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="text-[10px] font-mono text-muted">+{project.tags.length - 4}</span>
        )}
      </div>
    </Link>
  )
}
