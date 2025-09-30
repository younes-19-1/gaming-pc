import Nav from '../components/Nav'

const sampleProducts = [
  { id:1, title:'RTX 4070', price: 180000, desc:'كارت شاشة قوي' },
  { id:2, title:'Intel i7 12700', price: 90000, desc:'بروسيسور عالي الأداء' },
  { id:3, title:'RAM 32GB', price: 25000, desc:'ذاكرة DDR4' },
]

export default function Shop(){
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Nav />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl text-gold font-bold">المتجر</h1>
        <p className="mt-2 text-gray-300">الأسعار بالدينار الجزائري (DZD).</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {sampleProducts.map(p=>(
            <div key={p.id} className="p-6 border border-gold/20 rounded-xl bg-gradient-to-br from-black/60 to-black/30">
              <div className="h-40 bg-black/40 rounded-md flex items-center justify-center text-gold">{p.title}</div>
              <h3 className="mt-4 font-bold text-xl text-gold">{p.title}</h3>
              <p className="mt-2 text-gray-300">{p.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-gold font-semibold">{p.price.toLocaleString()} DZD</div>
                <button className="px-4 py-2 rounded bg-gold text-black">أضف للسلة</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}