import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import Quiz from "@/components/Quiz";
import { useLanguage } from "@/contexts/LanguageContext";

const ClickEventsSection = () => {
  const { t } = useLanguage();
  const [clickCount, setClickCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleTryIt = () => {
    setClickCount(prev => prev + 1);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 2000);
  };

  const quizQuestions = [
    {
      question: t("click.quiz1.question"),
      options: [t("click.quiz1.opt1"), t("click.quiz1.opt2"), t("click.quiz1.opt3"), t("click.quiz1.opt4")],
      correctIndex: 1
    },
    {
      question: t("click.quiz2.question"),
      options: [t("click.quiz2.opt1"), t("click.quiz2.opt2"), t("click.quiz2.opt3"), t("click.quiz2.opt4")],
      correctIndex: 2
    }
  ];

  return (
    <section id="click-events" className="section-card">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          1
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t("click.title")}</h2>
      </div>
      
      <p 
        className="text-lg text-muted-foreground mb-6 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t("click.explanation") }}
      />

      <CodeBlock code={t("click.code")} onTryIt={handleTryIt} />

      <div className={`demo-area mt-6 ${showFeedback ? 'active' : ''}`}>
        {showFeedback ? (
          <div className="text-center animate-slide-up">
            <span className="text-4xl mb-2 block">🎉</span>
            <p className="text-xl font-bold text-primary">{t("click.demoActive")} {clickCount}</p>
          </div>
        ) : (
          <p className="text-muted-foreground text-center">
            {t("click.demoInactive")}
          </p>
        )}
      </div>

      <Quiz questions={quizQuestions} />
    </section>
  );
};

export default ClickEventsSection;
