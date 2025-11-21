export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 py-10 text-slate-300">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold">Eternal Films</h3>
            <p className="text-sm mt-2 text-slate-400">Wedding videography crafted with heart and intention.</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Contact</h4>
            <p className="text-sm mt-2 text-slate-400">Based in Your City • Available Worldwide</p>
            <p className="text-sm text-slate-400">hello@eternalfilms.com</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Follow</h4>
            <div className="flex gap-3 mt-2 text-sm">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Vimeo</a>
              <a href="#" className="hover:text-white">YouTube</a>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-8">© {new Date().getFullYear()} Eternal Films. All rights reserved.</p>
      </div>
    </footer>
  )
}
