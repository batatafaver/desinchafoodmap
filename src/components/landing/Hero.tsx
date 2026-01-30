'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const logoImage = PlaceHolderImages.find(p => p.id === 'main-logo');

  return (
    <section id="inicio" className="w-full bg-background pt-8 pb-12 md:py-24">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4">
        <div className="text-center">
          {logoImage && (
            <div className="mb-8 flex justify-center">
              <Image
                src={logoImage.imageUrl}
                alt={logoImage.description}
                width={150}
                height={75}
                className="object-contain"
                data-ai-hint={logoImage.imageHint}
                priority
              />
            </div>
          )}
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="font-bold text-accent">7 dias</span> é tudo o que você precisa para conquistar um <span className="font-bold text-accent">corpo mais leve</span> e dizer <span className="font-bold text-accent">adeus ao inchaço.</span>
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/80 md:text-xl">
            Conheça o protocolo que já ajudou <span className="font-bold text-accent">milhares de mulheres</span> a eliminar o inchaço abdominal e voltar a se sentir confortáveis no próprio corpo, <span className="font-bold text-accent">sem dietas ou treinos malucos.</span>
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 md:flex-row md:justify-center md:gap-6">
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <div className="flex text-yellow-500">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <span><span className="font-bold text-accent">+1.387 mulheres</span> já transformadas</span>
            </div>
             <p className="hidden text-sm text-foreground/60 md:block">|</p>
            <p className="text-sm text-foreground/60">Acesso imediato e 100% seguro</p>
          </div>
        </div>
      </div>
    </section>
  );
}
