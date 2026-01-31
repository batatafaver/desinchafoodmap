'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  const nutriImage = PlaceHolderImages.find(p => p.id === 'nutri-batata');

  return (
    <section className="w-full bg-secondary/50 py-12 sm:py-16">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:text-left">
          {nutriImage && (
            <Image
              src={nutriImage.imageUrl}
              alt="Foto de Victor Faversani"
              width={250}
              height={250}
              className="rounded-lg shadow-lg object-cover"
            />
          )}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-headline text-2xl font-bold text-accent" dangerouslySetInnerHTML={{ __html: 'Quem vai te guiar: <span class="text-primary">Victor Faversani</span>' }} />
            <p className="mt-2 max-w-md text-base sm:text-lg leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: 'Nutricionista especializado em <span class="font-bold text-accent">metabolismo e saúde intestinal</span>, com foco em inchaço abdominal feminino.<br/><br/>Ao longo dos últimos anos, já ajudei <span class="font-bold text-accent">mais de 1.300 mulheres</span> a reduzir o inchaço, aliviar gases e parar de viver estufadas, <span class="font-bold">sem dietas radicais, sem terrorismo alimentar e sem sofrimento</span>.<br/><br/>O Protocolo Desincha nasceu da <span class="font-bold">prática, não da teoria.</span><br/><br/>É o mesmo método que eu uso com mulheres comuns, na vida real, que estavam cansadas de tentar de tudo e continuar inchadas.' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
