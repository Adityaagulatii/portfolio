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
      <div className="px-8 md:px-16 lg:px-20 py-8 md:py-10 flex items-center justify-between gap-6 md:gap-8">
        <div className="flex-1 min-w-0">
          <h3
            className="font-black text-2xl md:text-3xl tracking-tight transition-colors duration-300 mb-3"
            style={{ color: hovered ? color : '#111111' }}
          >
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed max-w-xl transition-colors duration-300"
            style={{ color: hovered ? `${color}cc` : '#888888' }}>
            {project.tagline}
          </p>
        </div>

        <div
          className="shrink-0 hidden sm:block w-36 h-24 md:w-48 md:h-28 overflow-hidden transition-all duration-300"
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
