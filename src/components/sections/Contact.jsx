export default function Contact() {
  return (
    <section id="contact" className="px-8 md:px-16 lg:px-20 py-32 border-t border-border">
      <div className="max-w-2xl">
        <h2 className="text-5xl md:text-6xl font-black text-dark tracking-tight mb-6">Get In Touch</h2>
        <p className="text-muted text-lg leading-relaxed mb-16">
          Open to co-ops, research collaborations, and interesting problems.
        </p>

        <div className="space-y-0 divide-y divide-border">
          {[
            {
              label: 'Email',
              value: 'gulati.adi@northeastern.edu',
              href: 'mailto:gulati.adi@northeastern.edu',
            },
            {
              label: 'GitHub',
              value: 'github.com/Adityaagulatii',
              href: 'https://github.com/Adityaagulatii',
            },
            {
              label: 'LinkedIn',
              value: 'linkedin.com/in/aditya-gulati-2601',
              href: 'https://linkedin.com/in/aditya-gulati-2601',
            },
          ].map(({ label, value, href }) => (
            <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
              className="flex items-center justify-between py-6 group hover:text-accent transition-colors">
              <span className="text-muted text-sm font-mono w-24">{label}</span>
              <span className="text-dark text-sm group-hover:text-accent transition-colors flex-1">{value}</span>
              <span className="text-muted group-hover:text-accent transition-colors">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
