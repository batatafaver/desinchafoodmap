
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check, ShieldCheck, Star, ShoppingCart } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const LeafIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 256 256" {...props}>
        <path fill="currentColor" d="M211.06,79.51A6.1,6.1,0,0,0,205,76H143.2L168,42.58a6,6,0,0,0-8.83-8.1L45.06,140.49a6.08,6.08,0,0,0-1.07,7.39,6,6,0,0,0,6,4.12H112.8L88,188.42a6,6,0,0,0,8.83,8.1L211.06,89.51A6.08,6.08,0,0,0,211.06,79.51Z" opacity="0.2" />
        <path fill="currentColor" d="M199.63,68.27a6,6,0,0,0-7.36,1.48L128,128.49,69.73,70.27a6,6,0,0,0-8.48,8.48L119.51,137,61,195.51a6,6,0,0,0,8.48,8.48L128,145.51l58.51,58.48a6,6,0,0,0,8.48-8.48L136.49,137l63.14-63.14A6,6,0,0,0,199.63,68.27Z" />
    </svg>
);


export default function Hero() {
  const logoImage = PlaceHolderImages.find(p => p.id === 'main-logo');

  return (
    <section id="inicio" className="w-full bg-background pt-8 pb-12">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4">
        <div className="text-center">
          {logoImage && (
            <div className="flex justify-center mb-6">
              <Image
                src={logoImage.imageUrl}
                alt={logoImage.description}
                width={300}
                height={150}
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
          <Button asChild size="lg" className="mt-8 w-full max-w-md text-base md:w-auto md:text-lg bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse">
            <a href="https://pay.kiwify.com.br/XfjVRJl">
                <ShoppingCart className="mr-2 h-5 w-5" />
                QUERO MEU PROTOCOLO AGORA!
            </a>
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
