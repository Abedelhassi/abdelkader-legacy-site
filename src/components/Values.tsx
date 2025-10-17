import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { Card } from '@/components/ui/card';
import { MessageCircle, Microscope, Shield, Users, Heart } from 'lucide-react';

const icons = [MessageCircle, Microscope, Shield, Users, Heart];

export function Values() {
  const { language } = useLanguage();
  const values = Object.values(translations.values).filter(v => typeof v === 'object' && 'title' in v);

  return (
    <section id="values" className="py-20 px-4 bg-muted/30">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {translations.values.title[language]}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value, idx) => {
            const Icon = icons[idx];
            return (
              <Card
                key={idx}
                className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 bg-card/50 backdrop-blur"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title[language]}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{value.desc[language]}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
