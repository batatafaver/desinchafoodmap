'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check, ShieldCheck, Star, ShoppingCart } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const logoImage = PlaceHolderImages.find(p => p.id === 'main-logo');

  return (
    <section id="inicio" className="w-full bg-background pt-8 pb-12">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4">
        <div className="text-center">
          {logoImage && (
            <div className="mb-8 flex justify-center">
              <Image
                src={logoImage.imageUrl}
                alt={logoImage.description}
                width={200}
                height={100}
                className="object-contain"
                data-ai-hint={logoImage.imageHint}
                priority
              />
            </div>
          )}
          <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Chega de Sofrer com Inchaço! Conquiste a <span className="text-primary">Barriga Lisa</span> que Você Merece em <span className="text-primary">APENAS 7 DIAS</span>.
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/80 md:text-xl">
            O protocolo validado para mulheres de SACO CHEIO de se sentir estufada, com gases e sem confiança para usar as próprias roupas.
          </p>
          <a href="https://pay.kiwify.com.br/XfjVRJl" className="inline-block">
            <Button size="lg" className="mt-8 w-full max-w-md text-lg" variant="default">
              <ShoppingCart className="mr-2 h-5 w-5" />
              QUERO O PROTOCOLO E OS BÔNUS
            </Button>
          </a>
          <div className="mt-4 flex flex-col items-center justify-center gap-2 md:flex-row md:gap-6">
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
