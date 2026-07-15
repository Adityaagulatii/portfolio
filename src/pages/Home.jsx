import Hero from '../components/sections/Hero'
import ProjectsGrid from '../components/sections/ProjectsGrid'
import Experience from '../components/sections/Experience'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <main
      style={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
      }}
    >
      <Hero />
      <ProjectsGrid />
      <Experience />
      <Contact />
    </main>
  )
}
