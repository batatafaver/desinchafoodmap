'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';

const results = [
  {
    id: 'result-1',
    description: '“Eu vivia com medo de comer e passar o dia todo inchada. Hoje, visto as roupas que amo e me sinto livre de novo. Foi libertador!”',
    author: 'Juliana P., Rio de Janeiro',
  },
  {
    id: 'result-2',
    description: '“Me sinto muito mais leve e com energia. O protocolo foi um divisor de águas para mim.”',
    author: 'Mariana S., Belo Horizonte',
  },
];

export default function RealResults() {
  return (
    <section className="w-full bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            A prova de que isso <span className="text-primary">realmente funciona</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Resultados REAIS de mulheres que aplicaram o protocolo e transformaram o corpo e a autoestima.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {results.map((result) => {
            const image = PlaceHolderImages.find(p => p.id === result.id);
            return (
              <Card key={result.id} className="overflow-hidden rounded-lg shadow-lg">
                <CardContent className="p-0">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={`Resultado de ${result.author}`}
                      width={600}
                      height={400}
                      className="w-full object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="p-6">
                    <div className="flex text-yellow-500">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                    <blockquote className="mt-2 text-lg text-foreground/90">
                      {result.description}
                    </blockquote>
                    <p className="mt-4 text-right font-semibold text-accent">- {result.author}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="text-base md:text-lg bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="https://pay.kiwify.com.br/XfjVRJl">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    EU QUERO ESSE RESULTADO TAMBÉM!
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
