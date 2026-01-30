import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import SocialProof from '@/components/landing/SocialProof';
import Benefits from '@/components/landing/Benefits';
import WhatsInside from '@/components/landing/WhatsInside';
import Offer from '@/components/landing/Offer';
import RealResults from '@/components/landing/RealResults';
import GuaranteeFaq from '@/components/landing/GuaranteeFaq';
import About from '@/components/landing/About';
import LandingFooter from '@/components/landing/LandingFooter';
import ForWhom from '@/components/landing/ForWhom';

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground font-body">
      <Header />
      <main className="flex w-full flex-col items-center overflow-x-hidden">
        <Hero />
        <RealResults />
        <ForWhom />
        <Benefits />
        <SocialProof />
        <WhatsInside />
        <Offer />
        <About />
        <GuaranteeFaq />
      </main>
      <LandingFooter />
    </div>
  );
}
