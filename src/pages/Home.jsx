import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="relative">
      <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover opacity-40" autoPlay loop muted playsInline>
          <source src="https://cdn.coverr.co/videos/coverr-wedding-day-2114/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Cinematic Wedding Films</h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            We tell love stories with timeless visuals and authentic emotion.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="/films" className="px-5 py-3 bg-white text-slate-900 font-semibold rounded-md hover:bg-slate-100">Watch Films</a>
            <a href="/contact" className="px-5 py-3 bg-white/10 text-white border border-white/20 rounded-md hover:bg-white/20">Inquire</a>
          </div>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-slate-200">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white text-lg font-semibold">Story-Driven</h3>
            <p className="text-slate-300 text-sm mt-2">Your film is crafted around your unique connection and celebration.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white text-lg font-semibold">Cinematic Look</h3>
            <p className="text-slate-300 text-sm mt-2">Atmospheric visuals, intentional composition, and emotive soundtracks.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white text-lg font-semibold">Personal Experience</h3>
            <p className="text-slate-300 text-sm mt-2">From first call to delivery, we make the process easy and enjoyable.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
