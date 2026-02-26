import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Home',       id: 'home'       },
  { label: 'Projects',   id: 'projects'   },
  { label: 'Experience', id: 'experience' },
  { label: 'About',      id: 'about'      },
]

export default function Navbar({ onNavigate, active }) {
  const [scrolled, setScrolled] = useState(false)
  const [drawer,   setDrawer]   = useState(false)

  useEffect(() => {
    // Listen to the snap container scroll instead of window
    const attachListener = () => {
      const container = document.getElementById('snap-container')
      if (!container) return
      const fn = () => setScrolled(container.scrollTop > 10)
      container.addEventListener('scroll', fn, { passive: true })
      return () => container.removeEventListener('scroll', fn)
    }
    const cleanup = attachListener()
    // Also re-attach after a tick in case container isn't ready yet
    const t = setTimeout(() => { cleanup?.(); attachListener() }, 150)
    return () => { clearTimeout(t); cleanup?.() }
  }, [])

  const go = (id) => { setDrawer(false); onNavigate(id) }

  return (
    <>
      {/* ── Fixed top bar ─────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-forest-950/95 backdrop-blur-xl border-b border-accent/10 shadow-[0_4px_40px_rgba(0,0,0,0.45)]'
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <button onClick={() => go('home')}
                    className="font-display font-black text-[1.1rem] tracking-tight bg-transparent border-none cursor-pointer">
              <span className="text-gradient">Olsen</span>
              <span className="text-white/40">.dev</span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const on = active === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => go(item.id)}
                    className={`px-[18px] py-2 rounded-full font-display font-semibold text-[13px]
                                tracking-[0.02em] transition-all duration-300 bg-transparent cursor-pointer ${
                      on
                        ? 'border border-accent/20 !bg-[rgba(61,220,132,0.1)] text-accent'
                        : 'border border-transparent text-white/55 hover:text-white'
                    }`}
                    style={on ? { background:'rgba(61,220,132,0.1)', border:'1px solid rgba(61,220,132,0.22)' } : {}}
                  >
                    {item.label}
                  </button>
                )
              })}
            </nav>

            {/* Hamburger */}
            <button onClick={() => setDrawer((d) => !d)} aria-label="Toggle menu"
                    className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg
                               bg-transparent border-none cursor-pointer hover:bg-white/8 transition-colors duration-200">
              {[0,1,2].map((i) => (
                <span key={i} style={{
                  display:'block', width:24, height:2, background:'#fff', borderRadius:2,
                  transition:'all 0.3s',
                  transform: drawer
                    ? i===0 ? 'rotate(45deg) translate(5px,5px)'
                    : i===2 ? 'rotate(-45deg) translate(5px,-5px)'
                    : 'none'
                    : 'none',
                  opacity: drawer && i===1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* ── Backdrop ──────────────────────────────────────── */}
      <div onClick={() => setDrawer(false)} style={{
        position:'fixed', inset:0, zIndex:298, background:'rgba(0,0,0,0.6)', backdropFilter:'blur(4px)',
        opacity: drawer ? 1 : 0, pointerEvents: drawer ? 'auto' : 'none',
        transition:'opacity 0.35s ease',
      }} className="md:hidden" />

      {/* ── Drawer (slides RIGHT → in) ─────────────────────── */}
      <div style={{
        position:'fixed', top:0, right:0, bottom:0, zIndex:299,
        width:284, background:'#071f17',
        borderLeft:'1px solid rgba(61,220,132,0.12)',
        display:'flex', flexDirection:'column',
        transform: drawer ? 'translateX(0)' : 'translateX(100%)',
        transition:'transform 0.45s cubic-bezier(0.77,0,0.175,1)',
        boxShadow: drawer ? '-16px 0 60px rgba(0,0,0,0.6)' : 'none',
      }}>
        {/* Header */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between',
                      padding:'0 20px', height:68, borderBottom:'1px solid rgba(255,255,255,0.07)', flexShrink:0 }}>
          <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:17 }}>
            <span style={{ background:'linear-gradient(135deg,#3ddc84,#2ab869)',
                           WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Olsen</span>
            <span style={{ color:'rgba(255,255,255,0.4)' }}>.dev</span>
          </span>
          <button onClick={() => setDrawer(false)} style={{
            width:34, height:34, borderRadius:'50%', background:'rgba(255,255,255,0.07)',
            border:'none', cursor:'pointer', color:'rgba(255,255,255,0.55)', fontSize:15,
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>✕</button>
        </div>

        {/* Nav links — stagger in */}
        <nav style={{ flex:1, padding:'24px 14px', display:'flex', flexDirection:'column', gap:6, overflowY:'auto' }}>
          {NAV_ITEMS.map((item, i) => {
            const on = active === item.id
            return (
              <button key={item.id} onClick={() => go(item.id)} style={{
                display:'flex', alignItems:'center', gap:12,
                background: on ? 'rgba(61,220,132,0.12)' : 'none',
                border: on ? '1px solid rgba(61,220,132,0.25)' : '1px solid transparent',
                borderRadius:14, padding:'13px 18px', cursor:'pointer',
                fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:15, textAlign:'left',
                color: on ? '#3ddc84' : 'rgba(255,255,255,0.6)',
                transform: drawer ? 'translateX(0)' : 'translateX(20px)',
                opacity: drawer ? 1 : 0,
                transition: `all 0.35s ease ${i * 55}ms`,
                width:'100%',
              }}>
                <span style={{
                  width:8, height:8, borderRadius:'50%', flexShrink:0,
                  background: on ? '#3ddc84' : 'rgba(255,255,255,0.2)',
                  boxShadow: on ? '0 0 8px rgba(61,220,132,0.6)' : 'none', transition:'all 0.3s',
                }} />
                {item.label}
                {on && <span style={{ marginLeft:'auto', color:'rgba(61,220,132,0.6)', fontSize:10 }}>●</span>}
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div style={{ padding:'18px 18px 32px', borderTop:'1px solid rgba(255,255,255,0.07)', flexShrink:0 }}>
          <a href="mailto:providoolsen@gmail.com" style={{
            display:'flex', justifyContent:'center', width:'100%', textDecoration:'none',
            background:'linear-gradient(135deg,#3ddc84,#2ab869)', color:'#0B3D2E',
            fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:13,
            padding:'13px 26px', borderRadius:50, border:'none',
          }}>✉ Send an Email</a>
          <p style={{ color:'rgba(255,255,255,0.25)', fontSize:11, textAlign:'center', marginTop:12 }}>
            providoolsen@gmail.com
          </p>
        </div>
      </div>
    </>
  )
}
