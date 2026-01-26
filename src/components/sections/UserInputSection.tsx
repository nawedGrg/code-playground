import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/button";
import Quiz from "@/components/Quiz";
import { useLanguage } from "@/contexts/LanguageContext";

const UserInputSection = () => {
  const { t } = useLanguage();
  const [inputValue, setInputValue] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setGreeting(t("input.greeting").replace("{name}", inputValue));
    } else {
      setGreeting(t("input.pleaseEnter"));
    }
  };

  const quizQuestions = [
    {
      question: t("input.quiz1.question"),
      options: [t("input.quiz1.opt1"), t("input.quiz1.opt2"), t("input.quiz1.opt3"), t("input.quiz1.opt4")],
      correctIndex: 1
    },
    {
      question: t("input.quiz2.question"),
      options: [t("input.quiz2.opt1"), t("input.quiz2.opt2"), t("input.quiz2.opt3"), t("input.quiz2.opt4")],
      correctIndex: 1
    }
  ];

  return (
    <section id="user-input" className="section-card">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          4
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t("input.title")}</h2>
      </div>
      
      <p 
        className="text-lg text-muted-foreground mb-6 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t("input.explanation") }}
      />

      <CodeBlock code={t("input.code")} showTryButton={false} />

      <div className="demo-area mt-6 flex-col gap-4">
        <p className="text-muted-foreground mb-2">{t("input.tryItYourself")}</p>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="text"
            placeholder={t("input.placeholder")}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <Button variant="default" onClick={handleSubmit}>
            {t("input.sayHello")}
          </Button>
        </div>
        {greeting && (
          <p className={`text-xl font-bold mt-4 animate-slide-up ${greeting === t("input.pleaseEnter") ? 'text-warning' : 'text-success'}`}>
            {greeting}
          </p>
        )}
      </div>

      <Quiz questions={quizQuestions} />
    </section>
  );
};

export default UserInputSection;
