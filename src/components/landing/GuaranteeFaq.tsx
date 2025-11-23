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
    question: 'Preciso de algum equipamento especial ou alimento caro?',
    answer: 'Não! O protocolo foi pensado para ser feito com alimentos comuns e acessíveis que você encontra em qualquer mercado. O foco está na combinação e preparação correta, não em ingredientes exóticos.',
  },
  {
    question: 'Em quanto tempo recebo o material?',
    answer: 'O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com o link para baixar o eBook (PDF) e todos os bônus na mesma hora.',
  },
  {
    question: 'Funciona para quem tem a vida corrida?',
    answer: 'Sim! As receitas e o plano são práticos e rápidos, pensados para quem não tem tempo a perder. Muitas opções podem ser preparadas em menos de 20 minutos.',
  },
  {
    question: 'Tenho restrições alimentares, posso fazer?',
    answer: 'O material oferece sugestões de substituições. No entanto, se você tem alergias severas ou doenças crônicas (como doença celíaca ou de Crohn), é fundamental consultar seu médico antes de iniciar.',
  },
  {
    question: 'É uma dieta para emagrecer?',
    answer: 'O foco principal é reduzir o inchaço e o desconforto abdominal. Muitas mulheres relatam perda de medidas e uma sensação de leveza, o que pode refletir na balança, mas o objetivo não é a perda de peso em si.',
  },
];

export default function GuaranteeFaq() {
  return (
    <section id="faq" className="w-full py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Card className="bg-primary text-primary-foreground shadow-lg">
              <CardContent className="p-8 text-center">
                <ShieldCheck className="mx-auto h-16 w-16" />
                <h3 className="mt-4 font-headline text-2xl font-bold">Sua Satisfação ou Seu Dinheiro de Volta</h3>
                <p className="mt-2">
                  Teste o protocolo por 7 dias. Se você não notar uma melhora significativa no seu bem-estar ou achar que o conteúdo não é para você, basta me enviar um único e-mail e eu devolvo 100% do seu investimento. Sem burocracia, sem perguntas. O risco é todo meu.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col">
             <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4 text-center lg:text-left">
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
