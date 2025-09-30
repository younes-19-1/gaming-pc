import { useState } from 'react'
import Nav from '../components/Nav'

const options = {
  ram: [
    { id:'8', label:'8 GB', price: 8000 },
    { id:'16', label:'16 GB', price: 14000 },
    { id:'32', label:'32 GB', price: 25000 },
  ],
  cpu: [
    { id:'i5', label:'Intel i5', price: 50000 },
    { id:'i7', label:'Intel i7', price: 90000 },
    { id:'r7', label:'Ryzen 7', price: 85000 },
  ],
  gpu: [
    { id:'3060', label:'RTX 3060', price: 120000 },
    { id:'4070', label:'RTX 4070', price: 180000 },
  ],
  storage: [
    { id:'ssd1', label:'SSD 512GB', price: 12000 },
    { id:'hdd1', label:'HDD 1TB', price: 8000 },
  ]
}

export default function Configurator(){
  const [sel, setSel] = useState({
    ram: options.ram[1].id,
    cpu: options.cpu[0].id,
    gpu: options.gpu[0].id,
    storage: options.storage[0].id
  })

  function priceSum(){
    let sum = 0
    Object.keys(sel).forEach(k=>{
      const opt = options[k].find(o=>o.id === sel[k])
      if(opt) sum += opt.price
    })
    return sum
  }

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Nav />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl text-gold font-bold">اصنع حاسوبك</h1>
        <p className="mt-2 text-gray-300">اختر المكونات التي تريد وسيظهر السعر الإجمالي بالدينار الجزائري.</p>

        <div className="mt-6 space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">الرام</label>
            <select value={sel.ram} onChange={e=>setSel({...sel, ram: e.target.value})} className="p-3 rounded bg-black/60 border border-gold/20">
              {options.ram.map(r=> <option key={r.id} value={r.id}>{r.label} - {r.price.toLocaleString()} DZD</option>)}
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">المعالج</label>
            <select value={sel.cpu} onChange={e=>setSel({...sel, cpu: e.target.value})} className="p-3 rounded bg-black/60 border border-gold/20">
              {options.cpu.map(r=> <option key={r.id} value={r.id}>{r.label} - {r.price.toLocaleString()} DZD</option>)}
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">كرت الشاشة</label>
            <select value={sel.gpu} onChange={e=>setSel({...sel, gpu: e.target.value})} className="p-3 rounded bg-black/60 border border-gold/20">
              {options.gpu.map(r=> <option key={r.id} value={r.id}>{r.label} - {r.price.toLocaleString()} DZD</option>)}
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">التخزين</label>
            <select value={sel.storage} onChange={e=>setSel({...sel, storage: e.target.value})} className="p-3 rounded bg-black/60 border border-gold/20">
              {options.storage.map(r=> <option key={r.id} value={r.id}>{r.label} - {r.price.toLocaleString()} DZD</option>)}
            </select>
          </div>

          <div className="p-6 bg-black/50 rounded-xl border border-gold/20">
            <h3 className="text-xl font-bold text-gold">السعر الإجمالي</h3>
            <div className="mt-2 text-2xl">{priceSum().toLocaleString()} DZD</div>
          </div>
        </div>
      </main>
    </div>
  )
}