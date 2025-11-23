'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShieldCheck, Star } from 'lucide-react';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Camila R.',
    location: 'São Paulo, SP',
    comment: '“Em 5 dias meu inchaço sumiu! Foi incrível ver o resultado tão rápido. Super recomendo!”',
  },
  {
    id: 'testimonial-2',
    name: 'Fernanda L.',
    location: 'Curitiba, PR',
    comment: '“Finalmente um método que funciona sem precisar passar fome. Me sinto mais leve e disposta.”',
  },
  {
    id: 'testimonial-3',
    name: 'Ana P.',
    location: 'Salvador, BA',
    comment: '“Achei que era normal viver inchada. O eBook mudou minha relação com a comida. Valeu muito a pena!”',
  },
];

export default function SocialProof() {
  return (
    <section className="w-full py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Mais de <span className="text-primary">1.387 pessoas</span> já estão desinchando
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Veja o que nossos clientes estão dizendo sobre o protocolo.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto mt-12 w-full max-w-xs sm:max-w-xl lg:max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const image = PlaceHolderImages.find(p => p.id === testimonial.id);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center p-6 text-center">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={`Foto de ${testimonial.name}`}
                            width={100}
                            height={100}
                            className="rounded-full"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                        <p className="mt-4 font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-foreground/60">{testimonial.location}</p>
                        <div className="my-2 flex text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                          <Star className="h-4 w-4 fill-current" />
                        </div>
                        <p className="italic text-foreground/80">{testimonial.comment}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        <div className="mt-8 flex justify-center">
          <Badge variant="outline" className="border-accent bg-accent/10 px-4 py-2 text-accent">
            <ShieldCheck className="mr-2 h-5 w-5" />
            Satisfação Garantida ou seu dinheiro de volta em 7 dias
          </Badge>
        </div>
      </div>
    </section>
  );
}
