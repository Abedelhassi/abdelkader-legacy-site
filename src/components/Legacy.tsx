import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { Card } from '@/components/ui/card';

export function Legacy() {
  const { language } = useLanguage();

  return (
    <section id="legacy" className="py-20 px-4">
      <div className="container max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {translations.legacy.title[language]}
        </h2>

        <Card className="p-8 md:p-12 shadow-elegant bg-gradient-to-br from-card to-primary/5">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
            {translations.legacy.content[language]}
          </p>
        </Card>
      </div>
    </section>
  );
}
