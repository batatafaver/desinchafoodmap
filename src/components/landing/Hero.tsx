'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check, ShieldCheck, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {

  return (
    <section id="inicio" className="w-full bg-background py-12 md:py-24">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Sua barriga mais lisa e confortável em <span className="text-primary">apenas 7 dias</span>
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/80 md:text-xl">
            Descubra o protocolo prático para eliminar o inchaço e o desconforto abdominal, sem precisar de dietas radicais ou cortar para sempre o que você ama.
          </p>
          <Button asChild size="lg" className="mt-8 w-full max-w-sm text-base md:w-auto md:text-lg bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="https://pay.kiwify.com.br/XfjVRJl">Quero desinchar em 7 dias</a>
          </Button>
          <div className="mt-4 flex flex-col items-center justify-center gap-2 md:flex-row md:gap-6">
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <div className="flex text-yellow-500">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <span>Avaliado por +1.300 mulheres</span>
            </div>
             <p className="hidden text-sm text-foreground/60 md:block">|</p>
            <p className="text-sm text-foreground/60">Acesso imediato e 100% seguro</p>
          </div>
        </div>
      </div>
    </section>
  );
}
