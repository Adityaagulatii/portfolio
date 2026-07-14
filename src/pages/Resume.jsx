import { Link } from 'react-router-dom'

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <div className="flex items-center justify-between px-8 py-3 border-b border-border bg-bg">
        <Link to="/" className="inline-flex items-center gap-2 text-muted text-sm hover:text-accent transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
        <a href="/resume.pdf" download
          className="text-sm px-4 py-1.5 border border-border rounded-sm hover:border-accent hover:text-accent text-muted transition-colors">
          Download PDF ↓
        </a>
      </div>
      <iframe
        src="/resume.pdf"
        className="flex-1 w-full"
        style={{ minHeight: 'calc(100vh - 112px)' }}
        title="Aditya Gulati — CV"
      />
    </div>
  )
}
