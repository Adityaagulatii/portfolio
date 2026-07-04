import { useProjects } from '../../hooks/useProjects'
import ProjectCard from '../ui/ProjectCard'

export default function ProjectsGrid() {
  const { projects, loading } = useProjects()

  return (
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-accent text-sm font-mono mb-2">// what i've built</p>
        <h2 className="text-3xl font-bold text-dark">Projects</h2>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white border border-border rounded-xl overflow-hidden animate-pulse">
              <div className="aspect-video bg-slate-100" />
              <div className="p-5 space-y-3">
                <div className="h-4 bg-slate-100 rounded w-2/3" />
                <div className="h-3 bg-slate-100 rounded w-full" />
                <div className="h-3 bg-slate-100 rounded w-4/5" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}
