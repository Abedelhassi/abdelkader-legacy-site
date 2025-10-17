import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { Quote } from 'lucide-react';

export function Quotes() {
  const { language } = useLanguage();

  return (
    <section id="quotes" className="py-20 px-4 bg-muted/30">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {translations.quotes.title[language]}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {translations.quotes.items.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-xl bg-card border-2 border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-1"
              style={{ boxShadow: 'var(--shadow-elegant)' }}
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              <p className="text-xl font-medium text-center leading-relaxed pt-4">
                {item.quote[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
