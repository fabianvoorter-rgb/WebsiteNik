import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  `transition-colors hover:text-ink ${isActive ? 'text-ink' : 'text-muted'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <NavLink to="/" className="text-lg font-bold tracking-tight uppercase" onClick={() => setOpen(false)}>
            Nik Heemskerk
          </NavLink>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 text-sm font-medium uppercase tracking-widest md:flex">
            <li><NavLink to="/" className={linkClass}>Work</NavLink></li>
            <li><NavLink to="/comics" className={linkClass}>Comics</NavLink></li>
            <li><NavLink to="/logos" className={linkClass}>Logo&apos;s</NavLink></li>
            <li>
              <a href="mailto:nikheemskerk@gmail.com" className="text-muted transition-colors hover:text-ink">
                Contact
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nikheemskerk/" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-ink">
                Instagram
              </a>
            </li>
          </ul>

          {/* Hamburger button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-ink transition-all ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay: rendered outside <header> since backdrop-blur there would
          create a containing block and break this element's fixed positioning */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 overflow-y-auto bg-cream px-6 py-24 text-lg font-medium uppercase tracking-widest md:hidden">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Work</NavLink>
          <NavLink to="/comics" className={linkClass} onClick={() => setOpen(false)}>Comics</NavLink>
          <NavLink to="/logos" className={linkClass} onClick={() => setOpen(false)}>Logo&apos;s</NavLink>
          <a href="mailto:nikheemskerk@gmail.com" className="text-muted transition-colors hover:text-ink" onClick={() => setOpen(false)}>
            Contact
          </a>
          <a href="https://www.instagram.com/nikheemskerk/" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-ink" onClick={() => setOpen(false)}>
            Instagram
          </a>
        </div>
      )}
    </>
  )
}
