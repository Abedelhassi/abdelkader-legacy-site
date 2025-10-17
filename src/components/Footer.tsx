import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';

export function Footer() {
  const { language } = useLanguage();

  const currentYear = new Date().getFullYear();

  const footerText = {
    ar: 'جميع الحقوق محفوظة',
    en: 'All rights reserved',
    it: 'Tutti i diritti riservati',
  };

  return (
    <footer className="border-t bg-card/50 backdrop-blur">
      <div className="container py-12 px-4">
        <div className="flex flex-col items-center gap-6">
          <img src={logo} alt="Logo" className="w-20 h-20 object-contain rounded-full" />
          
          <p className="text-center text-muted-foreground">
            © {currentYear} Centro Emir Abdelkader. {footerText[language]}.
          </p>
        </div>
      </div>
    </footer>
  );
}
