"use client";

import { Container } from "../ui/Container";
import { useState } from "react";

const FAQS = [
   {
      q: "Apa itu Real Estate?",
      a: "Real Estate adalah platform real estate premium yang menghubungkan pembeli dengan properti eksklusif berkualitas tinggi dan wawasan profesional."
   },
   {
      q: "Bagaimana cara kerja pencarian?",
      a: "Anda dapat mencari berdasarkan lokasi, tipe properti, rentang harga, dan kategori untuk menemukan apa yang Anda cari dengan tepat."
   },
   {
      q: "Bisakah saya memesan tur properti?",
      a: "Ya, Anda dapat dengan mudah menjadwalkan tur properti melalui platform kami dengan mengklik tombol 'Tur' pada setiap kartu properti."
   },
   {
      q: "Di mana lokasi kantor Real Estate?",
      a: "Kami memiliki kantor di kota-kota besar termasuk Jakarta, Bali, dan Jawa Tengah untuk melayani klien kami dengan lebih baik."
   }
];

export function FAQ() {
   const [open, setOpen] = useState(0);

   return (
      <section className="py-24 bg-white">
         <Container>
            <div className="max-w-3xl">
               <span className="text-brand-blue font-bold uppercase tracking-wider text-xs">FAQ</span>
               <h2 className="text-4xl font-bold text-brand-dark mt-4 mb-12">Pertanyaan yang Sering Diajukan</h2>
               <div className="space-y-4">
                  {FAQS.map((faq, i) => (
                     <div
                        key={i}
                        className={`rounded-3xl border transition-all duration-300 ${open === i ? 'border-brand-blue bg-blue-50/30' : 'border-zinc-100 bg-white'}`}
                     >
                        <button
                           onClick={() => setOpen(i)}
                           className="flex w-full items-center justify-between p-6 text-left"
                        >
                           <span className="text-lg font-bold text-brand-dark">{faq.q}</span>
                           <span className={`text-2xl transition-transform duration-300 ${open === i ? 'rotate-45 text-brand-blue' : 'text-zinc-400'}`}>+</span>
                        </button>
                        {open === i && (
                           <div className="px-6 pb-6 text-zinc-500 leading-relaxed">
                              {faq.a}
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </section>
   );
}
