import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/10'
    }`

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-white font-semibold tracking-wide">
            <span className="text-xl">Eternal Films</span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/films" className={navLinkClass}>Films</NavLink>
            <NavLink to="/style" className={navLinkClass}>Our Style</NavLink>
            <NavLink to="/contact" className="ml-2 px-4 py-2 text-sm font-semibold bg-white text-slate-900 rounded-md hover:bg-slate-100 transition-colors">Contact</NavLink>
          </nav>

          <button
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/90 border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/films" className={navLinkClass} onClick={() => setOpen(false)}>Films</NavLink>
            <NavLink to="/style" className={navLinkClass} onClick={() => setOpen(false)}>Our Style</NavLink>
            <NavLink to="/contact" className="block px-4 py-2 text-sm font-semibold bg-white text-slate-900 rounded-md hover:bg-slate-100 transition-colors" onClick={() => setOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
