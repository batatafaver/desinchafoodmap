'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function StickyCta() {
  return (
    <div className="pointer-events-none fixed bottom-0 z-50 w-full p-4 md:hidden">
      <Button asChild size="lg" className="pointer-events-auto w-full text-base shadow-lg bg-accent text-accent-foreground hover:bg-accent/90">
        <a href="https://pay.kiwify.com.br/XfjVRJl">Quero desinchar agora</a>
      </Button>
    </div>
  );
}
