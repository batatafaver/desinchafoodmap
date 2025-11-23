'use client';

import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const contentItems = [
  'O que são FODMAPs e como afetam seu corpo (de forma simples).',
  'Protocolo passo a passo de 7 dias com cardápios e guias diários.',
  'Lista de alimentos permitidos e proibidos na fase de teste.',
  'Receitas rápidas, deliciosas e com baixo teor de FODMAPs.',
  'Lista de substituições inteligentes para seus alimentos favoritos.',
  'Plano de reintrodução alimentar para você voltar a comer de tudo sem medo.',
];

export default function WhatsInside() {
  return (
    <section id="conteudo" className="w-full bg-secondary/30 py-16 sm:py-24">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4">
        <div>
          <h2 className="font-headline text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            O que você recebe <span className="text-primary">imediatamente</span>
          </h2>
          <p className="mt-4 text-center text-lg text-foreground/70">
            Um guia completo, direto ao ponto, para você aplicar e ver resultados.
          </p>
          <ul className="mx-auto mt-8 max-w-2xl space-y-4">
            {contentItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
