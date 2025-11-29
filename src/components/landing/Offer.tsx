'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, AlertTriangle } from 'lucide-react';

export default function Offer() {
  return (
    <section id="comprar" className="w-full bg-accent/10 py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <Card className="shadow-2xl border-primary border-2">
          <CardContent className="p-8 text-center md:p-12">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
              Sua Vaga na Comunidade de Mulheres que Deram um Basta no Inchaço
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Acesso imediato a todo o protocolo + todos os bônus por um preço ridículo.
            </p>
            <div className="my-8">
              <p className="text-lg text-foreground/60">De <span className="line-through">R$197</span> por apenas 12x de</p>
              <p className="font-headline text-7xl font-bold text-primary">R$3,60</p>
              <p className="font-bold text-foreground/80">ou R$37 à vista</p>
              <p className="mt-2 text-sm text-foreground/70">Menos que um café por uma vida sem inchaço!</p>
            </div>
            <Button asChild size="lg" className="w-full max-w-md text-base md:text-lg bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse">
              <a href="https://pay.kiwify.com.br/XfjVRJl">
                <ShoppingCart className="mr-2 h-5 w-5" />
                SIM, QUERO MINHA VAGA AGORA!
              </a>
            </Button>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-yellow-600">
                <AlertTriangle className="h-4 w-4" />
                <p>
                Este valor pode aumentar a <span className="font-bold">QUALQUER MOMENTO</span> sem aviso prévio.
                </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
