import Link from 'next/link'
export default function Nav() {
  return (
    <header className="w-full border-b border-gold/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-6">
        <div className="text-gold font-bold text-2xl">Golden PC DZ</div>
        <nav className="space-x-6 text-gray-200 hidden md:flex">
          <Link href="/"><a className="hover:text-white">الرئيسية</a></Link>
          <Link href="/consoles"><a className="hover:text-white">أجهزة الألعاب</a></Link>
          <Link href="/shop"><a className="hover:text-white">المتجر</a></Link>
          <Link href="/configurator"><a className="hover:text-white">اصنع حاسوبك</a></Link>
          <Link href="/contact"><a className="hover:text-white">اتصل بنا</a></Link>
        </nav>
      </div>
    </header>
  )
}