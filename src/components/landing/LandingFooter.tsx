'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Leaf } from 'lucide-react';

export default function LandingFooter() {

  return (
    <footer className="w-full bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <p className="font-headline text-lg font-bold">Protocolo Desincha</p>
          </div>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-foreground/70 hover:text-primary">Política de Privacidade</Link>
            <Link href="#" className="text-foreground/70 hover:text-primary">Termos de Uso</Link>
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
