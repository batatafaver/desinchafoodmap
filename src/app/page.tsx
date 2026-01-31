import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import dynamic from 'next/dynamic';

const RealResults = dynamic(() => import('@/components/landing/RealResults'));
const ForWhom = dynamic(() => import('@/components/landing/ForWhom'));
const Benefits = dynamic(() => import('@/components/landing/Benefits'));
const SocialProof = dynamic(() => import('@/components/landing/SocialProof'));
const WhatsInside = dynamic(() => import('@/components/landing/WhatsInside'));
const WhatsIncluded = dynamic(() => import('@/components/landing/WhatsIncluded'));
const Bonus = dynamic(() => import('@/components/landing/Bonus'));
const Offer = dynamic(() => import('@/components/landing/Offer'));
const About = dynamic(() => import('@/components/landing/About'));
const GuaranteeFaq = dynamic(() => import('@/components/landing/GuaranteeFaq'));
const LandingFooter = dynamic(() => import('@/components/landing/LandingFooter'));

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
        <WhatsIncluded />
        <Bonus />
        <Offer />
        <About />
        <GuaranteeFaq />
      </main>
      <LandingFooter />
    </div>
  );
}
