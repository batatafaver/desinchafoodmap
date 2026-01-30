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

export default function Bonus() {
  return (
    <section id="bonus" className="w-full bg-background py-12 sm:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex flex-col gap-6">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-center">
              E ainda, <span className="text-primary">3 Bônus Exclusivos</span> (só hoje):
            </h2>
            {bonuses.map((bonus) => {
                 const image = PlaceHolderImages.find(p => p.id === bonus.id);
                 return (
                    <Card key={bonus.id}>
                        <CardContent className="flex flex-col sm:flex-row items-center gap-6 p-6">
                             {image && (
                                <Image
                                    src={image.imageUrl}
                                    alt={bonus.title}
                                    width={120}
                                    height={120}
                                    className="w-32 h-32 object-contain rounded-md"
                                    data-ai-hint={image.imageHint}
                                />
                             )}
                             <div className="flex-1 text-center sm:text-left">
                                <p className="font-bold text-primary flex items-center justify-center sm:justify-start gap-2 text-lg">
                                    <Gift className="h-5 w-5" />
                                    {bonus.title}
                                </p>
                                <p className="text-base font-semibold text-destructive mt-1">
                                    (De <span className="line-through">R${bonus.value},00</span> por R$0)
                                </p>
                             </div>
                        </CardContent>
                    </Card>
                 )
            })}
            <Card className="bg-primary/10 border-primary">
                <CardContent className="p-6 text-center">
                    <p className="font-bold text-primary text-lg">
                        Valor total dos bônus: <span className="line-through">R$181,00</span>
                    </p>
                    <p className="font-headline text-2xl text-primary mt-2">Hoje saem de <span className="font-bold">graça</span> para você!</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
