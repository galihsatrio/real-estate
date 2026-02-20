import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import Image from "next/image";

export function CTA() {
   return (
      <section className="py-12">
         <Container>
            <div className="relative overflow-hidden rounded-[3rem] bg-zinc-100 px-8 py-20 lg:px-20 lg:py-24">
               <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block">
                  <Image
                     src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800"
                     alt="House"
                     fill
                     className="object-cover"
                  />
               </div>
               <div className="relative z-10 max-w-2xl text-center lg:text-left">
                  <h2 className="text-5xl lg:text-6xl font-bold text-brand-dark mb-8 leading-[1.1]">
                     Dapatkan <br /> rumah impian Anda
                  </h2>
                  <Button size="lg">Mulai Sekarang</Button>
               </div>
            </div>
         </Container>
      </section>
   );
}
