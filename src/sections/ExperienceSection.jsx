import { useReveal } from '../hooks/useReveal'

const EXPERIENCES = [
  {
    year: 'Jan 2026 – Present',
    current: true,
    role: 'HR – Technology Support',
    company: 'Min-Asia Dressing Plant',
    location: 'Polomolok, South Cotabato',
    desc: 'Managing HR systems, employee data platforms, attendance tracking, and implementing tech solutions to streamline digital HR operations.',
  },
  {
    year: 'Aug – Dec 2025',
    current: false,
    role: 'Freelance Web Developer',
    company: 'Ebcon Construction System',
    location: 'General Santos, Philippines',
    desc: 'Contributed to frontend development and system planning for a real-time construction monitoring web system.',
  },
  {
    year: 'Jun – Aug 2024',
    current: false,
    role: 'Front-End Developer Intern',
    company: 'Kave Guild',
    location: 'General Santos, Philippines',
    desc: 'Developed front-end components, participated in testing and debugging to ensure web page consistency.',
  },
  {
    year: 'Graduated May 2025',
    current: false,
    role: 'BS Computer Science',
    company: 'Notre Dame of Dadiangas University',
    location: 'General Santos, Philippines',
    desc: 'Built foundations in software development, algorithms, data structures, and systems design.',
  },
]

const STACK = [
  { label: 'HTML5', icon: 'fab fa-html5', color: '#e34c26' },
  { label: 'CSS3', icon: 'fab fa-css3-alt', color: '#264de4' },
  { label: 'JavaScript', icon: 'fab fa-js-square', color: '#f0db4f' },
  { label: 'Python', icon: 'fab fa-python', color: '#3776ab' },
  { label: 'Git', icon: 'fab fa-git-alt', color: '#f1502f' },
  { label: 'GitHub', icon: 'fab fa-github', color: '#ffffff' },
  { label: 'CNN / ML', icon: 'fas fa-brain', color: '#ff6f61' },
  { label: 'Debugging', icon: 'fas fa-bug', color: '#3ddc84' },
  { label: 'Web Dev', icon: 'fas fa-globe', color: '#3ddc84' },
  { label: 'Responsive', icon: 'fas fa-mobile-alt', color: '#3ddc84' },
  { label: 'MS Excel', icon: 'fas fa-file-excel', color: '#217346' },
  { label: 'PowerPoint', icon: 'fas fa-file-powerpoint', color: '#d24726' },
]

function TimelineItem({ exp, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal-up relative pb-6 last:pb-0 group"
      style={{ transitionDelay: `${delay}ms`, paddingLeft: 28 }}
    >
      {/* Vertical line */}
      <div
        className="absolute top-5 bottom-0 w-px"
        style={{
          left: 11,
          background: 'linear-gradient(to bottom, rgba(61,220,132,0.35), transparent)',
        }}
      />

      {/* Dot */}
      <div
        className="absolute top-1.5 flex items-center justify-center rounded-full border-2"
        style={{
          left: 0,
          width: 22,
          height: 22,
          borderColor: exp.current ? '#3ddc84' : 'rgba(61,220,132,0.35)',
          background: exp.current ? '#3ddc84' : '#0B3D2E',
          boxShadow: exp.current ? '0 0 12px rgba(61,220,132,0.5)' : 'none',
        }}
      >
        {exp.current && <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0B3D2E' }} />}
      </div>

      {/* Content */}
      <div className="group-hover:translate-x-1 transition-transform duration-300">
        <div className="flex items-center gap-2 mb-1">
          <span
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#3ddc84',
              background: 'rgba(61,220,132,0.1)',
              border: '1px solid rgba(61,220,132,0.2)',
              padding: '2px 9px',
              borderRadius: 50,
              fontFamily: "'Syne',sans-serif",
            }}
          >
            {exp.year}
          </span>
          {exp.current && (
            <span
              style={{
                fontSize: 8,
                fontWeight: 900,
                textTransform: 'uppercase',
                color: '#0B3D2E',
                background: '#3ddc84',
                padding: '2px 8px',
                borderRadius: 50,
                fontFamily: "'Syne',sans-serif",
              }}
            >
              Active
            </span>
          )}
        </div>
        <h4
          className="font-display font-bold text-white mb-0.5"
          style={{ fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)' }}
        >
          {exp.role}
        </h4>
        <p className="text-accent font-medium mb-0.5" style={{ fontSize: 13 }}>
          {exp.company}
        </p>
        <p className="text-accent-muted mb-1.5" style={{ fontSize: 11 }}>
          <i className="fas fa-map-marker-alt mr-1" style={{ fontSize: 9 }} />
          {exp.location}
        </p>
        <p className="text-accent-muted leading-relaxed" style={{ fontSize: 12, lineHeight: 1.65 }}>
          {exp.desc}
        </p>
      </div>
    </div>
  )
}

function StackIcon({ item, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal-up stack-item flex flex-col items-center gap-1.5 cursor-default"
      style={{ transitionDelay: `${delay}ms`, width: 62 }}
    >
      <div
        className="stack-icon-wrap w-12 h-12 rounded-xl flex items-center justify-center text-xl"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <i className={item.icon} style={{ color: item.color }} />
      </div>
      <span
        className="stack-label text-center leading-tight font-display font-semibold"
        style={{ fontSize: 9, color: '#a8c4b8' }}
      >
        {item.label}
      </span>
    </div>
  )
}

export default function ExperienceSection() {
  const headRef = useReveal()
  const stackHead = useReveal()

  return (
    <section
      id="experience"
      style={{
        minHeight: '100vh',
        background: 'rgba(7,31,23,0.35)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(61,220,132,0.4), transparent)' }}
      />

      <div className="container-custom w-full py-6">
        {/* Header */}
        <div ref={headRef} className="reveal-up mb-8">
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(61,220,132,0.1)',
              border: '1px solid rgba(61,220,132,0.22)',
              color: '#3ddc84',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '5px 14px',
              borderRadius: 50,
              fontFamily: "'Syne',sans-serif",
              marginBottom: 12,
            }}
          >
            <i className="fas fa-briefcase" style={{ fontSize: 9 }} /> Background
          </span>
            <h2 className="section-title text-white mb-2 font-display font-extrabold leading-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.01em', lineHeight: 1.13 }}>
              Experience &amp; <span className="text-gradient" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.5rem)', fontWeight: 900 }}>Tech Stack</span>
            </h2>
          <p className="section-subtitle">
            My professional journey and the technologies I use to build great experiences.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: 'rgba(61,220,132,0.12)',
                  border: '1px solid rgba(61,220,132,0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <i className="fas fa-timeline text-accent" style={{ fontSize: 12 }} />
              </div>
              <h3
                className="font-display font-bold text-accent tracking-widest uppercase"
                style={{ fontSize: 11 }}
              >
                Work History
              </h3>
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
            </div>
            <div>
              {EXPERIENCES.map((exp, i) => (
                <TimelineItem key={exp.role} exp={exp} delay={i * 70} />
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div ref={stackHead} className="reveal-up flex items-center gap-3 mb-5">
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: 'rgba(61,220,132,0.12)',
                  border: '1px solid rgba(61,220,132,0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <i className="fas fa-code text-accent" style={{ fontSize: 12 }} />
              </div>
              <h3
                className="font-display font-bold text-accent tracking-widest uppercase"
                style={{ fontSize: 11 }}
              >
                Tech Stack
              </h3>
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {STACK.map((item, i) => (
                <StackIcon key={item.label} item={item} delay={i * 40} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
