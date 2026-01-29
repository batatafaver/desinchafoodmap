'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';


const results = [
  { id: 'new-result-1', imageId: 'new-result-1' },
  { id: 'new-result-2', imageId: 'new-result-2' },
  { id: 'new-result-3', imageId: 'new-result-3' },
  { id: 'new-result-4', imageId: 'new-result-4' },
  { id: 'new-result-5', imageId: 'new-result-5' },
  { id: 'new-result-6', imageId: 'new-result-6' },
  { id: 'new-result-7', imageId: 'new-result-7' },
  { id: 'new-result-8', imageId: 'new-result-8' },
  { id: 'new-result-9', imageId: 'new-result-9' },
];

export default function RealResults() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );

  return (
    <section className="w-full bg-background py-8 sm:py-12">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Em <span className="font-bold text-accent">apenas 7 Dias</span>, essas mulheres <span className="text-primary">desincharam a barriga</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            <span className="font-bold text-accent">Resultados reais</span> de mulheres que aplicaram o Protocolo Desincha e reduziram o inchaço abdominal sem dietas restritivas ou treinos malucos.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto mt-12 w-full max-w-xs sm:max-w-xl lg:max-w-2xl"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
        >
          <CarouselContent>
            {results.map((result: any) => {
              const image = result.imageId ? PlaceHolderImages.find(p => p.id === result.imageId) : null;
              return (
                <CarouselItem key={result.id} className="md:basis-1/2">
                   <div className="p-1 h-full">
                    <Card className="overflow-hidden rounded-lg shadow-lg flex flex-col h-full">
                      <CardContent className="p-0 flex flex-col flex-grow justify-center">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={image.description || `Depoimento de resultado ${result.id}`}
                            width={300}
                            height={300}
                            sizes="(max-width: 768px) 90vw, 45vw"
                            className="rounded-lg object-contain w-full h-80"
                            data-ai-hint={image.imageHint}
                          />
                        )}
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
