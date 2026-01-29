'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function Hero() {
  const logoImage = PlaceHolderImages.find(p => p.id === 'main-logo');
  const expertImage = PlaceHolderImages.find(p => p.id === 'expert-hero-bg');

  return (
    <section id="inicio" className="relative w-full bg-background pt-8 pb-12 text-white">
      {expertImage && (
        <Image
          src={expertImage.imageUrl}
          alt={expertImage.description}
          fill
          className="object-cover object-center md:object-top"
          data-ai-hint={expertImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4">
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
          <h1 className="font-headline text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            7 dias é tudo o que você precisa para conquistar um corpo mais leve e dizer adeus ao inchaço.
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-base text-white/80 md:text-xl">
            Conheça o protocolo que já ajudou milhares de mulheres a eliminar o inchaço abdominal e voltar a se sentir confortáveis no próprio corpo, sem dietas ou treinos malucos.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 md:flex-row md:gap-6">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <div className="flex text-yellow-500">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <span>+1.387 mulheres já transformadas</span>
            </div>
             <p className="hidden text-sm text-white/60 md:block">|</p>
            <p className="text-sm text-white/60">Acesso imediato e 100% seguro</p>
          </div>
        </div>
      </div>
    </section>
  );
}
