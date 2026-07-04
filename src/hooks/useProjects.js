import { useState, useEffect } from 'react'

export function useProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/projects.json')
      .then(r => r.json())
      .then(data => {
        setProjects(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return { projects, loading }
}
