'use client';

import { Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const forYou = [
    'Barriga <span class="font-bold text-primary">visivelmente menos inchada</span>',
    '<span class="font-bold text-primary">Menos gases e desconforto</span> após as refeições',
    'Sensação de <span class="font-bold text-primary">leveza</span> ao longo do dia',
    'Roupas vestindo melhor, sem apertar na região abdominal',
    'Mais <span class="font-bold text-primary">conforto no corpo e no espelho</span>',
];

const notForYou = [
    'Cortar comida aleatoriamente achando que o problema é “excesso”',
    'Viver tomando chá, pílula ou <span class="font-bold text-primary">solução milagrosa</span>',
    'Fazer exercício infinito esperando desinchar a barriga',
    'Ignorar os <span class="font-bold text-primary">gatilhos internos</span> que causam o inchaço',
    '<span class="font-bold text-primary">Tratar inchaço como gordura</span>',
];

export default function ForWhom() {
  return (
    <section className="w-full bg-background py-12 sm:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-2xl font-extrabold tracking-tight sm:text-3xl" dangerouslySetInnerHTML={{ __html: 'O que você pode esperar em <span class="text-primary">apenas 7 dias</span> aplicando o Protocolo Desincha' }} />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-primary border-2">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
                        <Check className="h-7 w-7"/>
                        O que você conquista:
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3 text-base">
                        {forYou.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                <span className="font-medium" dangerouslySetInnerHTML={{ __html: item }}></span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <Card className="border-destructive border-2">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-destructive flex items-center gap-2">
                        <X className="h-7 w-7"/>
                         Agora, não entre se você...
                    </CardTitle>
                </CardHeader>
                <CardContent>
                     <ul className="space-y-3 text-base">
                        {notForYou.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <X className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
                                <span dangerouslySetInnerHTML={{ __html: item }}></span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
        <div className="mt-12 text-center">
          <h3 className="font-headline text-xl font-bold text-foreground sm:text-2xl" dangerouslySetInnerHTML={{ __html: 'O Protocolo Desincha existe para <span class="text-primary">corrigir tudo isso</span>' }} />
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground" dangerouslySetInnerHTML={{ __html: 'Ele é um protocolo <span class="font-bold">simples e prático</span>, criado para atuar no que <span class="font-bold">realmente causa o inchaço abdominal</span>, e não apenas mascarar os sintomas.' }} />
          <ul className="mt-6 inline-flex flex-col items-start gap-2 text-left text-base">
            <li className="flex items-center gap-2 font-medium">
              <Check className="h-5 w-5 flex-shrink-0 text-primary" />
              <span>Sem dieta restritiva.</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <Check className="h-5 w-5 flex-shrink-0 text-primary" />
              <span>Sem treino maluco.</span>
            </li>
            <li className="flex items-center gap-2 font-medium">
              <Check className="h-5 w-5 flex-shrink-0 text-primary" />
              <span>Sem promessas vazias.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
