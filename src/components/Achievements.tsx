import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { Card } from '@/components/ui/card';
import { BookOpen, MessageSquare, Network, GraduationCap, FileText } from 'lucide-react';

const icons = [BookOpen, MessageSquare, Network, GraduationCap, FileText];

export function Achievements() {
  const { language } = useLanguage();

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {translations.achievements.title[language]}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {translations.achievements.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <Card
                key={idx}
                className="p-6 hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 h-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title[language]}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc[language]}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
