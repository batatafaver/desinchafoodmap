'use client';

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const today = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <header className="sticky top-0 z-50 w-full bg-red-600 text-white">
      <div className="container mx-auto flex h-16 max-w-7xl flex-col items-center justify-center px-4 text-center">
        <p className="font-semibold">
          Oferta válida para a data de Hoje ({today})
        </p>
        <p className="text-lg font-bold">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </p>
      </div>
    </header>
  );
}
