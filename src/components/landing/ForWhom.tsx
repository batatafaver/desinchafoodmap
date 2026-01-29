'use client';

import { Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const forYou = [
    'Está de SACO CHEIO de se sentir estufada, com a barriga dolorida depois de comer.',
    'Morre de vontade de usar roupa justa, mas vive com medo da "barriga de grávida".',
    'Quer uma solução RÁPIDA, PRÁTICA e que não te faça passar fome.',
    'Cansou de comer com culpa e quer entender seu corpo pra viver em paz com a comida.',
    'Sente que o inchaço está sugando sua energia, sua confiança e sua autoestima.',
];

const notForYou = [
    'Ainda acredita em dietas malucas que só te deixam fraca, irritada e inchada.',
    'Vive caindo no conto de chás, pílulas e "fórmulas mágicas" que prometem tudo e não entregam nada.',
    'Acha que exercício infinito resolve um problema que começa de dentro pra fora.',
    'Prefere continuar gastando dinheiro e tempo com soluções que claramente NÃO funcionam.',
];

export default function ForWhom() {
  return (
    <section className="w-full bg-background py-12 sm:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            O Que Você Pode Esperar em Apenas 7 Dias Aplicando o <span className="text-primary">Protocolo Desincha</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-green-500 border-2">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
                        <Check className="h-7 w-7 text-green-500"/>
                        SIM, isso é pra você se...
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {forYou.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                                <span className="font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <Card className="border-red-500 border-2">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-destructive flex items-center gap-2">
                        <X className="h-7 w-7 text-red-500"/>
                         AGORA, NÃO ENTRE se você...
                    </CardTitle>
                </CardHeader>
                <CardContent>
                     <ul className="space-y-3">
                        {notForYou.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <X className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
