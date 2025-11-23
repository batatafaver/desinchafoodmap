'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function Offer() {
  return (
    <section id="comprar" className="w-full bg-accent/10 py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <Card className="shadow-2xl">
          <CardContent className="p-8 text-center md:p-12">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
              Comece agora a sua transformação
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Tenha acesso imediato ao protocolo completo e todos os bônus.
            </p>
            <div className="my-8">
              <p className="text-lg text-foreground/60">De <span className="line-through">R$97</span> por apenas</p>
              <p className="font-headline text-6xl font-bold text-primary">R$37</p>
              <p className="text-foreground/80">ou 2x de R$19,00</p>
            </div>
            <Button asChild size="lg" className="w-full max-w-md text-base md:text-lg bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="https://pay.kiwify.com.br/XfjVRJl">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Quero desinchar agora por R$37
              </a>
            </Button>
            <p className="mt-4 text-sm text-foreground/60">
              Compra 100% segura. Acesso vitalício.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
