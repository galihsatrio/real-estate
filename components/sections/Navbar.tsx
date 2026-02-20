import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function Navbar() {
   return (
      <header className="fixed top-0 z-50 w-full glass border-b border-zinc-200/50">
         <Container className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-10">
               <Link href="/" className="text-xl sm:text-2xl font-black tracking-tighter text-brand-dark">
                  REAL <span className="text-brand-blue">ESTATE</span>
               </Link>
               <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
                  <Link href="#home" className="hover:text-brand-dark transition-colors">Beranda</Link>
                  <Link href="#properties" className="hover:text-brand-dark transition-colors">Properti</Link>
                  <Link href="#agents" className="hover:text-brand-dark transition-colors">Agen</Link>
                  <Link href="#blog" className="hover:text-brand-dark transition-colors">Blog</Link>
                  <Link href="#pages" className="hover:text-brand-dark transition-colors">Halaman</Link>
               </nav>
            </div>
            <div className="hidden sm:flex items-center gap-4">
               <Button variant="ghost">Masuk</Button>
               <Button variant="primary">Mulai Sekarang</Button>
            </div>
         </Container>
      </header>
   );
}
