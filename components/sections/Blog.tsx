import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import Image from "next/image";

const POSTS = [
   {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600",
      title: "Real Estate Modern",
      date: "12 Jun 2024",
      category: "Berita"
   },
   {
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600",
      title: "Dekorasi Rumah",
      date: "10 Jun 2024",
      category: "Tips"
   },
   {
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600",
      title: "Tren Minimalis",
      date: "08 Jun 2024",
      category: "Desain"
   }
];

export function Blog() {
   return (
      <section id="blog" className="py-24 bg-zinc-50">
         <Container>
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-brand-dark mb-4">
                  Artikel & <br />
                  <span className="text-zinc-400 font-medium">Blog Terbaru Kami</span>
               </h2>
               <p className="text-zinc-500 max-w-2xl mx-auto">
                  Tetap perbarui pengetahuan Anda dengan tren, tips, dan wawasan terbaru dari industri real estate.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               <div className="group relative overflow-hidden rounded-[2rem] bg-white border border-zinc-100">
                  <div className="relative aspect-[16/10] overflow-hidden">
                     <Image
                        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200"
                        alt="Featured article"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                  </div>
                  <div className="p-8">
                     <span className="text-brand-blue font-bold uppercase tracking-wider text-xs">Unggulan</span>
                     <h3 className="text-2xl font-bold mt-4 mb-4">Bagaimana cara mengambil foto Real Estate yang indah sendiri?</h3>
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-zinc-200" />
                           <div>
                              <p className="font-bold text-sm">Vincent O.</p>
                              <p className="text-zinc-400 text-xs">20 Jun 2024</p>
                           </div>
                        </div>
                        <Button variant="outline" size="sm">Baca Selengkapnya</Button>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col gap-6">
                  {POSTS.map((post, i) => (
                     <div key={i} className="flex gap-6 p-4 rounded-3xl bg-white border border-zinc-100 group cursor-pointer hover:premium-shadow transition-all">
                        <div className="relative w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                           <Image src={post.image} alt={post.title} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                           <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px]">{post.category}</span>
                           <h4 className="font-bold text-lg group-hover:text-brand-blue transition-colors leading-tight">{post.title}</h4>
                           <p className="text-zinc-400 text-xs font-medium">{post.date}</p>
                        </div>
                     </div>
                  ))}
                  <Button variant="secondary" className="mt-2">Lihat Semua Artikel</Button>
               </div>
            </div>
         </Container>
      </section>
   );
}
