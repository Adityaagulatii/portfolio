import { useProjects } from '../../hooks/useProjects'
import ProjectCard from '../ui/ProjectCard'

export default function ProjectsGrid() {
  const { projects, loading } = useProjects()

  return (
    <section
      id="projects"
      className="border-t border-border"
      style={{ scrollSnapAlign: 'start', minHeight: '100vh', overflowY: 'auto' }}
    >
      <h2 className="text-5xl md:text-6xl font-black text-dark tracking-tight px-8 md:px-16 lg:px-20 pt-24 pb-16">
        Projects
      </h2>

      {loading ? (
        <div>
          {[1,2,3].map(i => (
            <div key={i} className="border-b border-border px-8 md:px-16 lg:px-20 py-10 animate-pulse flex justify-between gap-8">
              <div className="flex-1 space-y-3">
                <div className="h-7 bg-surface rounded w-1/3" />
                <div className="h-4 bg-surface rounded w-2/3" />
              </div>
              <div className="w-48 h-28 bg-surface rounded shrink-0" />
            </div>
          ))}
        </div>
      ) : (
        <div className="border-t border-border">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}
