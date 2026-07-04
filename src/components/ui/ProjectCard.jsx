import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`}
      className="group block bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-50 hover:-translate-y-1 transition-all duration-300">

      <div className="w-full aspect-video bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={e => {
            e.target.parentElement.innerHTML = `
              <div class="w-full h-full flex items-center justify-center">
                <span class="text-4xl">${project.emoji || '🛠️'}</span>
              </div>`
          }}
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-dark text-base group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="text-[10px] font-mono text-accent bg-accent-light px-2 py-0.5 rounded-full shrink-0">
              featured
            </span>
          )}
        </div>

        <p className="text-muted text-sm mb-4 leading-relaxed">{project.tagline}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs text-muted">+{project.tags.length - 4} more</span>
          )}
        </div>
      </div>
    </Link>
  )
}
