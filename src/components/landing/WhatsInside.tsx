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
          <h2 className="font-headline text-2xl font-extrabold tracking-tight sm:text-3xl" dangerouslySetInnerHTML={{ __html: 'Como funciona o <span class="text-primary">Protocolo Desincha?</span>' }} />
          
          <p className="mt-4 text-base sm:text-lg text-foreground/70" dangerouslySetInnerHTML={{ __html: 'O Protocolo Desincha é dividido em <span class="font-bold">4 Etapas Simples e Estratégicas</span>, criadas para atacar o inchaço abdominal <span class="font-bold">da causa ao resultado, em apenas 7 dias.</span><br /><br />Cada etapa tem um <span class="font-bold">objetivo claro</span> e um passo a passo fácil, pra você saber <span class="font-bold text-primary">exatamente o que fazer</span>; sem achismo, sem sofrimento e sem dieta maluca.' }} />
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
            <h3 className="font-headline text-xl font-bold text-foreground sm:text-2xl" dangerouslySetInnerHTML={{ __html: 'O Protocolo Desincha <span class="font-bold text-primary">não é uma dieta passageira.</span>' }} />
            <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-foreground/80" dangerouslySetInnerHTML={{ __html: 'É um <span class="font-bold">processo validado, simples e aplicável</span>, criado para mulheres que estão cansadas de viver inchadas e querem <span class="font-bold">resultado real, rápido e sustentável.</span>' }} />
        </div>
      </div>
    </section>
  );
}
