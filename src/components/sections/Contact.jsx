export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 max-w-4xl mx-auto">
      <div className="mb-12">
        <p className="text-accent text-sm font-mono mb-2">// say hello</p>
        <h2 className="text-3xl font-bold text-dark">Get In Touch</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-dark text-xl font-semibold mb-3">Let's build something great.</p>
          <p className="text-muted leading-relaxed mb-8">
            I'm open to internships, research collaborations, and interesting problems.
            Whether you have a question or just want to say hi — my inbox is always open.
          </p>

          <div className="space-y-4">
            {[
              {
                label: 'Email',
                value: 'gulati.adi@northeastern.edu',
                href: 'mailto:gulati.adi@northeastern.edu',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                label: 'GitHub',
                value: 'Adityaagulatii',
                href: 'https://github.com/Adityaagulatii',
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                )
              },
              {
                label: 'LinkedIn',
                value: 'Aditya Gulati',
                href: 'https://linkedin.com/in/aditya-gulati-2601',
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )
              },
            ].map(({ label, value, href, icon }) => (
              <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border rounded-xl hover:border-accent hover:shadow-sm transition-all group">
                <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-muted">{label}</p>
                  <p className="text-sm font-medium text-dark">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white border border-border rounded-xl p-8">
          <p className="font-semibold text-dark mb-6">Quick Message</p>
          <form onSubmit={e => { e.preventDefault(); window.location.href = 'mailto:gulati.adi@northeastern.edu' }}
            className="space-y-4">
            <div>
              <label className="block text-xs text-muted mb-1.5">Name</label>
              <input type="text" placeholder="Your name"
                className="w-full px-3 py-2 border border-border rounded-lg text-sm text-dark placeholder-muted focus:outline-none focus:border-accent transition-colors bg-bg" />
            </div>
            <div>
              <label className="block text-xs text-muted mb-1.5">Email</label>
              <input type="email" placeholder="your@email.com"
                className="w-full px-3 py-2 border border-border rounded-lg text-sm text-dark placeholder-muted focus:outline-none focus:border-accent transition-colors bg-bg" />
            </div>
            <div>
              <label className="block text-xs text-muted mb-1.5">Message</label>
              <textarea rows={4} placeholder="What's on your mind?"
                className="w-full px-3 py-2 border border-border rounded-lg text-sm text-dark placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none bg-bg" />
            </div>
            <button type="submit"
              className="w-full py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Send via Email →
            </button>
          </form>
        </div>
      </div>

      <p className="text-center text-muted text-xs mt-16">
        built with React + Vite + Tailwind · deployed on Vercel
      </p>
    </section>
  )
}
