export default function Gallery(): JSX.Element {
  const tiles = Array.from({length:6}).map((_,i)=>i)
  return (
    <section className="p-6 max-w-6xl mx-auto overflow-x-auto whitespace-nowrap snap-x snap-mandatory">
      {tiles.map(i => (
        <div key={i} className="inline-block w-64 h-40 mr-4 align-top bg-gradient-to-br from-slate-700 to-slate-900 rounded shadow" style={{display:'inline-block'}}>
          <div className="h-full w-full flex items-center justify-center text-slate-300">Photo {i+1}</div>
        </div>
      ))}
    </section>
  )
}
