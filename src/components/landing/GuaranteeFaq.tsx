'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'É mais uma dessas dietas malucas?',
    answer: '<span class="font-bold text-accent">NÃO!</span> Isso não é uma dieta restritiva. É um protocolo estratégico de 7 dias para identificar o que te inflama e te dar as ferramentas para comer em paz. O objetivo é <span class="font-bold text-accent">liberdade, não restrição.</span>',
  },
  {
    question: 'Em quanto tempo recebo o material? É seguro?',
    answer: 'O acesso é <span class="font-bold text-accent">IMEDIATO</span> após a confirmação do pagamento, que é 100% seguro. Você receberá um e-mail com o link para baixar o eBook (PDF) e todos os bônus na mesma hora. Sem espera, sem enrolação.',
  },
  {
    question: 'Não tenho tempo para nada. Isso funciona para mim?',
    answer: '<span class="font-bold text-accent">Sim!</span> O protocolo foi desenhado para a mulher moderna. As receitas e o plano são <span class="font-bold text-accent">práticos, rápidos</span> e pensados para quem vive na correria. Muitas opções levam menos de 20 minutos.',
  },
  {
    question: 'Tenho gastrite/outra condição. Posso fazer?',
    answer: 'O material oferece sugestões e é baseado em comida de verdade. No entanto, se você tem doenças crônicas (como doença celíaca ou de Crohn), é fundamental que seu médico autorize. A sua <span class="font-bold text-accent">saúde vem em primeiro lugar.</span>',
  },
  {
    question: 'Vou emagrecer com isso?',
    answer: 'O foco 100% é <span class="font-bold text-accent">eliminar o inchaço e o desconforto</span>. Como consequência, a maioria das mulheres perde medidas e sente uma leveza que reflete na balança, mas não é um produto de emagrecimento. É um <span class="font-bold text-accent">protocolo de bem-estar.</span>',
  },
];

export default function GuaranteeFaq() {
  return (
    <section id="faq" className="w-full py-12 sm:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Card className="bg-primary text-primary-foreground shadow-lg">
              <CardContent className="p-8 text-center">
                <ShieldCheck className="mx-auto h-16 w-16" />
                <h3 className="mt-4 font-headline text-2xl font-bold">Garantia Blindada: <span className="text-yellow-300">Risco TODO MEU!</span></h3>
                <p className="mt-2 text-base">
                  Eu confio tanto no poder deste protocolo que coloco minha pele em jogo. Teste tudo por <span class="font-bold text-yellow-300">7 dias</span>. Se você não notar uma melhora CLARA e EVIDENTE no seu bem-estar, ou simplesmente achar que não é para você, me envie um único e-mail. Eu devolvo <span class="font-bold text-yellow-300">100% do seu dinheiro</span> na hora. Sem perguntas, sem letras miúdas. O risco é zero para você.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col">
             <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl mb-4 text-center lg:text-left">
              Suas Dúvidas, <span className="text-accent">Destruídas.</span>
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
