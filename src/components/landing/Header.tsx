'use client';

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <header className="sticky top-0 z-50 w-full bg-blue-600 text-white">
      <div className="container mx-auto flex h-auto min-h-16 flex-col items-center justify-center px-4 py-2 text-center">
        <p className="text-sm font-bold uppercase sm:text-base">
          Atenção: Últimas vagas com valor promocional!
        </p>
        <p className="text-lg font-bold">
          A oferta acaba em: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </p>
      </div>
    </header>
  );
}
