
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

export default function Offer() {
  return (
    <section id="comprar" className="w-full bg-accent/10 py-8 sm:py-12">
      <div className="container mx-auto max-w-3xl px-4">
        <Card className="shadow-2xl border-primary border-2">
          <CardContent className="p-8 text-center md:p-12">
            <Image
              src="https://i.postimg.cc/PpXGmD4r/ccb87a60-9287-422a-ae5a-9fc3e9dc512b.jpg"
              alt="Protocolo Desincha Logo"
              width={150}
              height={150}
              className="mx-auto mb-6"
            />
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
              <p className="mt-2 text-sm text-foreground/70">👉 Menos que um café pra parar de odiar a própria barriga ☕🖕</p>
            </div>
            <Button asChild size="lg" className="w-full max-w-md text-base md:text-lg bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse">
              <a href="https://pay.kiwify.com.br/XfjVRJl">
                <ShoppingCart className="mr-2 h-5 w-5" />
                QUERO O PROTOCOLO AGORA!
              </a>
            </Button>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-yellow-600">
                <AlertTriangle className="h-4 w-4" />
                <p className="text-center">
                  <span className="font-bold">⚠️ ATENÇÃO:</span> Esse valor é promocional e <span className="font-bold">PODE AUMENTAR A QUALQUER MOMENTO</span>.
                  <br />
                  Quem deixa pra depois, continua inchada 🤡
                </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
