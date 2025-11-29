'use client';

import { Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const forYou = [
    'Está de SACO CHEIO de se sentir estufada e com a barriga dolorida depois de comer.',
    'Sonha em usar roupas justas sem a paranoia da "barriga de grávida".',
    'Quer uma solução RÁPIDA, PRÁTICA e que não te obrigue a passar fome.',
    'Busca entender seu corpo para comer em paz e sem medo.',
    'Sente que o inchaço está roubando sua energia e sua confiança.',
];

const notForYou = [
    'Acha que existe uma pílula mágica para emagrecer sem esforço.',
    'Não está disposta a seguir um plano claro e validado por 7 dias.',
    'Prefere continuar reclamando a tomar uma atitude para mudar.',
    'Não quer resgatar sua autoestima e o controle sobre seu corpo.',
];

export default function ForWhom() {
  return (
    <section className="w-full bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Este protocolo é para <span className="text-primary">você</span>? Seja honesta.
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Isto não é para todo mundo. Veja se você se identifica.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-green-500 border-2">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
                        <Check className="h-7 w-7 text-green-500"/>
                        SIM, se você...
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
                         NÃO COMPRE se você...
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
