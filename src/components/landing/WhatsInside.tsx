'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
    { id: 'step-1' },
    { id: 'step-2' },
    { id: 'step-3' },
    { id: 'step-4' },
];


export default function WhatsInside() {

  return (
    <section id="conteudo" className="w-full bg-secondary/30 py-12 sm:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Como funciona o Protocolo Desincha?
          </h2>
          
          <p className="mt-4 text-lg text-foreground/70">
            O Protocolo Desincha é dividido em 4 Etapas Simples e Estratégicas, criadas para atacar o inchaço abdominal da causa ao resultado, em apenas 7 dias.
            <br /><br />
            Cada etapa tem um objetivo claro e um passo a passo fácil, pra você saber exatamente o que fazer; sem achismo, sem sofrimento e sem dieta maluca.
          </p>
        </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step) => {
              const image = PlaceHolderImages.find(p => p.id === step.id);
              return (
                <Card key={step.id} className="overflow-hidden rounded-lg shadow-md border-0 bg-transparent">
                  <CardContent className="p-0">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={`Etapa do protocolo ${step.id}`}
                        width={300}
                        height={300}
                        className="w-full h-auto object-contain"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <h3 className="font-headline text-2xl font-bold text-foreground sm:text-3xl">
                O Protocolo Desincha não é uma dieta passageira.
            </h3>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
                É um processo validado, simples e aplicável, criado para mulheres que estão cansadas de viver inchadas e querem resultado real, rápido e sustentável.
            </p>
        </div>
      </div>
    </section>
  );
}
