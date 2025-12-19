'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';


const results = [
  {
    id: 'result-1',
    description: '“Eu vivia com medo de comer e passar o dia todo inchada. Hoje, visto as roupas que amo e me sinto livre de novo. Foi libertador!”',
    author: 'Juliana P., Rio de Janeiro',
    imageId: 'result-1-photo',
  },
  {
    id: 'result-2',
    description: '“Me sinto muito mais leve e com energia. O protocolo foi um divisor de águas para mim.”',
    author: 'Mariana S., Belo Horizonte',
    imageId: 'result-2-photo',
  },
  {
    id: 'result-3',
    description: '“Nunca imaginei que fosse possível me livrar do inchaço tão rápido. O protocolo é simples e direto ao ponto. Minha disposição é outra!”',
    author: 'Gabriela F., Porto Alegre',
  },
  {
    id: 'result-4',
    description: '“Adeus, calças que não fechavam! Em uma semana eu já me sentia outra mulher. Funciona de verdade e sem sofrimento.”',
    author: 'Beatriz M., Recife',
  },
];

export default function RealResults() {
  return (
    <section className="w-full bg-background py-8 sm:py-12">
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
            const image = result.imageId ? PlaceHolderImages.find(p => p.id === result.imageId) : null;
            return (
              <Card key={result.id} className="overflow-hidden rounded-lg shadow-lg flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  {image && (
                     <div className="mb-4">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={400}
                        height={400}
                        className="rounded-lg object-contain w-full h-auto"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <div className="flex text-yellow-500">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <blockquote className="mt-2 text-lg text-foreground/90 flex-grow">
                    {result.description}
                  </blockquote>
                  <p className="mt-4 text-right font-semibold text-accent">- {result.author}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="mt-8 text-center">
            <Button asChild size="lg" className="w-full max-w-md text-base md:text-lg bg-accent text-accent-foreground hover:bg-accent/90">
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
