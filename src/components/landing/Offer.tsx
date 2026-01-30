'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Offer() {
  return (
    <section id="comprar" className="w-full bg-primary/10 py-8 sm:py-12">
      <div className="container mx-auto max-w-3xl px-4">
        <Card className="shadow-2xl border-primary border-2">
          <CardContent className="p-8 text-center md:p-12">
            <h2 className="text-center font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
              Chega de andar estufada <span className="text-primary">que nem um balão</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
                Entre <span className="font-bold text-primary">agora</span> no Protocolo Desincha Logo. O método que já fez <span className="font-bold text-primary">1.387 mulheres</span> darem um <span className="font-bold text-primary">basta</span> no inchaço, nos gases e na vergonha de vestir roupa colada 😤
            </p>

             <ul className="mt-6 text-left space-y-2 text-base text-foreground/80">
                <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span><span className="font-bold text-primary">Acesso imediato</span> ao protocolo completo</span>
                </li>
                 <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span><span className="font-bold text-primary">Comunidade fechada</span> de mulheres que não aceitam mais sofrer</span>
                </li>
                 <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span><span className="font-bold text-primary">Resultados visíveis em até 7 dias</span> (ou você vai continuar se sentindo um lixo?)</span>
                </li>
            </ul>

            <div className="my-8">
              <p className="text-lg text-foreground/60">De <span className="line-through">R$197</span> por apenas</p>
              <p className="font-headline text-6xl font-bold text-primary">R$37,00</p>
              <p className="text-base text-foreground/80">à vista.</p>
              <p className="mt-2 text-sm text-foreground/70">👉 <span className="font-bold text-primary">Menos que um café</span> pra parar de odiar a própria barriga ☕🖕</p>
            </div>
            <Link href="https://zuckpay.com.br/checkout/protocolo-7-dias-foodmap" target="_blank">
              <Button size="lg" className="w-full max-w-md px-3 text-lg" variant="default">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Quero meu protocolo agora!
              </Button>
            </Link>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-yellow-600">
                <p className="text-center">
                  <span className="font-bold">⚠️ Atenção:</span> Esse valor é promocional e <span className="font-bold text-destructive">pode aumentar a qualquer momento</span>.
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
