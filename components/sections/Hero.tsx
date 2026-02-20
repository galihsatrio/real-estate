import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import Image from "next/image";

export function Hero() {
   return (
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
         <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="flex flex-col gap-8 max-w-2xl">
                  <div className="inline-flex w-fit items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-brand-blue ring-1 ring-inset ring-blue-700/10">
                     Listing baru saja ditambahkan
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-brand-dark leading-[1.1]">
                     Tetap Terdepan dalam <br />
                     Dunia <span className="text-zinc-400">Real Estate</span>
                  </h1>
                  <p className="text-xl text-zinc-500 leading-relaxed">
                     Temukan properti impian Anda dengan listing eksklusif dan wawasan ahli kami.
                     Kami menyediakan pilihan properti yang tepat sesuai kebutuhan Anda.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <div className="relative flex-grow">
                        <input
                           type="text"
                           placeholder="Cari properti..."
                           className="w-full h-14 pl-6 pr-4 rounded-full border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
                        />
                     </div>
                     <Button size="lg" className="h-14">Cari Sekarang</Button>
                  </div>
               </div>
               <div className="relative aspect-[16/10] lg:aspect-square">
                  <div className="absolute inset-0 bg-blue-100 rounded-[2.5rem] rotate-3 -z-10" />
                  <Image
                     src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200"
                     alt="Rumah modern mewah"
                     fill
                     className="object-cover rounded-[2rem] shadow-2xl"
                     priority
                  />
               </div>
            </div>
         </Container>
      </section>
   );
}
