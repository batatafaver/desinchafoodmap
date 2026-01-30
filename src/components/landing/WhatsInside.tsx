'use client';

import { Gift } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

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

const steps = [
    { id: 'step-1' },
    { id: 'step-2' },
    { id: 'step-3' },
    { id: 'step-4' },
];


export default function WhatsInside() {

  return (
    <section id="conteudo" className="w-full bg-secondary/30 py-12 sm:py-16">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-4 md:grid-cols-2">
        <div className="md:sticky md:top-24">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Como funciona o Protocolo Desincha?
          </h2>
          
          <p className="mt-4 text-base text-foreground/70">
            O Protocolo Desincha é dividido em 4 Etapas Simples e Estratégicas, criadas para atacar o inchaço abdominal da causa ao resultado, em apenas 7 dias.
            <br /><br />
            Cada etapa tem um objetivo claro e um passo a passo fácil, pra você saber exatamente o que fazer; sem achismo, sem sofrimento e sem dieta maluca.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step) => {
              const image = PlaceHolderImages.find(p => p.id === step.id);
              return (
                <Card key={step.id} className="overflow-hidden rounded-lg shadow-md">
                  <CardContent className="p-0">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={`Etapa do protocolo ${step.id}`}
                        width={300}
                        height={300}
                        className="w-full h-auto"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
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
                                <p className="font-bold text-primary flex items-center justify-center sm:justify-start gap-2 text-base">
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
