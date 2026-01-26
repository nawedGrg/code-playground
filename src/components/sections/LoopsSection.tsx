import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import Quiz from "@/components/Quiz";
import { useLanguage } from "@/contexts/LanguageContext";

const LoopsSection = () => {
  const { t } = useLanguage();
  const [boxes, setBoxes] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleTryIt = () => {
    setBoxes([]);
    setIsRunning(true);
    
    // Animate boxes appearing one by one
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
        setBoxes(prev => [...prev, i]);
        if (i === 5) setIsRunning(false);
      }, i * 400);
    }
  };

  const quizQuestions = [
    {
      question: t("loop.quiz1.question"),
      options: [t("loop.quiz1.opt1"), t("loop.quiz1.opt2"), t("loop.quiz1.opt3"), t("loop.quiz1.opt4")],
      correctIndex: 1
    },
    {
      question: t("loop.quiz2.question"),
      options: [t("loop.quiz2.opt1"), t("loop.quiz2.opt2"), t("loop.quiz2.opt3"), t("loop.quiz2.opt4")],
      correctIndex: 1
    },
    {
      question: t("loop.quiz3.question"),
      options: [t("loop.quiz3.opt1"), t("loop.quiz3.opt2"), t("loop.quiz3.opt3"), t("loop.quiz3.opt4")],
      correctIndex: 1
    }
  ];

  return (
    <section id="loops" className="section-card">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          6
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t("loop.title")}</h2>
      </div>
      
      <p 
        className="text-lg text-muted-foreground mb-6 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t("loop.explanation") }}
      />

      <CodeBlock code={t("loop.code")} onTryIt={handleTryIt} />

      <div className={`demo-area mt-6 ${boxes.length > 0 ? 'active' : ''}`}>
        {boxes.length > 0 ? (
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {boxes.map((num) => (
              <div
                key={num}
                className="w-16 h-16 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl animate-slide-up shadow-md"
                style={{ animationDelay: `${num * 0.1}s` }}
              >
                {num}
              </div>
            ))}
            {!isRunning && boxes.length === 5 && (
              <p className="w-full text-center mt-4 text-success font-semibold animate-slide-up">
                {t("loop.demoSuccess")}
              </p>
            )}
          </div>
        ) : (
          <p className="text-muted-foreground text-center">
            {t("loop.demoInactive")}
          </p>
        )}
      </div>

      <Quiz questions={quizQuestions} />
    </section>
  );
};

export default LoopsSection;
