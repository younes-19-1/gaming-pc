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
    <div className="min-h-screen bg-black text-white">
      {/* Nav مؤقت */}
      <nav className="p-4 bg-gray-900 text-gold font-bold text-xl">
        Golden PC DZ
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        <section className="mt-8 bg-gray-800 rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400">عالم الحواسيب والألعاب بين يديك</h1>
            <p className="mt-4 text-gray-300">كل ما تحتاجه من أجهزة ومكونات أصلية وبالأسعار بالدينار الجزائري (DZD).</p>
            <div className="mt-6 flex gap-4">
              <Link href="/shop" className="px-6 py-3 rounded-2xl bg-yellow-400 text-black font-semibold">تسوق الآن</Link>
              <Link href="/configurator" className="px-6 py-3 rounded-2xl border border-yellow-400 text-yellow-400">اصنع حاسوبك</Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full h-60 bg-black/40 rounded-xl flex items-center justify-center text-yellow-400 text-xl">
              صورة بانر هنا (يمكن استبدالها)
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {sections.map((s, i) => (
            <Link key={i} href={s.href} className="block bg-gray-900 border border-yellow-400/30 rounded-xl p-6 hover:scale-105 transform transition">
              <h3 className="text-2xl font-bold text-yellow-400">{s.title}</h3>
              <p className="mt-2 text-gray-300">{s.desc}</p>
            </Link>
          ))}
        </section>
      </main>

      <footer className="mt-16 border-t border-yellow-400/30 py-6 text-center text-gray-400">
        © 2025 Golden PC DZ - جميع الحقوق محفوظة
      </footer>
    </div>
  )
}
