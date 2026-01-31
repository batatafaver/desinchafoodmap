'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroMobileImage = PlaceHolderImages.find(p => p.id === 'hero-mobile-woman');

  return (
    <section id="inicio" className="w-full">
      {/* Mobile view: Image on top, then text with green background */}
      <div className="md:hidden flex flex-col">
        {heroMobileImage && (
          <div className="relative w-full h-64">
            <Image
              src={heroMobileImage.imageUrl}
              alt="Mulher feliz com barriga lisa"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        )}
        <div className="bg-[#7ed957] py-8">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]">
                <span className="font-extrabold text-foreground">7 dias</span> é tudo o que você precisa para conquistar um <span className="font-extrabold text-foreground">corpo mais leve</span> e dizer <span className="font-extrabold text-foreground">adeus ao inchaço.</span>
              </h1>
              <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-white/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
                Conheça o protocolo que já ajudou <span className="font-bold text-foreground">milhares de mulheres</span> a eliminar o inchaço abdominal e voltar a se sentir confortáveis no próprio corpo, <span className="font-bold text-foreground">sem dietas ou treinos malucos.</span>
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex text-yellow-400 [filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.5))]">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <span className="text-white/80"><span className="font-bold">+1.387 mulheres</span> já transformadas</span>
                </div>
                 <p className="text-sm text-white/70">Acesso imediato e 100% seguro</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop view: Green background with text */}
      <div className="hidden md:flex bg-[#7ed957] items-center py-24">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4">
          <div className="text-center text-white">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.4)]">
              <span className="font-extrabold text-foreground">7 dias</span> é tudo o que você precisa para conquistar um <span className="font-extrabold text-foreground">corpo mais leve</span> e dizer <span className="font-extrabold text-foreground">adeus ao inchaço.</span>
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-lg md:text-xl text-white/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
              Conheça o protocolo que já ajudou <span className="font-bold text-foreground">milhares de mulheres</span> a eliminar o inchaço abdominal e voltar a se sentir confortáveis no próprio corpo, <span className="font-bold text-foreground">sem dietas ou treinos malucos.</span>
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-2 md:flex-row md:justify-center md:gap-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="flex text-yellow-400 [filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.5))]">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <span className="text-white/80"><span className="font-bold">+1.387 mulheres</span> já transformadas</span>
              </div>
               <p className="hidden text-sm md:block text-white/60">|</p>
              <p className="text-sm text-white/70">Acesso imediato e 100% seguro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
