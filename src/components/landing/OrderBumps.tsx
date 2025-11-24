'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShoppingCart } from 'lucide-react';

const allBumps = [
  { id: 'bumpA', name: 'Bebidas Antiinchaço', description: 'Receitas de chás e smoothies.' },
  { id: 'bumpB', name: 'Guia de Substituições', description: 'Trocas inteligentes para não sair da dieta.' },
  { id: 'bumpC', name: 'Receitas Anti-Inchaço Express', description: 'Pratos rápidos e deliciosos.' },
  { id: 'bumpD', name: 'Checklist do Desincha Diário', description: 'Um guia para acompanhar seu progresso.' },
  { id: 'bumpE', name: 'Mini Guia de Reintrodução', description: 'Volte a comer de tudo com segurança.' },
];

export default function OrderBumps() {
  return (
    <section className="w-full bg-secondary/30 py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
          Turbine Seus Resultados <span className="text-primary">(Oportunidades no Checkout)</span>
        </h2>
        <p className="mt-4 text-lg text-foreground/70">
          Ao finalizar sua compra, você terá a chance única de adicionar estes materiais por um preço especial e acelerar sua jornada.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {allBumps.map(bump => (
            <Card key={bump.id} className="bg-background/70 text-left">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <h3 className="font-headline text-lg font-bold text-primary">{bump.name}</h3>
                    <p className="text-sm text-foreground/80">{bump.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="text-sm md:text-lg bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="https://pay.kiwify.com.br/XfjVRJl">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Sim, Quero Ver as Ofertas e Desinchar
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
