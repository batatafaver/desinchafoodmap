'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MessageCircle } from 'lucide-react';

export default function About() {
  const nutriImage = PlaceHolderImages.find(p => p.id === 'nutri-batata');

  return (
    <section className="w-full bg-secondary/50 py-12 sm:py-16">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:text-left">
          {nutriImage && (
            <Image
              src={nutriImage.imageUrl}
              alt="Foto da Nutricionista"
              width={250}
              height={250}
              className="rounded-lg shadow-lg object-cover"
            />
          )}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-headline text-2xl font-bold text-accent">Quem vai te guiar nesta jornada?</h3>
            <p className="mt-2 max-w-md text-lg leading-relaxed text-foreground/80">
              Nutricionista especialista em <span className="font-bold text-accent">metabolismo e saúde intestinal</span>. Já ajudei <span className="font-bold text-accent">mais de 1.300 mulheres</span> a se livrarem do inchaço sem dietas radicais. Eu sei o caminho para você conquistar a barriga lisa que tanto deseja e a confiança que merece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
