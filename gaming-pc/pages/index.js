import Nav from '../components/Nav'
import Link from 'next/link'

export default function Home() {
  const sections = [
    { title: 'أجهزة الألعاب', href: '/consoles', desc: 'PS2 • PS3 • PS4 • PS5 • Xbox' },
    { title: 'الحواسيب وقطع الغيار', href: '/shop', desc: 'GPU • RAM • Motherboard • SSD' },
    { title: 'المتجر', href: '/shop', desc: 'كل المنتجات المتوفرة' },
    { title: 'اصنع حاسوبك', href: '/configurator', desc: 'اختار المكونات وشوف السعر' },
    { title: 'اتصل بنا', href: '/contact', desc: 'تواصل معنا للطلب والدعم' }
  ]

  return (
    <div className="min-h-screen text-gray-100 bg-gradient-to-b from-darkbg to-black">
      <Nav />
      <main className="max-w-6xl mx-auto p-6">
        <section className="mt-8 bg-gradient-to-br from-black/70 to-gold/5 rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gold">عالم الحواسيب والألعاب بين يديك</h1>
            <p className="mt-4 text-gray-300">كل ما تحتاجه من أجهزة ومكونات أصلية وبالأسعار بالدينار الجزائري (DZD).</p>
            <div className="mt-6 flex gap-4">
              <Link href="/shop"><a className="px-6 py-3 rounded-2xl bg-gold text-black font-semibold">تسوق الآن</a></Link>
              <Link href="/configurator"><a className="px-6 py-3 rounded-2xl border border-gold text-gold">اصنع حاسوبك</a></Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full h-60 bg-black/40 rounded-xl flex items-center justify-center text-gold text-xl">صورة بانر هنا (يمكن استبدالها)</div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {sections.map((s, i) => (
            <Link key={i} href={s.href}>
              <a className="block bg-gradient-to-br from-black/60 to-black/30 border border-gold/30 rounded-xl p-6 hover:scale-105 transform transition">
                <h3 className="text-2xl font-bold text-gold">{s.title}</h3>
                <p className="mt-2 text-gray-300">{s.desc}</p>
              </a>
            </Link>
          ))}
        </section>

      </main>

      <footer className="mt-16 border-t border-gold/30 py-6 text-center text-gray-400">
        © 2025 Golden PC DZ - جميع الحقوق محفوظة
      </footer>
    </div>
  )
}