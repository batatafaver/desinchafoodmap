'use client';

import { Puzzle, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const includedContent = [
    {
        title: 'ETAPA 1 — DESINCHAR E ALIVIAR',
        description: 'Você aprende como reduzir rapidamente o inchaço abdominal, aliviar gases e acabar com a sensação de barriga dura e estufada logo nos primeiros dias.',
        result: 'barriga visivelmente menos inchada e sensação imediata de leveza.',
    },
    {
        title: 'ETAPA 2 — ALIMENTAR SEM INCHAR',
        description: 'Um guia simples e direto mostrando exatamente quais alimentos favorecem o inchaço — e quais ajudam a reduzir.',
        result: 'você para de cortar comida à toa e passa a comer com segurança e clareza.'
    },
    {
        title: 'ETAPA 3 — ROTINA ANTI-INCHAÇO',
        description: 'Receitas práticas, organização simples e uma rotina fácil de seguir para aplicar o protocolo sem complicação no dia a dia.',
        result: 'constância sem sofrimento e menos chances de desistir.'
    },
    {
        title: 'ETAPA 4 — REINTRODUÇÃO E CONTROLE',
        description: 'Um plano claro para reintroduzir alimentos, identificar o que causa inchaço no seu corpo e manter os resultados no longo prazo.',
        result: 'controle total do inchaço sem viver em restrição.'
    }
];

export default function WhatsIncluded() {
    const productImage = PlaceHolderImages.find(p => p.id === 'benefits-woman');

  return (
    <section id="o-que-voce-recebe" className="w-full bg-background py-12 sm:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Aqui Está Exatamente Tudo o Que Você Vai Receber ao Entrar Hoje no Protocolo Desincha.
          </h2>
        </div>

        <div className="mt-12 space-y-10">
            <Card className="overflow-hidden border-2 border-primary/20 bg-secondary/20 shadow-lg">
                <CardContent className="p-6 flex flex-col md:flex-row gap-8 items-center">
                    {productImage && (
                         <Image
                            src={productImage.imageUrl}
                            alt="Protocolo Desincha"
                            width={200}
                            height={200}
                            className="w-48 h-auto object-contain rounded-lg"
                            data-ai-hint={productImage.imageHint}
                        />
                    )}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="font-headline text-2xl font-bold text-primary">Protocolo Desincha – Método Completo de 7 Dias</h3>
                        <p className="mt-2 text-base text-foreground/80">
                            O Protocolo Desincha é um método simples e estratégico, dividido em 4 Etapas Claras, pensadas para reduzir o inchaço abdominal da causa ao resultado, em apenas 7 dias.
                        </p>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {includedContent.map((item, index) => (
                     <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-start gap-3 font-headline text-lg text-primary">
                                <Puzzle className="h-8 w-8 mt-0 flex-shrink-0 text-primary/80" />
                                <span>{item.title}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                            <p className="text-sm text-foreground/80 flex-grow">{item.description}</p>
                            <div className="mt-4 flex items-start gap-2 text-sm text-accent">
                                <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                <p className="font-medium"><span className="font-bold">Resultado:</span> {item.result}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
