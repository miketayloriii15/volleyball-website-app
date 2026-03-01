import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Features from '@/components/Features';
import CoachesSection from '@/components/CoachesSection';
import Benefits from '@/components/Benefits';
import Timeline from '@/components/Timeline';
import PricingCard from '@/components/PricingCard';
import PriceIncludes from '@/components/PriceIncludes';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main id="main-content">
        <Hero />
        <WhyUs />
        <Features />
        <CoachesSection />
        <Benefits />
        <Timeline />
        <PricingCard />
        <PriceIncludes />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
