'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smile, UtensilsCrossed, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: <Smile className="h-10 w-10 text-primary" />,
    title: 'Recupere sua autoestima',
    description: 'Sinta-se bem e confiante para usar as roupas que você ama, sem se preocupar com a barriga marcada.',
  },
  {
    icon: <UtensilsCrossed className="h-10 w-10 text-primary" />,
    title: 'Faça as pazes com a comida',
    description: 'Coma sem o medo constante de passar mal, ficar com a barriga estufada ou cheia de gases.',
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'Mais leveza e bem-estar',
    description: 'Tenha mais energia e disposição no seu dia, livre do peso e do desconforto do inchaço.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="w-full bg-secondary/30 py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
          Por que isso importa para <span className="text-primary">você</span>?
        </h2>
        <p className="mt-4 text-lg text-foreground/70">
          Não é só sobre desinchar, é sobre a transformação que isso traz para sua vida.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="transform-gpu text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center">
                {benefit.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl text-accent">{benefit.title}</CardTitle>
                <p className="mt-2 text-foreground/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
