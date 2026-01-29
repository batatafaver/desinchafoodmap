'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';


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
    imageId: 'result-3-photo',
  },
  {
    id: 'result-4',
    description: '“Adeus, calças que não fechavam! Em uma semana eu já me sentia outra mulher. Funciona de verdade e sem sofrimento.”',
    author: 'Beatriz M., Recife',
    imageId: 'result-4-photo',
  },
];

export default function RealResults() {
  return (
    <section className="w-full bg-background py-8 sm:py-12">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Em apenas 7 Dias, essas mulheres <span className="text-primary">desincharam a barriga</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Resultados reais de mulheres que aplicaram o Protocolo Desincha e reduziram o inchaço abdominal sem dietas restritivas ou treinos malucos.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto mt-12 w-full max-w-xs sm:max-w-xl lg:max-w-2xl"
        >
          <CarouselContent>
            {results.map((result) => {
              const image = result.imageId ? PlaceHolderImages.find(p => p.id === result.imageId) : null;
              return (
                <CarouselItem key={result.id} className="md:basis-1/2">
                   <div className="p-1 h-full">
                    <Card className="overflow-hidden rounded-lg shadow-lg flex flex-col h-full">
                      <CardContent className="p-6 flex flex-col flex-grow">
                        {image && (
                          <div className="mb-4">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={300}
                              height={300}
                              sizes="(max-width: 768px) 90vw, 45vw"
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
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
