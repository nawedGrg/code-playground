import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import Quiz from "@/components/Quiz";
import { useLanguage } from "@/contexts/LanguageContext";

const VariablesSection = () => {
  const { t, language } = useLanguage();
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [showDemo, setShowDemo] = useState(false);

  const handleTryIt = () => {
    setName(language === "ja" ? "太郎" : "Alex");
    setAge(25);
    setShowDemo(true);
  };

  const quizQuestions = [
    {
      question: t("var.quiz1.question"),
      options: [t("var.quiz1.opt1"), t("var.quiz1.opt2"), t("var.quiz1.opt3"), t("var.quiz1.opt4")],
      correctIndex: 1
    },
    {
      question: t("var.quiz2.question"),
      options: [t("var.quiz2.opt1"), t("var.quiz2.opt2"), t("var.quiz2.opt3"), t("var.quiz2.opt4")],
      correctIndex: 2
    },
    {
      question: t("var.quiz3.question"),
      options: [t("var.quiz3.opt1"), t("var.quiz3.opt2"), t("var.quiz3.opt3"), t("var.quiz3.opt4")],
      correctIndex: 2
    }
  ];

  return (
    <section id="variables" className="section-card">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          2
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t("var.title")}</h2>
      </div>
      
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: t("var.explanation") }} />
      </p>

      <CodeBlock code={t("var.code")} onTryIt={handleTryIt} />

      <div className={`demo-area mt-6 ${showDemo ? 'active' : ''}`}>
        {showDemo ? (
          <div className="text-center animate-slide-up space-y-3">
            <div className="inline-flex items-center gap-4 flex-wrap justify-center">
              <div className="bg-secondary px-4 py-2 rounded-lg">
                <span className="text-sm text-muted-foreground">name = </span>
                <span className="font-bold text-primary">"{name}"</span>
              </div>
              <div className="bg-secondary px-4 py-2 rounded-lg">
                <span className="text-sm text-muted-foreground">age = </span>
                <span className="font-bold text-code-number">{age}</span>
              </div>
            </div>
            <p className="text-success font-semibold">{t("var.demoSuccess")}</p>
          </div>
        ) : (
          <p className="text-muted-foreground text-center">
            {t("var.demoInactive")}
          </p>
        )}
      </div>

      <Quiz questions={quizQuestions} />
    </section>
  );
};

export default VariablesSection;
