export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 max-w-3xl mx-auto">
      <h2 className="text-xs font-mono text-muted tracking-widest uppercase mb-12">
        // contact
      </h2>

      <div className="border border-border rounded-lg p-8">
        <p className="text-white font-mono text-xl mb-2">Let's build something.</p>
        <p className="text-muted text-sm font-mono mb-8">
          Open to internships, research collabs, and interesting problems.
        </p>

        <div className="space-y-3 text-sm font-mono">
          <div className="flex items-center gap-3">
            <span className="text-muted w-16">email</span>
            <a href="mailto:gulati.adi@northeastern.edu"
              className="text-accent hover:underline">
              gulati.adi@northeastern.edu
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted w-16">github</span>
            <a href="https://github.com/adityagulati" target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent transition-colors">
              github.com/adityagulati
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted w-16">linkedin</span>
            <a href="https://linkedin.com/in/adityagulati" target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent transition-colors">
              linkedin.com/in/adityagulati
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-muted text-xs font-mono mt-16">
        built with react + vite + tailwind · deployed on vercel
      </p>
    </section>
  )
}
