import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz = ({ questions }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    if (index === questions[currentQuestion].correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="mt-6 p-6 rounded-xl bg-card border border-border">
        <div className="text-center">
          <div className="text-4xl mb-3">
            {percentage >= 80 ? "🎉" : percentage >= 50 ? "👍" : "💪"}
          </div>
          <h4 className="text-xl font-bold text-foreground mb-2">Quiz Complete!</h4>
          <p className="text-muted-foreground mb-4">
            You got <span className="text-primary font-bold">{score}</span> out of{" "}
            <span className="font-bold">{questions.length}</span> correct ({percentage}%)
          </p>
          <Button onClick={handleRetry} variant="outline" size="sm">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="mt-6 p-6 rounded-xl bg-card border border-border">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-foreground">Quick Quiz</h4>
        <span className="text-sm text-muted-foreground">
          {currentQuestion + 1} / {questions.length}
        </span>
      </div>
      
      <p className="text-foreground mb-4">{q.question}</p>
      
      <div className="space-y-2">
        {q.options.map((option, index) => {
          let buttonClass = "w-full text-left justify-start h-auto py-3 px-4 ";
          
          if (showResult) {
            if (index === q.correctIndex) {
              buttonClass += "bg-green-500/20 border-green-500 text-green-700 dark:text-green-400";
            } else if (index === selectedAnswer) {
              buttonClass += "bg-red-500/20 border-red-500 text-red-700 dark:text-red-400";
            }
          }
          
          return (
            <Button
              key={index}
              variant="outline"
              className={buttonClass}
              onClick={() => handleAnswer(index)}
              disabled={showResult}
            >
              <span className="flex items-center gap-2">
                {showResult && index === q.correctIndex && (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                )}
                {showResult && index === selectedAnswer && index !== q.correctIndex && (
                  <XCircle className="w-4 h-4 text-red-500" />
                )}
                {option}
              </span>
            </Button>
          );
        })}
      </div>
      
      {showResult && (
        <div className="mt-4 flex justify-end">
          <Button onClick={handleNext} size="sm">
            {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
