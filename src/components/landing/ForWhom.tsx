'use client';

import { Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const forYou = [
    'Barriga visivelmente menos inchada',
    'Menos gases e desconforto após as refeições',
    'Sensação de leveza ao longo do dia',
    'Roupas vestindo melhor, sem apertar na região abdominal',
    'Mais conforto no corpo e no espelho',
];

const notForYou = [
    'Cortar comida aleatoriamente achando que o problema é “excesso”',
    'Viver tomando chá, pílula ou solução milagrosa',
    'Fazer exercício infinito esperando desinchar a barriga',
    'Ignorar os gatilhos internos que causam o inchaço',
    'Tratar inchaço como gordura',
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
                        O que você conquista:
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
