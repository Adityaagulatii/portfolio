import { useProjects } from '../../hooks/useProjects'
import ProjectCard from '../ui/ProjectCard'

export default function ProjectsGrid() {
  const { projects, loading } = useProjects()

  return (
    <section id="projects" className="px-8 md:px-16 lg:px-20 py-32 border-t border-border">
      <h2 className="text-5xl md:text-6xl font-black text-dark tracking-tight mb-20">Projects</h2>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {[1,2,3].map(i => (
            <div key={i} className="bg-bg animate-pulse">
              <div className="aspect-video bg-surface" />
              <div className="p-6 space-y-3">
                <div className="h-4 bg-surface rounded w-2/3" />
                <div className="h-3 bg-surface rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}
