export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 py-8">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-accent-muted text-sm">
          © 2025{' '}
          <span className="font-display font-bold text-accent">Olsen John Gabriel Provido</span>
          {' '}— Built with React &amp; Tailwind CSS
        </p>
        <div className="flex items-center gap-5">
          <a href="mailto:providoolsen@gmail.com"
             className="text-accent-muted hover:text-accent transition-colors duration-300 text-sm">
            <i className="fas fa-envelope mr-1.5" />
            Email
          </a>
          <a href="tel:09771376730"
             className="text-accent-muted hover:text-accent transition-colors duration-300 text-sm">
            <i className="fas fa-phone mr-1.5" />
            Phone
          </a>
        </div>
      </div>
    </footer>
  )
}
