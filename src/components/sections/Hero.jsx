export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto">
      <div className="animate-fade-in">
        <p className="text-accent text-sm font-mono mb-4 tracking-wider">hello, world —</p>
        <h1 className="text-5xl md:text-7xl font-mono font-semibold text-white leading-tight mb-6">
          Aditya<br />Gulati
        </h1>
        <p className="text-muted text-base font-mono max-w-xl leading-relaxed mb-8">
          CS @ Northeastern · building things that move, think, and talk ·
          robotics, ML, full-stack
        </p>

        <div className="flex items-center gap-4 text-sm font-mono">
          <a href="#projects"
            className="px-4 py-2 bg-accent text-bg font-semibold hover:bg-opacity-90 transition-colors rounded">
            see my work →
          </a>
          <a href="mailto:gulati.adi@northeastern.edu"
            className="px-4 py-2 border border-border text-muted hover:text-white hover:border-white transition-colors rounded">
            get in touch
          </a>
        </div>

        <div className="mt-16 flex gap-6 text-xs text-muted font-mono">
          <a href="https://github.com/adityagulati" target="_blank" rel="noopener noreferrer"
            className="hover:text-accent transition-colors">github</a>
          <a href="https://linkedin.com/in/adityagulati" target="_blank" rel="noopener noreferrer"
            className="hover:text-accent transition-colors">linkedin</a>
          <a href="mailto:gulati.adi@northeastern.edu" className="hover:text-accent transition-colors">email</a>
        </div>
      </div>
    </section>
  )
}
