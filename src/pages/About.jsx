export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24 text-slate-200">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop" alt="Behind the scenes" className="rounded-xl border border-white/10" />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">About Us</h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            We are a small team of filmmakers dedicated to telling authentic wedding stories.
            Our approach is unobtrusive, allowing moments to unfold naturally while we capture
            the emotion, energy, and beauty of your day.
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            With backgrounds in documentary and narrative filmmaking, we blend cinematic visuals
            with heartfelt storytelling to create films that feel true to you.
          </p>
        </div>
      </div>
    </div>
  )
}
