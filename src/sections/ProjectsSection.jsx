import { useReveal } from '../hooks/useReveal'

const PROJECTS = [
  {
    id: 'cnn',
    emoji: '🌽',
    title: 'Corn Leaf Disease Classification',
    desc: 'CNN-based pipeline to classify corn leaf diseases. Implemented preprocessing, augmentation, model training, and evaluation with standard metrics.',
    tags: ['Python', 'CNN', 'Machine Learning'],
    gradient: 'from-emerald-950 via-forest-800 to-forest-900',
    year: '2024',
    type: 'ML / AI Project',
  },
  {
    id: 'gym',
    emoji: '💪',
    title: 'Gym Membership System',
    desc: 'Web-based system for managing memberships, client records, and attendance. Built front-end features with emphasis on intuitive UX and clean data presentation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-forest-900 via-forest-800 to-emerald-950',
    year: '2024',
    type: 'Web Application',
  },
  {
    id: 'ebcon',
    emoji: '🏗️',
    title: 'Ebcon Construction System',
    desc: 'Real-time system to monitor engineering work progress, track task completion, and manage bills of materials for construction projects.',
    tags: ['Web Dev', 'Real-time', 'Frontend'],
    gradient: 'from-forest-950 via-forest-900 to-forest-800',
    year: '2025',
    type: 'Business System',
  },
]

function ProjectCard({ project, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal-up card-base group cursor-pointer flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Thumbnail */}
      <div className={`relative h-36 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}>
        <div className="absolute inset-0 opacity-[0.08]"
             style={{
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
               backgroundSize: '18px 18px'
             }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl opacity-55 group-hover:scale-110 group-hover:opacity-85 transition-all duration-500 select-none">
            {project.emoji}
          </span>
        </div>
        <div className="absolute top-2.5 right-2.5 bg-black/30 backdrop-blur-sm text-white/60 px-2.5 py-1 rounded-full"
             style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Syne',sans-serif" }}>
          {project.year}
        </div>
        <div className="absolute top-2.5 left-2.5 text-accent px-2.5 py-1 rounded-full"
             style={{ fontSize: 9, fontWeight: 700, fontFamily: "'Syne',sans-serif", background: 'rgba(61,220,132,0.12)', border: '1px solid rgba(61,220,132,0.25)' }}>
          {project.type}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
             style={{ background: 'rgba(7,31,23,0.82)', backdropFilter: 'blur(6px)' }}>
          <span style={{ background: '#3ddc84', color: '#0B3D2E', fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, padding: '9px 20px', borderRadius: 50 }}>
            👁 View Project
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#3ddc84', background: 'rgba(61,220,132,0.08)',
              border: '1px solid rgba(61,220,132,0.15)', padding: '2px 9px', borderRadius: 50,
              fontFamily: "'Syne',sans-serif",
            }}>
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2 leading-snug"
            style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}>
          {project.title}
        </h3>
        <p className="text-accent-muted leading-relaxed flex-1 mb-4"
           style={{ fontSize: 13, lineHeight: 1.65 }}>
          {project.desc}
        </p>
        <button className="inline-flex items-center gap-2 text-accent font-display font-semibold
                           hover:translate-x-1 transition-all duration-300"
                style={{ fontSize: 12, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <i className="fas fa-arrow-right text-xs" />
          View Project
        </button>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const headRef = useReveal()

  return (
    <section
  id="projects"
  className="snap-section min-h-screen flex flex-col relative"
  style={{ background: 'rgba(0,0,0,0.18)' }}
>
      {/* Top glow divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-px"
           style={{ background: 'linear-gradient(90deg, transparent, rgba(61,220,132,0.4), transparent)' }} />

      <div className="flex-1 flex items-center relative z-10">
        <div className="container-custom w-full">

          {/* ── Header ── */}
          <div ref={headRef} className="reveal-up mb-8 md:mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(61,220,132,0.1)', border: '1px solid rgba(61,220,132,0.22)',
                color: '#3ddc84', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em',
                textTransform: 'uppercase', padding: '5px 14px', borderRadius: 50,
                fontFamily: "'Syne',sans-serif",
              }}>
                <i className="fas fa-layer-group" style={{ fontSize: 9 }} /> Portfolio
              </span>
            </div>
            <h2 className="section-title text-white mb-3">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-subtitle">
              A selection of real-world and academic projects showcasing web development,
              machine learning, and systems design.
            </p>
          </div>

          {/* ── Card grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 90} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
