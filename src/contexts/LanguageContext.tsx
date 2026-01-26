import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ja";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "hero.title": "Learn JavaScript",
    "hero.subtitle": "by Doing",
    "hero.description": "Master JavaScript through 7 interactive lessons. Click buttons, see results, and learn by experimenting — no boring lectures!",
    "hero.cta": "Start Learning →",
    "section.clickEvents": "Click Events",
    "section.variables": "Variables",
    "section.dom": "DOM",
    "section.input": "Input",
    "section.conditions": "If/Else",
    "section.loops": "Loops",
    "section.game": "Game",
    "footer.resources": "JavaScript Resources",
    "footer.mdn": "MDN Web Docs",
    "footer.w3schools": "W3Schools",
    "footer.jsInfo": "JavaScript.info",
    "footer.built": "Built for beginners who learn by doing",
    "quiz.question": "Question",
    "quiz.of": "of",
    "quiz.correct": "Correct!",
    "quiz.incorrect": "Incorrect",
    "quiz.next": "Next Question",
    "quiz.complete": "Quiz Complete!",
    "quiz.score": "Your Score",
    "quiz.tryAgain": "Try Again",
    "tryIt": "Try it!",
  },
  ja: {
    "hero.title": "JavaScript を学ぼう",
    "hero.subtitle": "実践で覚える",
    "hero.description": "7つのインタラクティブなレッスンでJavaScriptをマスター。ボタンをクリックして、結果を確認し、実験しながら学びましょう！",
    "hero.cta": "学習を始める →",
    "section.clickEvents": "クリック",
    "section.variables": "変数",
    "section.dom": "DOM",
    "section.input": "入力",
    "section.conditions": "条件分岐",
    "section.loops": "ループ",
    "section.game": "ゲーム",
    "footer.resources": "JavaScript リソース",
    "footer.mdn": "MDN Web Docs",
    "footer.w3schools": "W3Schools",
    "footer.jsInfo": "JavaScript.info",
    "footer.built": "実践で学ぶ初心者のために作られました",
    "quiz.question": "問題",
    "quiz.of": "/",
    "quiz.correct": "正解！",
    "quiz.incorrect": "不正解",
    "quiz.next": "次の問題",
    "quiz.complete": "クイズ完了！",
    "quiz.score": "スコア",
    "quiz.tryAgain": "もう一度",
    "tryIt": "試してみる！",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("preferred-language");
      if (saved === "en" || saved === "ja") return saved;
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("preferred-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
