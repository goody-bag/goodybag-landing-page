import Hero from '@/components/Hero';
import About from '@/components/About';
import Categories from '@/components/Categories';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import WaitlistForm from '@/components/WaitlistForm';
import VendorPartner from '@/components/VendorPartner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Categories />
      <Features />
      <HowItWorks />
      <WaitlistForm />
      <VendorPartner />
      <Footer />
    </main>
  );
}
