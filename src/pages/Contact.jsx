import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log('Contact form:', data)
    setSubmitted(true)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h1>
      <p className="mt-3 text-slate-300">Tell us a little about your day. We'll be in touch within 24 hours.</p>

      {submitted ? (
        <div className="mt-8 bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 p-4 rounded-lg">
          Thank you for your inquiry. We'll reach out soon!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <label className="block text-sm text-slate-300 mb-1">Your Name</label>
              <input name="name" required className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/30 shadow-[inset_0_0_0_9999px_rgba(255,255,255,0.02)]" placeholder="Jane Doe" />
            </div>
            <div className="group">
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input type="email" name="email" required className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/30 shadow-[inset_0_0_0_9999px_rgba(255,255,255,0.02)]" placeholder="you@email.com" />
            </div>
            <div className="group md:col-span-2">
              <label className="block text-sm text-slate-300 mb-1">Wedding Date</label>
              <input name="date" className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/30 shadow-[inset_0_0_0_9999px_rgba(255,255,255,0.02)]" placeholder="MM/DD/YYYY" />
            </div>
            <div className="group md:col-span-2">
              <label className="block text-sm text-slate-300 mb-1">Message</label>
              <textarea name="message" rows="5" className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/30 shadow-[inset_0_0_0_9999px_rgba(255,255,255,0.02)]" placeholder="Tell us about your celebration..." />
            </div>
          </div>

          <div className="mt-6">
            <button type="submit" className="px-5 py-3 bg-white text-slate-900 font-semibold rounded-md hover:bg-slate-100">Send Inquiry</button>
          </div>
        </form>
      )}

      <div className="mt-12 text-slate-400 text-sm">
        Prefer your own CSS form? Add it below:
        <form className="mt-4 custom-css-form">
          <div className="row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
          </div>
          <textarea rows="4" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>

      <style>{`
        .custom-css-form { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.12); padding: 16px; border-radius: 12px; }
        .custom-css-form .row { display: grid; grid-template-columns: 1fr; gap: 12px; }
        .custom-css-form input, .custom-css-form textarea { width: 100%; background: transparent; border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 10px 12px; border-radius: 10px; outline: none; }
        .custom-css-form input::placeholder, .custom-css-form textarea::placeholder { color: #8ea0b5; }
        .custom-css-form button { margin-top: 10px; background: #fff; color: #0f172a; font-weight: 600; padding: 10px 16px; border-radius: 10px; }
        @media (min-width: 768px) { .custom-css-form .row { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </div>
  )
}
