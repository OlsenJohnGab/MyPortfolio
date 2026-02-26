import { useEffect, useRef } from 'react'
import GraduationPic from '../assets/images/GraduationPic.jpg'

function useRevealImmediate(delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
    const t = setTimeout(() => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 120 + delay)
    return () => clearTimeout(t)
  }, [])
  return ref
}

export default function HeroSection({ onNavigate }) {
  const r1 = useRevealImmediate(0)
  const r2 = useRevealImmediate(120)
  const r3 = useRevealImmediate(240)
  const r4 = useRevealImmediate(360)
  const ringRef = useRef(null)

  // Spinning ring via requestAnimationFrame
  useEffect(() => {
    let deg = 0
    let rafId
    const tick = () => {
      deg = (deg + 0.45) % 360
      if (ringRef.current) {
        ringRef.current.style.background =
          `conic-gradient(#3ddc84 0deg ${deg}deg, rgba(61,220,132,0.12) ${deg}deg 360deg)`
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <section
  id="home"
  className="snap-section bg-mesh min-h-screen flex flex-col relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-[-80px] right-[-160px] w-[520px] h-[520px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(61,220,132,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[40px] left-[-80px] w-[380px] h-[380px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(42,184,105,0.06) 0%, transparent 70%)' }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
           style={{
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
             backgroundSize: '64px 64px'
           }} />

      {/* ── Main content — fills remaining height ── */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="container-custom w-full">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 lg:gap-24">

            {/* ── Left: Text ── */}
            <div className="flex-1 text-center md:text-left">

              {/* Role pill */}
              <div ref={r1} className="mb-5">
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(61,220,132,0.1)', border: '1px solid rgba(61,220,132,0.22)',
                  color: '#3ddc84', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
                  textTransform: 'uppercase', padding: '6px 16px', borderRadius: 50,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3ddc84', animation: 'blink 2s ease infinite', display: 'inline-block' }} />
                  Front-End Developer &amp; CS Graduate
                </span>
              </div>

              {/* Main heading — large, bold, tight */}
              <div ref={r2} className="mb-5">
                <h1 className="hero-title text-white font-display font-extrabold leading-tight mb-2"
                    style={{ fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', letterSpacing: '-0.01em', lineHeight: 1.13 }}>
                  Hi, I'm<br />
                  <span className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.2rem)', fontWeight: 900 }}>Olsen John</span><br />
                  <span style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(1.5rem, 4vw, 2.6rem)', fontWeight: 700 }}>Gabriel Provido</span>
                </h1>
              </div>

              {/* Description */}
              <div ref={r3} className="mb-8">
                <p className="text-accent-muted leading-relaxed mx-auto md:mx-0 mb-8"
                   style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', lineHeight: 1.85, maxWidth: 460 }}>
                  I build modern, scalable, and user-friendly digital experiences.
                  Passionate about clean UI, functional code, and delivering real value through technology.
                  Currently exploring opportunities in front-end development and software engineering and Learning Data Analyts.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <button onClick={() => onNavigate('about')} className="btn-primary">
                    <i className="fas fa-arrow-down text-xs" />
                    Learn More
                  </button>
                  <button onClick={() => onNavigate('projects')} className="btn-outline">
                    <i className="fas fa-code text-xs" />
                    View Projects
                  </button>
                </div>
              </div>

              {/* Stats row */}
              <div ref={r4}
                   className="flex gap-8 justify-center md:justify-start flex-wrap pt-6"
                   style={{ borderTop: '1px solid rgba(255,255,255,0.09)' }}>
                {[
                  { num: '3+',  label: 'Projects' },
                  { num: '1+',  label: 'Yr Experience' },
                  { num: 'BSCS', label: 'Computer Science' },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <div className="font-display font-black text-gradient leading-none"
                         style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>{num}</div>
                    <div className="text-accent-muted text-xs mt-1 tracking-wide">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Photo ── */}
            <div className="flex-shrink-0">
              <div className="relative"
                   style={{ width: 'clamp(180px, 28vw, 300px)', height: 'clamp(180px, 28vw, 300px)' }}>
                {/* Spinning accent ring */}
                <div ref={ringRef}
                     className="absolute inset-0 rounded-full"
                     style={{ padding: 3, borderRadius: '50%' }}>
                  <div className="w-full h-full rounded-full"
                       style={{ background: '#0B3D2E' }} />
                </div>

                {/* Photo placeholder */}
                <div className="absolute rounded-full overflow-hidden flex flex-col items-center justify-center gap-2"
                     style={{
                       inset: 5,
                       background: 'linear-gradient(135deg, #0e4f3a, #071f17)',
                       border: '1px solid rgba(61,220,132,0.15)',
                     }}>
                  {/* Photo */}
                <div className="absolute inset-5 rounded-full overflow-hidden flex items-center justify-center"
                  style={{
                    border: '1px solid rgba(61,220,132,0.15)',
                   }}>
                <img 
                 src={GraduationPic} 
                  alt="Olsen Graduation" 
                 className="w-full h-full object-cover"
                 />
                </div>
                </div>
                {/* ...badges removed as requested... */}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll hint */}
    </section>
  )
}
