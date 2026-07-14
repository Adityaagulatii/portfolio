import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`}
      className="group block bg-bg hover:bg-surface transition-colors duration-300 overflow-hidden">

      <div className="w-full aspect-video bg-surface overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          onError={e => {
            e.target.parentElement.innerHTML = `
              <div class="w-full h-full flex items-center justify-center bg-surface">
                <span class="text-5xl opacity-40">${project.emoji || '🛠️'}</span>
              </div>`
          }}
        />
      </div>

      <div className="p-6 pb-8">
        <h3 className="font-bold text-dark text-lg group-hover:text-accent transition-colors mb-2 tracking-tight">
          {project.title}
        </h3>

        <p className="text-muted text-sm mb-5 leading-relaxed">{project.tagline}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="text-xs px-2.5 py-1 bg-surface border border-border text-muted rounded-sm">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs text-muted py-1">+{project.tags.length - 4}</span>
          )}
        </div>
      </div>
    </Link>
  )
}
