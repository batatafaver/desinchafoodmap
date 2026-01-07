'use client';

import { CheckCircle2, Gift } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const contentItems = [
  'Guia de Alimentos: O que comer e o que evitar (de forma simples!).',
  '+50 Receitas rápidas, deliciosas e anti-inchaço (café, almoço e jantar).',
  'Lista de Compras Pronta para você não perder tempo no mercado.',
  'O plano exato para reintroduzir alimentos e nunca mais sofrer.',
];

const bonuses = [
  {
    id: 'bonus-1',
    title: 'Bônus #1: Bebidas Rápidas Anti-inchaço',
    value: 47,
  },
  {
    id: 'bonus-2',
    title: 'Bônus #2: Guia de Substituições Inteligentes',
    value: 37,
  },
  {
    id: 'bonus-3',
    title: 'Bônus #3: Acesso ao Grupo VIP de Alunas',
    value: 97,
  },
];


export default function WhatsInside() {
  const logoImage = PlaceHolderImages.find(p => p.id === 'main-logo');

  return (
    <section id="conteudo" className="w-full bg-secondary/30 py-12 sm:py-16">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-4 md:grid-cols-2">
        <div className="md:sticky md:top-24">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            O Protocolo Completo Para Sua <span className="text-primary">Transformação</span>
          </h2>
          
          {logoImage && (
            <div className="flex justify-start my-4">
              <Image
                src={logoImage.imageUrl}
                alt={logoImage.description}
                width={200}
                height={100}
                className="object-contain"
                data-ai-hint={logoImage.imageHint}
              />
            </div>
          )}

          <p className="mt-4 text-lg text-foreground/70">
            Você recebe ACESSO IMEDIATO a todo o Protocolo de 7 Dias que você precisa para dar um BASTA no inchaço, acabar com a sensação de barriga estufada e resgatar sua autoestima — com um passo a passo simples, sem erro, sem achismo e sem enrolação.
          </p>
          <ul className="mt-8 space-y-4">
            {contentItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>
           <Button asChild size="lg" className="mt-8 w-full text-base md:text-lg bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse">
            <a href="https://pay.kiwify.com.br/XfjVRJl">
              <ShoppingCart className="mr-2 h-5 w-5" />
              QUERO MEU PROTOCOLO AGORA!
            </a>
          </Button>
        </div>

        <div className="flex flex-col gap-4">
            <h3 className="font-headline text-2xl font-bold text-center">E ainda, <span className="text-primary">3 Bônus Exclusivos</span> (só hoje):</h3>
            {bonuses.map((bonus) => {
                 const image = PlaceHolderImages.find(p => p.id === bonus.id);
                 return (
                    <Card key={bonus.id}>
                        <CardContent className="flex items-center gap-4 p-4">
                             {image && (
                                <Image
                                    src={image.imageUrl}
                                    alt={bonus.title}
                                    width={100}
                                    height={100}
                                    className="w-24 h-24 object-cover rounded-md"
                                    data-ai-hint={image.imageHint}
                                />
                             )}
                             <div className="flex-1 text-center sm:text-left">
                                <p className="font-bold text-accent flex items-center justify-center sm:justify-start gap-2">
                                    <Gift className="h-5 w-5" />
                                    {bonus.title}
                                </p>
                                <p className="text-sm font-semibold text-destructive">
                                    (De <span className="line-through">R${bonus.value},00</span> por R$0)
                                </p>
                             </div>
                        </CardContent>
                    </Card>
                 )
            })}
            <Card className="bg-green-100 border-green-500">
                <CardContent className="p-4 text-center">
                    <p className="font-bold text-green-800">
                        Valor total dos bônus: <span className="line-through">R$181,00</span>
                    </p>
                    <p className="font-headline text-xl text-green-900">Hoje saem de GRAÇA para você!</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
