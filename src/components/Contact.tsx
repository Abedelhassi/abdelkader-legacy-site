import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { Mail, Globe } from 'lucide-react';

export function Contact() {
  const { language } = useLanguage();

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {translations.contact.title[language]}
        </h2>

        <p className="text-xl text-center mb-12 text-muted-foreground">
          {translations.contact.description[language]}
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-card">
            <Mail className="h-6 w-6 text-primary" />
            <span className="font-medium">contact@emirabdelkader.org</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-card">
            <Globe className="h-6 w-6 text-primary" />
            <span className="font-medium">www.emirabdelkader.org</span>
          </div>
        </div>
      </div>
    </section>
  );
}
