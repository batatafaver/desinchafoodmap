'use client';

import { Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const forYou = [
    'Sente a barriga estufada após comer',
    'Sofre com gases e desconforto abdominal',
    'Quer usar roupas justas sem se preocupar',
    'Busca uma solução prática e sem dietas malucas',
    'Quer entender seu corpo e comer em paz',
];

const notForYou = [
    'Procura uma fórmula mágica para emagrecer',
    'Não está disposta a seguir um plano de 7 dias',
    'Acredita que precisa cortar tudo para ter resultado',
    'Já tem acompanhamento médico para o problema',
];

export default function ForWhom() {
  return (
    <section className="w-full bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Este protocolo é para <span className="text-primary">você</span>?
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Veja se o Desinch@ de Verdade se encaixa no seu perfil e objetivos.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
                        <Check className="h-7 w-7"/>
                        É para você que...
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {forYou.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-destructive flex items-center gap-2">
                        <X className="h-7 w-7"/>
                         Não é para você que...
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
