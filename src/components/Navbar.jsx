import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/logos', label: 'Work', icon: '/work.png' },
  { to: '/comics', label: 'Comics', icon: '/shop.png' },
]

const externalItems = [
  { href: 'mailto:nikheemskerk@gmail.com', label: 'Contact', icon: '/contact.png' },
  { href: 'https://www.instagram.com/nikheemskerk/', label: 'Instagram', icon: '/instagram.png', external: true },
]

const iconClass = 'h-7 w-auto opacity-75 transition-all duration-200 hover:scale-105 hover:opacity-100'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <NavLink to="/" className="block" onClick={() => setOpen(false)}>
            <img src="/home.png" alt="Nik Heemskerk" className="h-7 w-auto opacity-90 transition-all duration-200 hover:opacity-100" />
          </NavLink>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className="block" onClick={() => setOpen(false)}>
                  {({ isActive }) => (
                    <img
                      src={item.icon}
                      alt={item.label}
                      className={`${iconClass} ${isActive ? 'opacity-100' : ''}`}
                    />
                  )}
                </NavLink>
              </li>
            ))}
            {externalItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <img src={item.icon} alt={item.label} className={iconClass} />
                </a>
              </li>
            ))}
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
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 overflow-y-auto bg-cream px-6 py-24 md:hidden">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className="block" onClick={() => setOpen(false)}>
              {({ isActive }) => (
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`h-10 w-auto transition-all duration-200 ${isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                />
              )}
            </NavLink>
          ))}
          {externalItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="block"
              onClick={() => setOpen(false)}
            >
              <img src={item.icon} alt={item.label} className="h-10 w-auto opacity-80 transition-all duration-200 hover:opacity-100" />
            </a>
          ))}
        </div>
      )}
    </>
  )
}
