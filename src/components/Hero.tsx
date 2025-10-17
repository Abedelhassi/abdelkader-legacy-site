import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import logo from '@/assets/logo.jpg';

export function Hero() {
  const { language } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative z-10 text-center px-4">
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Emir Abdelkader Center Logo"
            className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-full shadow-2xl"
            style={{ boxShadow: 'var(--shadow-glow)' }}
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
          {translations.hero.title[language]}
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-muted-foreground animate-fade-in">
          {translations.hero.subtitle[language]}
        </p>

        <div className="inline-block px-8 py-4 bg-primary/10 rounded-full border-2 border-primary/20 animate-fade-in">
          <p className="text-2xl md:text-3xl font-semibold text-primary">
            {translations.hero.quote[language]}
          </p>
        </div>
      </div>
    </section>
  );
}
