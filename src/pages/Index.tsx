import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Biography } from '@/components/Biography';
import { Values } from '@/components/Values';
import { Achievements } from '@/components/Achievements';
import { Quotes } from '@/components/Quotes';
import { Legacy } from '@/components/Legacy';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Biography />
        <Values />
        <Achievements />
        <Quotes />
        <Legacy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
