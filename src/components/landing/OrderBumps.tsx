'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const allBumps = [
  { id: 'bonus-1', name: 'Bebidas Rápidas Antiinchaço', description: 'Receitas de chás e smoothies para desinchar.' },
  { id: 'bonus-2', name: 'Guia de Substituições', description: 'Trocas inteligentes para não sair da dieta.' },
  { id: 'bonus-3', name: 'Receitas Anti-Inchaço Express', description: 'Pratos rápidos e deliciosos para o dia a dia.' },
  { id: 'bonus-4', name: 'Checklist do Desincha Diário', description: 'Um guia para acompanhar seu progresso diário.' },
  { id: 'bonus-5', name: 'Mini Guia de Reintrodução', description: 'Volte a comer de tudo com segurança e sem medo.' },
];

export default function OrderBumps() {
  return (
    <section className="w-full bg-secondary/30 py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
          E você ainda pode <span className="text-primary">Turbinar Seus Resultados</span>
        </h2>
        <p className="mt-4 text-lg text-foreground/70">
          Ao finalizar sua compra, você terá a chance única de adicionar estes materiais por um preço especial:
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {allBumps.map(bump => {
            const image = PlaceHolderImages.find(p => p.id === bump.id);
            return (
              <Card key={bump.id} className="bg-background/70 text-left overflow-hidden">
                <CardContent className="p-0 flex flex-col sm:flex-row items-center">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={bump.name}
                      width={150}
                      height={150}
                      className="w-full sm:w-[150px] h-auto sm:h-full object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold text-primary">{bump.name}</h3>
                    <p className="text-sm text-foreground/80">{bump.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="text-sm md:text-lg bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="https://pay.kiwify.com.br/XfjVRJl">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Sim, Quero Ver as Ofertas e Desinchar
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
