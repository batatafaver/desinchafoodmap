'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Gift, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Offer() {
  return (
    <section id="comprar" className="w-full bg-primary/10 py-8 sm:py-12">
      <div className="container mx-auto max-w-3xl px-4">
        <Card className="shadow-2xl border-primary border-2">
          <CardContent className="p-6 text-center sm:p-8 md:p-12">
            <h2 className="text-center font-headline text-xl font-extrabold tracking-tight sm:text-3xl" dangerouslySetInnerHTML={{ __html: 'CHEGA DE ANDAR <span class="text-primary">INCHADA</span> E <span class="text-primary">ESCONDENDO A BARRIGA</span>' }} />

            <div className="mt-8 text-left">
              <p className="flex items-center gap-2 text-base font-bold text-foreground">
                <Check className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                 Ao Entrar Hoje, Você Recebe:
              </p>

              <ul className="mt-6 space-y-4 text-sm text-muted-foreground sm:text-base">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-bold text-primary">Acesso imediato ao Protocolo Desincha de 7 Dias</span>
                    <p className="text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: 'Método <span class="font-bold">validado</span> pra <span class="font-bold">reduzir o inchaço</span> abdominal e sentir o corpo mais leve já na <span class="font-bold">primeira semana.</span>' }} />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-bold text-primary">Método simples, sem dieta restritiva e sem treino maluco</span>
                    <p className="text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: 'Nada de <span class="font-bold">passar fome</span>, se matar de exercício ou viver <span class="font-bold">cortando tudo</span>.' }} />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-bold text-primary">Comunidade fechada de mulheres que não aceitam mais sofrer inchadas</span>
                    <p className="text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: 'Apoio, troca de experiências e <span class="font-bold">motivação</span> pra você <span class="font-bold">não desistir no meio.</span>' }} />
                  </div>
                </li>
                 <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-bold text-primary">Resultados visíveis já na primeira semana</span>
                    <p className="text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: '(Ou você continua fazendo de conta que é <span class="font-bold">normal viver estufada?</span>) 😈' }} />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                   <div>
                    <span className="font-bold text-primary">BÔNUS #1 – Bebidas Rápidas Anti-Inchaço</span>
                    <p className="text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: 'Receitas simples pra <span class="font-bold">aliviar gases</span> e <span class="font-bold">reduzir o estufamento</span> nos momentos mais críticos.' }} />
                  </div>
                </li>
                 <li className="flex items-start gap-3">
                  <Gift className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                   <div>
                    <span className="font-bold text-primary">BÔNUS #2 – Guia de Substituições Inteligentes</span>
                    <p className="text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: 'Aprenda <span class="font-bold">exatamente o que trocar</span> na alimentação pra não inflamar a barriga — <span class="font-bold">sem radicalismo.</span>' }} />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                   <div>
                    <span className="font-bold text-primary">BÔNUS #3 – Acesso ao Grupo VIP de Alunas</span>
                    <p className="text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: 'Um grupo <span class="font-bold">exclusivo</span> pra tirar dúvidas, compartilhar resultados e <span class="font-bold">manter a constância</span> até o fim.' }} />
                  </div>
                </li>
              </ul>
            </div>

            <div className="my-8">
              <p className="text-base text-muted-foreground sm:text-lg">De <span className="line-through">R$197,00</span> por apenas:</p>
              <p className="font-headline text-6xl font-bold text-primary sm:text-7xl">R$37,00</p>
              <p className="text-base text-muted-foreground">à vista</p>
            </div>
            <Link href="https://zuckpay.com.br/checkout/protocolo-7-dias-foodmap" target="_blank">
              <Button size="lg" className="w-full max-w-md px-6 text-base whitespace-normal h-auto py-3" variant="default">
                <ShoppingCart className="mr-2 h-5 w-5" />
                QUERO O PROTOCOLO DESINCHA AGORA
              </Button>
            </Link>
            <div className="mt-6 flex flex-col items-center gap-3">
                <Image
                    src="https://i.postimg.cc/MT0LSMvj/puzzle-me-compra-segura-badge-980x140-1.gif"
                    alt="Compra Segura e Métodos de Pagamento"
                    width={350}
                    height={50}
                    className="object-contain"
                />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
