const SECTIONS = [
  { id: 'home',       label: 'Home'       },
  { id: 'projects',   label: 'Projects'   },
  { id: 'experience', label: 'Experience' },
  { id: 'about',      label: 'About'      },
]

export default function DotNav({ active, onNavigate }) {
  return (
    <div className="dot-nav">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onNavigate(id)}
          className={`dot-nav-item ${active === id ? 'active' : ''}`}
          aria-label={`Go to ${label}`}
          title={label}
        />
      ))}
    </div>
  )
}
