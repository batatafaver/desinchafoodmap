'use client';

import { CheckCircle2, Gift } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

const contentItems = [
  'Guia de Alimentos: <span class="font-bold text-primary">O que comer e o que evitar</span> (de forma simples!).',
  '<span class="font-bold text-primary">+50 Receitas</span> rápidas, deliciosas e anti-inchaço (café, almoço e jantar).',
  '<span class="font-bold text-primary">Lista de Compras Pronta</span> para você não perder tempo no mercado.',
  'O plano exato para reintroduzir alimentos e <span class="font-bold text-primary">nunca mais sofrer</span>.',
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

  return (
    <section id="conteudo" className="w-full bg-secondary/30 py-12 sm:py-16">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-4 md:grid-cols-2">
        <div className="md:sticky md:top-24">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            O protocolo completo para sua <span className="text-primary">transformação</span>
          </h2>
          
          <p className="mt-4 text-lg text-foreground/70">
            Você recebe <span className="font-bold text-primary">acesso imediato</span> a todo o Protocolo de 7 Dias que você precisa para dar um BASTA no inchaço, acabar com a sensação de barriga estufada e resgatar sua autoestima — com um passo a passo <span className="font-bold text-primary">simples, sem erro, sem achismo e sem enrolação.</span>
          </p>
          <ul className="mt-8 space-y-4 text-base">
            {contentItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="font-semibold" dangerouslySetInnerHTML={{ __html: item }}></span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
            <h3 className="font-headline text-2xl font-bold text-center">E ainda, <span className="text-primary">3 Bônus Exclusivos</span> (<span className="font-bold text-primary">só hoje</span>):</h3>
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
                                <p className="font-bold text-primary flex items-center justify-center sm:justify-start gap-2 text-lg">
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
            <Card className="bg-primary/10 border-primary">
                <CardContent className="p-4 text-center">
                    <p className="font-bold text-primary text-base">
                        Valor total dos bônus: <span className="line-through">R$181,00</span>
                    </p>
                    <p className="font-headline text-xl text-primary">Hoje saem de <span className="font-bold">graça</span> para você!</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
