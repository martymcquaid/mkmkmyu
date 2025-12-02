export default function Services(): JSX.Element {
  const items = [
    { id:'haircuts', title:'Haircuts', desc:'Traditional cuts with modern finish.' },
    { id:'beard', title:'Beard Trims', desc:'Sharp shaping and grooming.' },
    { id:'hot-towel', title:'Hot Towel Shave', desc:'Classic straight-razor shave.' },
    { id:'skin-fade', title:'Skin Fade', desc:'Skin-tight fades with precision.' },
    { id:'package', title:'Grooming Package', desc:'The Gentleman’s package.' }
  ]
  return (
    <section className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(s => (
        <div key={s.id} className="border border-white/20 rounded p-4 bg-black/10">
          <div className="h-12 w-12 mb-2 bg-[#8B1E23] rounded"/>
          <h3 className="font-serif text-xl mb-1">{s.title}</h3>
          <p className="text-sm text-slate-300 mb-3">{s.desc}</p>
          <button className="px-3 py-1 bg-[#8B1E23] rounded">Learn More</button>
        </div>
      ))}
    </section>
  )
}
