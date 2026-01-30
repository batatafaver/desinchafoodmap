'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Gift, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Offer() {
  return (
    <section id="comprar" className="w-full bg-primary/10 py-8 sm:py-12">
      <div className="container mx-auto max-w-3xl px-4">
        <Card className="shadow-2xl border-primary border-2">
          <CardContent className="p-8 text-center md:p-12">
            <h2 className="text-center font-headline text-2xl font-extrabold tracking-tight sm:text-3xl">
              CHEGA DE ANDAR INCHADA E ESCONDENDO A BARRIGA
            </h2>

            <div className="mt-8 text-left">
              <p className="flex items-center gap-2 text-base sm:text-lg font-bold text-foreground">
                ✅ Ao Entrar Hoje, Você Recebe:
              </p>

              <ul className="mt-6 space-y-4 text-base text-foreground/80">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-bold text-primary">Acesso imediato ao Protocolo Desincha de 7 Dias</span>
                    <p className="text-xs sm:text-sm">Método validado pra reduzir o inchaço abdominal e sentir o corpo mais leve já na primeira semana.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-bold text-primary">Método simples, sem dieta restritiva e sem treino maluco</span>
                    <p className="text-xs sm:text-sm">Nada de passar fome, se matar de exercício ou viver cortando tudo.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-bold text-primary">Comunidade fechada de mulheres que não aceitam mais sofrer inchadas</span>
                    <p className="text-xs sm:text-sm">Apoio, troca de experiências e motivação pra você não desistir no meio.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-bold text-primary">Resultados visíveis já na primeira semana</span>
                    <p className="text-xs sm:text-sm">(Ou você continua fazendo de conta que é normal viver estufada?) 😈</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                   <div>
                    <span className="font-bold text-primary">BÔNUS #1 – Bebidas Rápidas Anti-Inchaço</span>
                    <p className="text-xs sm:text-sm">Receitas simples pra aliviar gases e reduzir o estufamento nos momentos mais críticos.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-3">
                  <Gift className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                   <div>
                    <span className="font-bold text-primary">BÔNUS #2 – Guia de Substituições Inteligentes</span>
                    <p className="text-xs sm:text-sm">Aprenda exatamente o que trocar na alimentação pra não inflamar a barriga — sem radicalismo.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                   <div>
                    <span className="font-bold text-primary">BÔNUS #3 – Acesso ao Grupo VIP de Alunas</span>
                    <p className="text-xs sm:text-sm">Um grupo exclusivo pra tirar dúvidas, compartilhar resultados e manter a constância até o fim.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="my-8">
              <p className="text-lg text-foreground/60">De <span className="line-through">R$197,00</span> por apenas:</p>
              <p className="font-headline text-5xl sm:text-6xl font-bold text-primary">R$37,00</p>
              <p className="text-base text-foreground/80">à vista</p>
            </div>
            <Link href="https://zuckpay.com.br/checkout/protocolo-7-dias-foodmap" target="_blank">
              <Button size="lg" className="w-full max-w-md px-4 text-base sm:text-lg" variant="default">
                <ShoppingCart className="mr-2 h-5 w-5" />
                QUERO O PROTOCOLO DESINCHA AGORA
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
