import { useState, useEffect, useCallback } from "react";
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/button";
import Quiz from "@/components/Quiz";
import { useLanguage } from "@/contexts/LanguageContext";

const MiniGameSection = () => {
  const { t } = useLanguage();
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const moveTarget = useCallback(() => {
    setTargetPosition({
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20,
    });
  }, []);

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setIsPlaying(true);
    setGameOver(false);
    moveTarget();
  };

  const handleTargetClick = () => {
    if (!isPlaying) return;
    setScore(prev => prev + 1);
    moveTarget();
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsPlaying(false);
          setGameOver(true);
          setHighScore(current => Math.max(current, score));
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, score]);

  const quizQuestions = [
    {
      question: t("game.quiz1.question"),
      options: [t("game.quiz1.opt1"), t("game.quiz1.opt2"), t("game.quiz1.opt3"), t("game.quiz1.opt4")],
      correctIndex: 1
    },
    {
      question: t("game.quiz2.question"),
      options: [t("game.quiz2.opt1"), t("game.quiz2.opt2"), t("game.quiz2.opt3"), t("game.quiz2.opt4")],
      correctIndex: 2
    },
    {
      question: t("game.quiz3.question"),
      options: [t("game.quiz3.opt1"), t("game.quiz3.opt2"), t("game.quiz3.opt3"), t("game.quiz3.opt4")],
      correctIndex: 3
    }
  ];

  return (
    <section id="mini-game" className="section-card">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          7
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t("game.title")}</h2>
      </div>
      
      <p 
        className="text-lg text-muted-foreground mb-6 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t("game.explanation") }}
      />

      <CodeBlock code={t("game.code")} showTryButton={false} />

      <div className="mt-6 rounded-xl border-2 border-border bg-secondary/30 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">{t("game.score")}</p>
              <p className="text-3xl font-bold text-primary">{score}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">{t("game.time")}</p>
              <p className={`text-3xl font-bold ${timeLeft <= 3 ? 'text-destructive' : 'text-foreground'}`}>
                {timeLeft}s
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">{t("game.highScore")}</p>
            <p className="text-2xl font-bold text-success">{highScore}</p>
          </div>
        </div>

        <div 
          className="relative rounded-lg bg-background h-64 overflow-hidden border border-border"
        >
          {isPlaying ? (
            <button
              onClick={handleTargetClick}
              className="absolute w-14 h-14 rounded-full gradient-hero shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 active:scale-95 transition-transform cursor-pointer animate-bounce-gentle"
              style={{
                left: `${targetPosition.x}%`,
                top: `${targetPosition.y}%`,
              }}
            />
          ) : gameOver ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90">
              <p className="text-2xl font-bold text-foreground mb-2">{t("game.gameOver")}</p>
              <p className="text-lg text-muted-foreground mb-4">{t("game.youScored")} <span className="text-primary font-bold">{score}</span></p>
              <Button variant="hero" size="lg" onClick={startGame}>
                {t("game.playAgain")}
              </Button>
            </div>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-xl text-muted-foreground mb-4">{t("game.instructions")}</p>
              <Button variant="hero" size="lg" onClick={startGame}>
                {t("game.startGame")}
              </Button>
            </div>
          )}
        </div>
      </div>

      <Quiz questions={quizQuestions} />
    </section>
  );
};

export default MiniGameSection;
