import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import SocialProof from '@/components/landing/SocialProof';
import Benefits from '@/components/landing/Benefits';
import WhatsInside from '@/components/landing/WhatsInside';
import Offer from '@/components/landing/Offer';
import Bonuses from '@/components/landing/Bonuses';
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
        <SocialProof />
        <RealResults />
        <Benefits />
        <ForWhom />
        <WhatsInside />
        <Bonuses />
        <Offer />
        <GuaranteeFaq />
        <About />
      </main>
      <LandingFooter />
    </div>
  );
}
