export default function Booking(): JSX.Element {
  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-serif mb-4">Book an Appointment</h2>
      <form className="grid grid-cols-1 gap-4">
        <input aria-label="name" placeholder="Your Name" className="p-3 rounded bg-white/10 text-white" />
        <input aria-label="email" placeholder="Email" type="email" className="p-3 rounded bg-white/10 text-white" />
        <input aria-label="date" type="date" className="p-3 rounded bg-white/10 text-white" />
        <select aria-label="service" className="p-3 rounded bg-white/10 text-white">
          <option>Haircuts</option>
          <option>Beard Trims</option>
          <option>Hot Towel Shave</option>
          <option>Skin Fade</option>
          <option>Grooming Package</option>
        </select>
        <select aria-label="barber" className="p-3 rounded bg-white/10 text-white">
          <option>Any Barber</option>
          <option>Jamie</option>
          <option>Alex</option>
        </select>
        <button type="submit" className="px-4 py-2 rounded bg-[#8B1E23]">Confirm Booking</button>
      </form>
    </section>
  )
}
