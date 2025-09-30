import Nav from '../components/Nav'
import Link from 'next/link'

export default function Consoles() {
  const consoles = [
    { name: 'PS5', desc: 'PlayStation 5' },
    { name: 'PS4', desc: 'PlayStation 4' },
    { name: 'Xbox One', desc: 'Xbox One' },
    { name: 'Xbox 360', desc: 'Xbox 360' }
  ]
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Nav />
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl text-gold font-bold">أجهزة الألعاب</h1>
        <p className="mt-2 text-gray-300">مجموعة من الأجهزة والإكسسوارات.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {consoles.map((c,i)=>(
            <div key={i} className="p-6 border border-gold/20 rounded-xl">
              <h3 className="text-xl font-semibold text-gold">{c.name}</h3>
              <p className="text-gray-300 mt-2">{c.desc}</p>
              <div className="mt-4"><button className="px-4 py-2 rounded bg-gold text-black">عرض المنتجات</button></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}