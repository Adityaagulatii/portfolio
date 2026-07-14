import Hero from '../components/sections/Hero'
import ProjectsGrid from '../components/sections/ProjectsGrid'
import Experience from '../components/sections/Experience'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <ProjectsGrid />
      <Contact />
    </main>
  )
}
