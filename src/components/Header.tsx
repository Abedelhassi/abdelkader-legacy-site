import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <nav className="flex items-center gap-6">
          {Object.entries(translations.nav).map(([key, value]) => (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {value[language]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <Button
              variant={language === 'ar' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('ar')}
              className="font-semibold"
            >
              🇩🇿 AR
            </Button>
            <Button
              variant={language === 'en' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('en')}
              className="font-semibold"
            >
              🇬🇧 EN
            </Button>
            <Button
              variant={language === 'it' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('it')}
              className="font-semibold"
            >
              🇮🇹 IT
            </Button>
          </div>

          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
