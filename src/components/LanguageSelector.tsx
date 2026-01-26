import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div 
      className="flex items-center gap-1 bg-secondary/80 backdrop-blur-sm rounded-full p-1 border border-border"
      role="group"
      aria-label="Language selection"
    >
      <Globe className="w-4 h-4 text-muted-foreground ml-2" aria-hidden="true" />
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          language === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
        }`}
        aria-pressed={language === "en"}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ja")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          language === "ja"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
        }`}
        aria-pressed={language === "ja"}
        aria-label="日本語に切り替え"
      >
        日本語
      </button>
    </div>
  );
};

export default LanguageSelector;
