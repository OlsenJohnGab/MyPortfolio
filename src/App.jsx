import { useState, useEffect, useCallback, useRef } from 'react'
import Navbar        from './components/Navbar'
import DotNav        from './components/DotNav'
import Footer        from './components/Footer'
import HeroSection       from './sections/HeroSection'
import ProjectsSection   from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import AboutSection      from './sections/AboutSection'

const NAV_ORDER = { home: 0, projects: 1, experience: 2, about: 3 }
const NAV_IDS   = ['home', 'projects', 'experience', 'about']

export default function App() {
  const [active, setActive] = useState('home')
  const prevId              = useRef('home')

  // Track active section based on snap container scroll position
  useEffect(() => {
    const attachListener = () => {
      const container = document.getElementById('snap-container')
      if (!container) return

      const fn = () => {
        const mid = container.scrollTop + container.clientHeight / 2
        for (const id of [...NAV_IDS].reverse()) {
          const el = document.getElementById(id)
          if (el && el.offsetTop <= mid) {
            if (prevId.current !== id) {
              setActive(id)
              prevId.current = id
            }
            break
          }
        }
      }

      container.addEventListener('scroll', fn, { passive: true })
      return () => container.removeEventListener('scroll', fn)
    }
    const cleanup = setTimeout(attachListener, 100)
    return () => clearTimeout(cleanup)
  }, [])

  const handleNavigate = useCallback((targetId) => {
    if (targetId === prevId.current) return
    prevId.current = targetId
    setActive(targetId)
    // Scroll to the section with the given id
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    // Outer wrapper: maximize height/width, no slide transition
    <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Fixed navbar sits above everything */}
      <Navbar onNavigate={handleNavigate} active={active} />

      {/* Right-side dot navigation */}
      <DotNav active={active} onNavigate={handleNavigate} />

      {/* Main content with scroll-snap, maximized */}
      <main
        id="snap-container"
        style={{
          position: 'absolute',
          top: 68,      /* below navbar */
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: 'calc(100vh - 68px)',
          overflowY: 'scroll',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Custom scrollbar styling */}
        <style>{`
          #snap-container::-webkit-scrollbar {
            width: 10px;
            background: rgba(7,31,23,0.7);
          }
          #snap-container::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #3ddc84 0%, #0e4f3a 100%);
            border-radius: 8px;
            border: 2px solid rgba(7,31,23,0.7);
          }
          #snap-container::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #2ab869 0%, #3ddc84 100%);
          }
          #snap-container::-webkit-scrollbar-track {
            background: rgba(7,31,23,0.2);
            border-radius: 8px;
          }
        `}</style>
        <HeroSection onNavigate={handleNavigate} />
        <ProjectsSection />
        {/* Remove scrollbar in ExperienceSection via prop */}
        <ExperienceSection hideScrollbar />
        <AboutSection/>
        <Footer />
      </main>
    </div>
  )
}
