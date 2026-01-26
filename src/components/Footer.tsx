import { Heart, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="py-12 px-4 border-t border-border bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg font-semibold text-foreground mb-2">
          {t("footer.congrats")}
        </p>
        <p className="text-muted-foreground mb-6">
          {t("footer.completed")}
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a 
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            MDN JavaScript Docs
          </a>
          <a 
            href="https://javascript.info" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            JavaScript.info
          </a>
        </div>

        <p className="mt-8 text-sm text-muted-foreground flex items-center justify-center gap-1">
          {language === "en" ? (
            <>
              {t("footer.madeWith")} <Heart className="w-4 h-4 text-destructive fill-destructive" /> {t("footer.forBeginners")}
            </>
          ) : (
            <>
              <Heart className="w-4 h-4 text-destructive fill-destructive" /> {t("footer.forBeginners")}
            </>
          )}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
