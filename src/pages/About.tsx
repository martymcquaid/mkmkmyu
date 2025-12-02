export default function About(): JSX.Element {
  return (
    <section className="p-6 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-serif mb-4">Est. 1989 — Crafting Sharp Looks</h2>
      <p className="mb-4">Tradition, craftsmanship, and community sit at the heart of our barber shop. Our barbers bring decades of experience to every cut, shave, and grooming service.</p>
      <div className="flex items-center space-x-4">
        <span className="inline-block w-12 h-12 bg-[#C9A66B] rounded" aria-label="badge"/>
        <p>Meet our team of master barbers and discover the philosophy behind our craft.</p>
      </div>
    </section>
  )
}
