import { Container } from "../ui/Container";
import { PropertyCard } from "../ui/PropertyCard";

const PROPERTIES = [
   {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
      title: "Rumah Eco",
      price: "Rp 4,5 M",
      location: "Sukamahi, Jawa Tengah",
      category: "Modern"
   },
   {
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Menara Putih",
      price: "Rp 6,0 M",
      location: "Menteng, Jakarta",
      category: "Mewah"
   },
   {
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800",
      title: "Villa Kaca",
      price: "Rp 8,5 M",
      location: "Uluwatu, Bali",
      category: "Premium"
   },
   {
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800",
      title: "Loft Modern",
      price: "Rp 3,2 M",
      location: "Canggu, Bali",
      category: "Minimalis"
   }
];

export function Properties() {
   return (
      <section id="properties" className="py-24 bg-white">
         <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
               <div className="max-w-xl">
                  <h2 className="text-4xl font-bold text-brand-dark mb-4">
                     Kami menyediakan pilihan <br />
                     <span className="text-zinc-400 font-medium">properti</span> yang tepat
                  </h2>
               </div>
               <div className="flex gap-4">
                  <div className="rounded-full glass p-2 flex gap-1">
                     {['Semua', 'Modern', 'Mewah', 'Loft'].map((cat, i) => (
                        <button
                           key={cat}
                           className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-brand-blue text-white' : 'text-zinc-500 hover:text-brand-dark'}`}
                        >
                           {cat}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
               {PROPERTIES.map((prop, i) => (
                  <PropertyCard key={i} {...prop} />
               ))}
            </div>
         </Container>
      </section>
   );
}
