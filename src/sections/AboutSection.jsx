import { useReveal } from '../hooks/useReveal'

const HIGHLIGHTS = [
  { icon: 'fas fa-graduation-cap', label: 'BSCS Graduate',  sub: 'Notre Dame of Dadiangas University' },
  { icon: 'fas fa-map-marker-alt', label: 'Based in',        sub: 'General Santos, Philippines' },
  { icon: 'fas fa-envelope',       label: 'Email',           sub: 'providoolsen@gmail.com' },
  { icon: 'fas fa-phone',          label: 'Phone',           sub: '0977-137-6730' },
]

export default function AboutSection() {
  const headRef = useReveal()
  const bodyRef = useReveal()
  const cardRef = useReveal()
  const ctaRef  = useReveal()

  return (
    <section id="about" className="snap-section overflow-hidden"
             style={{ background: 'rgba(0,0,0,0.12)' }}>
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-px"
           style={{ background: 'linear-gradient(90deg, transparent, rgba(61,220,132,0.4), transparent)' }} />

      {/* Background glow blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
           style={{
             width: 600, height: 350,
             background: 'radial-gradient(ellipse, rgba(61,220,132,0.05) 0%, transparent 70%)',
           }} />

      <div className="flex-1 flex items-center relative z-10" >
        <div className="container-custom w-full">
          <div className="max-w-2xl mx-auto text-center">

            {/* ── Header ── */}
            <div ref={headRef} className="reveal-up mb-6">
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(61,220,132,0.1)', border: '1px solid rgba(61,220,132,0.22)',
                color: '#3ddc84', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em',
                textTransform: 'uppercase', padding: '5px 14px', borderRadius: 50,
                fontFamily: "'Syne',sans-serif", marginBottom: 14,
              }}>
                <i className="fas fa-user" style={{ fontSize: 9 }} /> Who I Am
              </span>
              <h2 className="section-title text-white">
                About <span className="text-gradient">Me</span>
              </h2>
            </div>

            {/* ── Bio ── */}
            <div ref={bodyRef} className="reveal-up mb-6" style={{ transitionDelay: '90ms' }}>
              <p className="text-accent-muted mb-4"
                 style={{ fontSize: 'clamp(0.88rem, 1.4vw, 1rem)', lineHeight: 1.85 }}>
                I'm <strong className="text-white font-semibold">Olsen John Gabriel Provido</strong>, a
                Computer Science graduate from Notre Dame of Dadiangas University, Philippines.
                I specialize in front-end web development with hands-on experience building
                real-world systems — from construction monitoring tools to ML classifiers.
              </p>
              <p className="text-accent-muted mb-4"
                 style={{ fontSize: 'clamp(0.88rem, 1.4vw, 1rem)', lineHeight: 1.85 }}>
                I thrive in collaborative environments, value clean and maintainable code,
                and am always eager to pick up new technologies. Currently working in
                HR Technology Support at Min-Asia Dressing Plant.
              </p>
              <p className="text-accent-muted"
                 style={{ fontSize: 'clamp(0.88rem, 1.4vw, 1rem)', lineHeight: 1.85 }}>
                My goal is to grow as a full-stack developer and contribute to impactful
                digital products — combining strong problem-solving ability with a
                professional, growth-oriented attitude.
              </p>
            </div>

            {/* ── Info cards ── */}
            <div ref={cardRef} className="reveal-up grid grid-cols-2 gap-3 mb-6 text-left"
                 style={{ transitionDelay: '180ms' }}>
              {HIGHLIGHTS.map(({ icon, label, sub }) => (
                <div key={label}
                     className="flex items-center gap-3 group transition-all duration-300 hover:-translate-y-0.5"
                     style={{
                       padding: '12px 16px', borderRadius: 14,
                       background: 'rgba(14,79,58,0.5)',
                       border: '1px solid rgba(255,255,255,0.07)',
                     }}
                     onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(61,220,132,0.25)'}
                     onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(61,220,132,0.1)', border: '1px solid rgba(61,220,132,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <i className={`${icon} text-accent`} style={{ fontSize: 13 }} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-accent-muted uppercase tracking-widest"
                         style={{ fontSize: 9, marginBottom: 2 }}>{label}</div>
                    <div className="font-display font-semibold text-white/90"
                         style={{ fontSize: 12 }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
