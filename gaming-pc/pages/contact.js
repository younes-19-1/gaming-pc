import Nav from '../components/Nav'

export default function Contact(){
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Nav />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl text-gold font-bold">اتصل بنا</h1>
        <p className="mt-2 text-gray-300">تواصل معنا عبر:</p>
        <ul className="mt-4 space-y-2 text-gray-200">
          <li>واتساب: +213 6X XX XX XX</li>
          <li>فايسبوك: /GoldenPCDZ</li>
          <li>الهاتف: 02-XXXXXXX</li>
        </ul>
      </main>
    </div>
  )
}