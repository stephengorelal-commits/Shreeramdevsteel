import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryStrip from '@/components/CategoryStrip';
import RetailWholesale from '@/components/RetailWholesale';
import Products from '@/components/Products';
import Applications from '@/components/Applications';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowToEnquire from '@/components/HowToEnquire';
import About from '@/components/About';
import ServiceArea from '@/components/ServiceArea';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileBottomBar from '@/components/MobileBottomBar';
import { useRevealAnimation, useSectionTracking } from '@/lib/hooks';
import { initScrollTracking } from '@/lib/analytics';

function App() {
  useRevealAnimation();
  useSectionTracking();

  useEffect(() => {
    initScrollTracking();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryStrip />
        <RetailWholesale />
        <Products />
        <Applications />
        <Gallery />
        <WhyChooseUs />
        <HowToEnquire />
        <About />
        <ServiceArea />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
      {/* Spacer for mobile bottom bar */}
      <div className="h-14 lg:hidden" aria-hidden="true" />
    </>
  );
}

export default App;
