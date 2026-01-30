'use client';

import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroMobileImage = PlaceHolderImages.find(p => p.id === 'hero-mobile-woman');

  return (
    <section 
      id="inicio" 
      className="relative w-full bg-cover bg-center md:bg-none md:bg-[#7ed957] flex items-center py-20 md:py-24"
      style={heroMobileImage ? { backgroundImage: `url(${heroMobileImage.imageUrl})` } : {}}
    >
      <div className="absolute inset-0 bg-black/40 md:hidden" />
      <div className="relative container mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4">
        <div className="text-center text-white md:text-black">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="font-bold">7 dias</span> é tudo o que você precisa para conquistar um <span className="font-bold">corpo mais leve</span> e dizer <span className="font-bold">adeus ao inchaço.</span>
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg md:text-xl text-white/90 md:text-black/80">
            Conheça o protocolo que já ajudou <span className="font-bold">milhares de mulheres</span> a eliminar o inchaço abdominal e voltar a se sentir confortáveis no próprio corpo, <span className="font-bold">sem dietas ou treinos malucos.</span>
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 md:flex-row md:justify-center md:gap-6">
            <div className="flex items-center gap-2 text-sm">
              <div className="flex text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <span className="text-white/90 md:text-black/80"><span className="font-bold">+1.387 mulheres</span> já transformadas</span>
            </div>
             <p className="hidden text-sm md:block text-white/70 md:text-black/60">|</p>
            <p className="text-sm text-white/80 md:text-black/70">Acesso imediato e 100% seguro</p>
          </div>
        </div>
      </div>
    </section>
  );
}
