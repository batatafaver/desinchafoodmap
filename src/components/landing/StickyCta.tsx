'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function StickyCta() {
  return (
    <div className="pointer-events-none fixed bottom-0 z-50 w-full p-4 md:hidden">
      <Button asChild size="lg" className="pointer-events-auto w-full text-base shadow-lg bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse">
        <a href="https://pay.kiwify.com.br/XfjVRJl">QUERO MINHA TRANSFORMAÇÃO AGORA!</a>
      </Button>
    </div>
  );
}
