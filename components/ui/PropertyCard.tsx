import Image from "next/image";
import { Button } from "./Button";

interface PropertyCardProps {
   image: string;
   title: string;
   price: string;
   location: string;
   category: string;
}

export function PropertyCard({ image, title, price, location, category }: PropertyCardProps) {
   return (
      <div className="group relative overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:premium-shadow border border-zinc-100">
         <div className="relative aspect-[4/3] overflow-hidden">
            <Image
               src={image}
               alt={title}
               fill
               className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
               {category}
            </div>
         </div>
         <div className="p-6">
            <div className="flex items-center justify-between">
               <h3 className="text-xl font-bold text-brand-dark">{title}</h3>
               <p className="text-xl font-bold text-brand-blue">{price}</p>
            </div>
            <p className="mt-2 text-zinc-500">{location}</p>
            <div className="mt-6 flex gap-3">
               <Button variant="outline" size="sm" className="w-full">Detail</Button>
               <Button variant="primary" size="sm" className="w-full">Tur</Button>
            </div>
         </div>
      </div>
   );
}
