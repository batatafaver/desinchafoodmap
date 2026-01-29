'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function LandingFooter() {
  const logoImage = PlaceHolderImages.find(p => p.id === 'main-logo');

  return (
    <footer className="w-full bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {logoImage ? (
            <Image
              src={logoImage.imageUrl}
              alt={logoImage.description}
              width={150}
              height={75}
              className="object-contain"
              data-ai-hint={logoImage.imageHint}
            />
          ) : (
            <div />
          )}
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-foreground/70 hover:text-accent">Política de Privacidade</Link>
            <Link href="#" className="text-foreground/70 hover:text-accent">Termos de Uso</Link>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-center text-xs text-foreground/60 sm:text-left">
            © 2025 Protocolo Desinch@ — Todos os direitos reservados.
            <br />
            Este produto não substitui o parecer médico profissional. Sempre consulte um profissional da saúde para tratar de assuntos relativos à sua saúde. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </div>
    </footer>
  );
}
