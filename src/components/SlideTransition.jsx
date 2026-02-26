import { useState, useEffect } from 'react'

/**
 * SlideTransition
 * ─ A full-screen dark panel sweeps across the viewport when a
 *   nav link is clicked, hiding the scroll-jump entirely.
 *
 * direction: "right" → navigating forward  (panel comes from right side)
 *            "left"  → navigating backward (panel comes from left side)
 *
 * Timeline:
 *   0 ms   – panel starts off-screen (enter side)
 *   0→320  – panel slides to cover full screen  (step "in")
 *   320 ms – onMidpoint fires → scroll teleport happens invisibly
 *   360 ms – panel slides away to exit side     (step "out")
 *   720 ms – component unmounts
 */
export default function SlideTransition({ triggerKey, direction, onMidpoint }) {
  const [step, setStep] = useState(0)
  // 0=idle, 1=sliding in, 2=fully visible, 3=sliding out

  useEffect(() => {
    if (!triggerKey) return

    setStep(1)
    const t1 = setTimeout(() => { setStep(2); onMidpoint?.() }, 320)
    const t2 = setTimeout(() => setStep(3), 360)
    const t3 = setTimeout(() => setStep(0), 720)

    return () => [t1, t2, t3].forEach(clearTimeout)
  }, [triggerKey])

  if (step === 0) return null

  const enterFrom = direction === 'right' ? '100%'  : '-100%'
  const exitTo    = direction === 'right' ? '-100%' : '100%'

  let tx
  if (step === 1) tx = `translateX(${enterFrom})`
  if (step === 2) tx = 'translateX(0)'
  if (step === 3) tx = `translateX(${exitTo})`

  const dur  = step === 1 ? '0.32s' : step === 3 ? '0.34s' : '0s'
  const ease = 'cubic-bezier(0.77,0,0.175,1)'

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#071f17',
        pointerEvents: step === 0 ? 'none' : 'all',
        transform: tx,
        transition: `transform ${dur} ${ease}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Loading dots shown while fully covering */}
      {step === 2 && (
        <div style={{ display: 'flex', gap: 10 }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#3ddc84',
                animation: `dotBounce 0.6s ease ${i * 0.12}s infinite alternate`,
              }}
            />
          ))}
          <style>{`
            @keyframes dotBounce {
              from { transform: translateY(0); opacity: 0.4; }
              to   { transform: translateY(-8px); opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </div>
  )
}
