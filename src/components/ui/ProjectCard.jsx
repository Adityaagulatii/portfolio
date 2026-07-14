import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)
  const color = project.color || '#f97316'

  return (
    <Link
      to={`/project/${project.id}`}
      className="group block border-b border-border transition-all duration-300"
      style={{
        backgroundColor: hovered ? `${color}0d` : 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="px-8 md:px-16 lg:px-20 py-10 flex items-center justify-between gap-8">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-4 mb-3">
            <h3
              className="font-black text-2xl md:text-3xl tracking-tight transition-colors duration-300"
              style={{ color: hovered ? color : '#f0f0f0' }}
            >
              {project.title}
            </h3>
            {project.hackathon && (
              <span className="text-xs font-mono text-muted hidden sm:inline">{project.hackathon}</span>
            )}
          </div>
          <p className="text-muted text-sm leading-relaxed max-w-xl">{project.tagline}</p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.slice(0, 5).map(tag => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 border rounded-sm transition-colors duration-300"
                style={{
                  borderColor: hovered ? `${color}40` : '#2a2a2a',
                  color: hovered ? color : '#737373',
                  backgroundColor: hovered ? `${color}10` : 'transparent',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0 w-32 h-20 md:w-48 md:h-28 overflow-hidden bg-surface">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ opacity: hovered ? 1 : 0.6 }}
            onError={e => {
              e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-3xl opacity-30">${project.emoji || '🛠️'}</span></div>`
            }}
          />
        </div>

        <span
          className="text-2xl transition-all duration-300 shrink-0 hidden md:block"
          style={{ color: hovered ? color : '#2a2a2a' }}
        >
          →
        </span>
      </div>
    </Link>
  )
}
