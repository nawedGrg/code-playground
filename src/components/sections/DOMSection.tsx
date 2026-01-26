import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import Quiz from "@/components/Quiz";
import { useLanguage } from "@/contexts/LanguageContext";

const DOMSection = () => {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState("");
  const [textChanged, setTextChanged] = useState(false);

  const handleTryIt = () => {
    const newTexts = [
      t("dom.randomText1"),
      t("dom.randomText2"),
      t("dom.randomText3"),
      t("dom.randomText4")
    ];
    const randomText = newTexts[Math.floor(Math.random() * newTexts.length)];
    setDisplayText(randomText);
    setTextChanged(true);
  };

  const quizQuestions = [
    {
      question: t("dom.quiz1.question"),
      options: [t("dom.quiz1.opt1"), t("dom.quiz1.opt2"), t("dom.quiz1.opt3"), t("dom.quiz1.opt4")],
      correctIndex: 1
    },
    {
      question: t("dom.quiz2.question"),
      options: [t("dom.quiz2.opt1"), t("dom.quiz2.opt2"), t("dom.quiz2.opt3"), t("dom.quiz2.opt4")],
      correctIndex: 1
    },
    {
      question: t("dom.quiz3.question"),
      options: [t("dom.quiz3.opt1"), t("dom.quiz3.opt2"), t("dom.quiz3.opt3"), t("dom.quiz3.opt4")],
      correctIndex: 2
    }
  ];

  return (
    <section id="dom" className="section-card">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          3
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t("dom.title")}</h2>
      </div>
      
      <p 
        className="text-lg text-muted-foreground mb-6 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t("dom.explanation") }}
      />

      <CodeBlock code={t("dom.code")} onTryIt={handleTryIt} />

      <div className={`demo-area mt-6 ${textChanged ? 'active' : ''}`}>
        <div className="text-center">
          <p 
            className={`text-2xl font-bold transition-all duration-300 ${textChanged ? 'text-primary scale-110' : 'text-foreground'}`}
          >
            {textChanged ? displayText : t("dom.helloWorld")}
          </p>
          {textChanged && (
            <p className="text-sm text-muted-foreground mt-2 animate-slide-up">
              {t("dom.textChanged")}
            </p>
          )}
        </div>
      </div>

      <Quiz questions={quizQuestions} />
    </section>
  );
};

export default DOMSection;
