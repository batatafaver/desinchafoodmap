'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const logoImage = PlaceHolderImages.find(p => p.id === 'main-logo');
  const expertImage = PlaceHolderImages.find(p => p.id === 'expert-hero-bg');

  return (
    <section id="inicio" className="w-full bg-background pt-8 pb-12 md:py-24">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">

        <div className="relative mx-auto h-[450px] w-full max-w-sm md:order-last md:h-[600px] md:max-w-none">
          {expertImage && (
              <Image
                src={expertImage.imageUrl}
                alt={expertImage.description}
                fill
                className="object-contain object-bottom"
                data-ai-hint={expertImage.imageHint}
                priority
              />
            )}
        </div>

        <div className="text-center md:text-left">
          {logoImage && (
            <div className="mb-8 flex justify-center md:justify-start">
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
          <h1 className="font-headline text-3xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            7 dias é tudo o que você precisa para conquistar um corpo mais leve e dizer adeus ao inchaço.
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-base text-foreground/80 md:text-xl">
            Conheça o protocolo que já ajudou milhares de mulheres a eliminar o inchaço abdominal e voltar a se sentir confortáveis no próprio corpo, sem dietas ou treinos malucos.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 md:flex-row md:justify-start md:gap-6">
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <div className="flex text-yellow-500">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <span>+1.387 mulheres já transformadas</span>
            </div>
             <p className="hidden text-sm text-foreground/60 md:block">|</p>
            <p className="text-sm text-foreground/60">Acesso imediato e 100% seguro</p>
          </div>
        </div>

      </div>
    </section>
  );
}
