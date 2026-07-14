import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)
  const color = project.color || '#f97316'

  return (
    <Link
      to={`/project/${project.id}`}
      className="group block border-b border-border transition-all duration-500"
      style={{
        backgroundColor: hovered ? `${color}18` : 'transparent',
        borderBottomColor: hovered ? `${color}40` : '',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="px-8 md:px-16 lg:px-20 py-10 flex items-center justify-between gap-8">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-4 mb-3">
            <h3
              className="font-black text-2xl md:text-3xl tracking-tight transition-colors duration-300"
              style={{ color: hovered ? color : '#111111' }}
            >
              {project.title}
            </h3>
            {project.hackathon && (
              <span className="text-xs font-mono text-muted hidden sm:inline">{project.hackathon}</span>
            )}
          </div>
          <p className="text-sm leading-relaxed max-w-xl transition-colors duration-300"
            style={{ color: hovered ? `${color}cc` : '#888888' }}>
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.slice(0, 5).map(tag => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 border rounded-sm transition-all duration-300"
                style={{
                  borderColor: hovered ? `${color}50` : '#e0e0e0',
                  color: hovered ? color : '#888888',
                  backgroundColor: hovered ? `${color}12` : 'transparent',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className="shrink-0 w-32 h-20 md:w-48 md:h-28 overflow-hidden transition-all duration-300"
          style={{
            backgroundColor: `${color}18`,
            outline: hovered ? `2px solid ${color}40` : '2px solid transparent',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ opacity: hovered ? 1 : 0.7 }}
            onError={e => {
              e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-3xl" style="color:${color};opacity:0.4">${project.emoji || '🛠️'}</span></div>`
            }}
          />
        </div>

        <span
          className="text-2xl transition-all duration-300 shrink-0 hidden md:block"
          style={{ color: hovered ? color : '#cccccc' }}
        >
          →
        </span>
      </div>
    </Link>
  )
}
