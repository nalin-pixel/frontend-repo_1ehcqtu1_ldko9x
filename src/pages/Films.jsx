export default function Films() {
  const films = [
    {
      title: 'Emma & Noah — Seaside Vows',
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      url: 'https://player.vimeo.com/video/76979871?h=8272103f6e'
    },
    {
      title: 'Ava & Liam — Forest Ceremony',
      thumbnail: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
      url: 'https://player.vimeo.com/video/357274789'
    },
    {
      title: 'Mia & Oliver — City Elopement',
      thumbnail: 'https://images.unsplash.com/photo-1519223400710-6da8ec29ce92?q=80&w=1200&auto=format&fit=crop',
      url: 'https://player.vimeo.com/video/148751763'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-white">Selected Films</h1>
      <p className="mt-3 text-slate-300">A few favorites that showcase our storytelling and style.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {films.map((f, idx) => (
          <a key={idx} href={f.url} target="_blank" rel="noreferrer" className="group block">
            <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src={f.thumbnail} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="mt-3 text-white font-medium group-hover:underline">{f.title}</h3>
          </a>
        ))}
      </div>
    </div>
  )
}
