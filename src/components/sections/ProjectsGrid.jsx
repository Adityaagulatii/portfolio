import { useProjects } from '../../hooks/useProjects'
import ProjectCard from '../ui/ProjectCard'

export default function ProjectsGrid() {
  const { projects, loading } = useProjects()

  return (
    <section id="projects" className="px-6 py-24 max-w-5xl mx-auto">
      <h2 className="text-xs font-mono text-muted tracking-widest uppercase mb-12">
        // projects
      </h2>

      {loading ? (
        <p className="text-muted text-sm font-mono">loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}
