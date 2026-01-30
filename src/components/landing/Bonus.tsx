'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

const bonuses = [
  {
    id: 'bonus-1',
    title: 'BÔNUS #1 – Bebidas Rápidas Anti-Inchaço',
    value: 47,
    description: 'Receitas simples para aliviar gases, reduzir o estufamento e complementar o protocolo nos momentos em que o inchaço aparece com mais força.',
  },
  {
    id: 'bonus-2',
    title: 'BÔNUS #2 – Guia de Substituições Inteligentes',
    value: 37,
    description: 'Aprenda como substituir alimentos comuns por opções que não inflamam a barriga, sem radicalismo e sem sofrimento.',
  },
  {
    id: 'bonus-3',
    title: 'BÔNUS #3 – Acesso ao Grupo VIP de Alunas',
    value: 97,
    description: 'Um grupo exclusivo para tirar dúvidas, compartilhar resultados, manter a constância e não se sentir sozinha durante o processo.',
  },
];

export default function Bonus() {
  return (
    <section id="bonus" className="w-full bg-background py-12 sm:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex flex-col gap-8">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
                🎁 E AINDA, <span className="text-primary">3 BÔNUS EXCLUSIVOS</span> PARA ACELERAR SEUS RESULTADOS
                </h2>
                <p className="mt-2 text-lg text-foreground/80">(Disponíveis somente hoje)</p>
            </div>
            
            <div className="flex flex-col gap-6">
                {bonuses.map((bonus) => {
                    const image = PlaceHolderImages.find(p => p.id === bonus.id);
                    return (
                        <Card key={bonus.id} className="overflow-hidden">
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
                                    <p className="font-bold text-primary text-lg">
                                        🎁 {bonus.title}
                                    </p>
                                    <p className="mt-2 text-base text-foreground/80">{bonus.description}</p>
                                    <p className="text-base font-semibold text-destructive mt-2">
                                        💰 De <span className="line-through">R${bonus.value},00</span> por R$0
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
            
            <Card className="bg-primary/10 border-primary">
                <CardContent className="p-6 text-center space-y-2">
                    <p className="font-bold text-primary text-xl">
                        💣 Valor Total dos Bônus: <span className="line-through">R$181,00</span>
                    </p>
                    <p className="font-headline text-2xl text-accent mt-2">
                    🎯 Hoje, você recebe tudo isso de <span className="font-bold">GRAÇA</span> ao entrar no Protocolo Desincha.
                    </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
