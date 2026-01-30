'use client';

import { Puzzle, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const includedContent = [
    {
        title: 'ETAPA 1 — DESINCHAR E ALIVIAR',
        description: 'Você aprende como <span class="font-bold">reduzir rapidamente o inchaço</span> abdominal, <span class="font-bold">aliviar gases</span> e acabar com a sensação de barriga dura e estufada logo nos <span class="font-bold">primeiros dias</span>.',
        result: '<span class="font-bold">barriga visivelmente menos inchada</span> e <span class="font-bold">sensação imediata de leveza.</span>',
    },
    {
        title: 'ETAPA 2 — ALIMENTAR SEM INCHAR',
        description: 'Um guia <span class="font-bold">simples e direto</span> mostrando <span class="font-bold text-primary">exatamente quais alimentos</span> favorecem o inchaço — e quais ajudam a reduzir.',
        result: 'você para de cortar comida à toa e passa a <span class="font-bold">comer com segurança e clareza.</span>'
    },
    {
        title: 'ETAPA 3 — ROTINA ANTI-INCHAÇO',
        description: '<span class="font-bold">Receitas práticas, organização simples</span> e uma <span class="font-bold">rotina fácil de seguir</span> para aplicar o protocolo sem complicação no dia a dia.',
        result: '<span class="font-bold">constância sem sofrimento</span> e menos chances de desistir.'
    },
    {
        title: 'ETAPA 4 — REINTRODUÇÃO E CONTROLE',
        description: 'Um <span class="font-bold">plano claro para reintroduzir alimentos</span>, identificar o que causa inchaço no seu corpo e <span class="font-bold">manter os resultados no longo prazo.</span>',
        result: '<span class="font-bold">controle total do inchaço</span> sem viver em restrição.'
    }
];

export default function WhatsIncluded() {
  return (
    <section id="o-que-voce-recebe" className="w-full bg-background py-12 sm:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-2xl font-extrabold tracking-tight sm:text-3xl" dangerouslySetInnerHTML={{ __html: 'Aqui Está <span class="text-primary">Exatamente Tudo o Que Você Vai Receber</span> ao Entrar Hoje no Protocolo Desincha.' }}/>
        </div>

        <div className="mt-12 space-y-10">
            <Card className="overflow-hidden border-2 border-primary/20 bg-secondary/20 shadow-lg">
                <CardContent className="p-6">
                    <div className="text-center">
                        <h3 className="font-headline text-xl sm:text-2xl font-bold text-primary">Protocolo Desincha – Método Completo de 7 Dias</h3>
                        <p className="mt-2 text-sm sm:text-base text-foreground/80" dangerouslySetInnerHTML={{ __html: 'O Protocolo Desincha é um método <span class="font-bold">simples e estratégico</span>, dividido em <span class="font-bold text-primary">4 Etapas Claras</span>, pensadas para reduzir o inchaço abdominal da causa ao resultado, em <span class="font-bold">apenas 7 dias.</span>' }} />
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {includedContent.map((item, index) => (
                     <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-start gap-3 font-headline text-base sm:text-lg text-primary">
                                <Puzzle className="h-8 w-8 mt-0 flex-shrink-0 text-primary/80" />
                                <span>{item.title}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                            <p className="text-xs sm:text-sm text-foreground/80 flex-grow" dangerouslySetInnerHTML={{ __html: item.description }}/>
                            <div className="mt-4 flex items-start gap-2 text-xs sm:text-sm text-accent">
                                <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                <p className="font-medium" dangerouslySetInnerHTML={{ __html: '<span class="font-bold">Resultado:</span> ' + item.result }}/>
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
