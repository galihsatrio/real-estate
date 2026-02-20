import { Container } from "../ui/Container";
import Link from "next/link";

export function Footer() {
   return (
      <footer className="bg-brand-dark text-white pt-24 pb-12">
         <Container>
            <div className="grid lg:grid-cols-4 gap-12 mb-20">
               <div className="col-span-2">
                  <Link href="/" className="text-3xl font-black tracking-tighter mb-8 block">
                     REAL <span className="text-brand-blue">ESTATE</span>
                  </Link>
                  <p className="text-zinc-400 max-w-md mb-8">
                     Platform real estate premium yang menyediakan listing properti eksklusif dan layanan profesional untuk rumah impian Anda.
                  </p>
                  <div className="flex gap-4">
                     <input
                        type="email"
                        placeholder="Masukkan email Anda"
                        className="bg-zinc-900 border border-zinc-800 rounded-full px-6 py-3 shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                     />
                     <button className="bg-brand-blue w-12 h-12 rounded-full flex items-center justify-center font-bold">
                        →
                     </button>
                  </div>
               </div>
               <div>
                  <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-zinc-500 text-xs text-balance">Perusahaan</h4>
                  <ul className="space-y-4 text-zinc-400">
                     <li><Link href="#" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                     <li><Link href="#" className="hover:text-white transition-colors">Layanan</Link></li>
                     <li><Link href="#" className="hover:text-white transition-colors">Proyek</Link></li>
                     <li><Link href="#" className="hover:text-white transition-colors">Tim Kami</Link></li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-zinc-500 text-xs">Tautan Berguna</h4>
                  <ul className="space-y-4 text-zinc-400">
                     <li><Link href="#" className="hover:text-white transition-colors">Dukungan Pelanggan</Link></li>
                     <li><Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
                     <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
                  </ul>
               </div>
            </div>
            <div className="pt-8 border-t border-zinc-800 text-zinc-500 text-sm">
               <p>© 2024 Real Estate. Seluruh hak cipta dilindungi undang-undang.</p>
            </div>
         </Container>
      </footer>
   );
}
