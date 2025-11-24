'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gift } from 'lucide-react';

const bumps = [
  { id: 'bumpA', name: 'Bebidas Antiinchaço', description: 'Receitas de chás e smoothies para aliviar o desconforto.', imageId: 'bonus-1' },
  { id: 'bumpB', name: 'Guia de Substituições', description: 'Trocas inteligentes para não sair da dieta.', imageId: 'bonus-2' },
  { id: 'bumpC', name: 'Receitas Anti-Inchaço Express', description: 'Pratos rápidos e deliciosos para o dia a dia.', imageId: 'bonus-3' },
  { id: 'bumpD', name: 'Checklist do Desincha Diário', description: 'Um guia impresso para acompanhar seu progresso.', imageId: 'bonus-4' },
  { id: 'bumpE', name: 'Mini Guia de Reintrodução', description: 'Volte a comer de tudo com segurança.', imageId: 'bonus-5' },
];

export default function Bonuses() {
  return (
    <section className="w-full bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
          E ao garantir sua vaga hoje, você ainda leva <span className="text-primary">5 bônus exclusivos</span>
        </h2>
        <p className="mt-4 text-lg text-foreground/70">
          Estes materiais complementares vão acelerar ainda mais a sua jornada.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8">
          {bumps.map(bump => {
            const image = PlaceHolderImages.find(p => p.id === bump.imageId);
            return (
              <Card key={bump.id} className="transform-gpu bg-secondary/30 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:ring-2 hover:ring-primary">
                <CardContent className="flex flex-col items-center gap-6 p-6 text-center md:flex-row md:text-left">
                  <div className="flex-shrink-0">
                    {image ? (
                      <Image
                        src={image.imageUrl}
                        alt={bump.name}
                        width={250}
                        height={250}
                        className="rounded-md object-cover shadow-md h-auto w-auto"
                        data-ai-hint={image.imageHint}
                      />
                    ) : (
                      <Gift className="h-24 w-24 text-primary md:h-32 md:w-32" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-headline text-2xl font-bold text-primary">{bump.name}</h3>
                    <p className="mt-2 text-xl text-foreground/80">{bump.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
