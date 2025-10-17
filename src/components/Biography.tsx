import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { Card } from '@/components/ui/card';

export function Biography() {
  const { language } = useLanguage();

  return (
    <section id="biography" className="py-20 px-4">
      <div className="container max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          {translations.biography.title[language]}
        </h2>

        <Card className="p-8 md:p-12 shadow-elegant">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
            {translations.biography.content[language]}
          </p>
        </Card>
      </div>
    </section>
  );
}
