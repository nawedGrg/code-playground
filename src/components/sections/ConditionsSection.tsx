import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import Quiz from "@/components/Quiz";
import { useLanguage } from "@/contexts/LanguageContext";

const ConditionsSection = () => {
  const { t } = useLanguage();
  const [number, setNumber] = useState<number | null>(null);
  const [result, setResult] = useState("");

  const handleTryIt = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
    
    if (randomNum >= 50) {
      setResult(t("cond.high"));
    } else {
      setResult(t("cond.low"));
    }
  };

  const quizQuestions = [
    {
      question: t("cond.quiz1.question"),
      options: [t("cond.quiz1.opt1"), t("cond.quiz1.opt2"), t("cond.quiz1.opt3"), t("cond.quiz1.opt4")],
      correctIndex: 2
    },
    {
      question: t("cond.quiz2.question"),
      options: [t("cond.quiz2.opt1"), t("cond.quiz2.opt2"), t("cond.quiz2.opt3"), t("cond.quiz2.opt4")],
      correctIndex: 2
    },
    {
      question: t("cond.quiz3.question"),
      options: [t("cond.quiz3.opt1"), t("cond.quiz3.opt2"), t("cond.quiz3.opt3"), t("cond.quiz3.opt4")],
      correctIndex: 2
    }
  ];

  return (
    <section id="conditions" className="section-card">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          5
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t("cond.title")}</h2>
      </div>
      
      <p 
        className="text-lg text-muted-foreground mb-6 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t("cond.explanation") }}
      />

      <CodeBlock code={t("cond.code")} onTryIt={handleTryIt} />

      <div className={`demo-area mt-6 ${number !== null ? 'active' : ''}`}>
        {number !== null ? (
          <div className="text-center animate-slide-up">
            <div className="space-y-2">
              <p className="text-muted-foreground">{t("cond.randomGenerated")}</p>
              <p className="text-4xl font-bold text-primary">{number}</p>
              <p className="text-sm text-muted-foreground">
                {t("cond.checking")} <code className="px-2 py-1 bg-code text-code-foreground rounded">if (number &gt;= 50)</code>
              </p>
              <p className={`text-xl font-bold ${number >= 50 ? 'text-success' : 'text-warning'}`}>
                {result}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground text-center">
            {t("cond.demoInactive")}
          </p>
        )}
      </div>

      <Quiz questions={quizQuestions} />
    </section>
  );
};

export default ConditionsSection;
