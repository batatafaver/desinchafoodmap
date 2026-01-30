'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function Benefits() {
  const benefitsWomanImage = PlaceHolderImages.find(p => p.id === 'benefits-woman');
  
  return (
    <section id="beneficios" className="w-full bg-secondary/30 py-12 sm:py-16">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h2 className="font-headline text-2xl font-extrabold tracking-tight sm:text-3xl" dangerouslySetInnerHTML={{ __html: 'Imagine a vida <span class="text-accent">sem o inchaço</span> te controlando' }} />
        <p className="mt-4 text-base sm:text-lg text-foreground/70" dangerouslySetInnerHTML={{ __html: 'O <span class="font-bold text-accent">protocolo validado</span> para mulheres de <span class="font-bold text-accent">SACO CHEIO</span> de se sentir estufada, com gases e sem confiança para usar as próprias roupas.' }} />

        {benefitsWomanImage && (
          <div className="my-8 flex justify-center">
            <Image
              src={benefitsWomanImage.imageUrl}
              alt={benefitsWomanImage.description}
              width={500}
              height={300}
              className="rounded-lg shadow-lg object-contain"
              data-ai-hint={benefitsWomanImage.imageHint}
            />
          </div>
        )}

      </div>
    </section>
  );
}
