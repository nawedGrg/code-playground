import { useState, useEffect, useCallback } from "react";
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/button";
import Quiz from "@/components/Quiz";

const MiniGameSection = () => {
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

  const codeExample = `// This mini game uses everything we learned!

// Variables to track the game
let score = 0;
let timeLeft = 10;

// Click event on the target
target.addEventListener("click", function() {
  score = score + 1;           // Add 1 to score
  moveTarget();                // Move to new position
});

// Timer using setInterval (runs every 1 second)
setInterval(function() {
  timeLeft = timeLeft - 1;     // Subtract 1 from time
  
  if (timeLeft <= 0) {         // Condition: time up?
    endGame();
  }
}, 1000);

// Moving the target uses random numbers and DOM`;

  const quizQuestions = [
    {
      question: "What JavaScript concept is used to track points in the game?",
      options: ["Loops", "Variables", "HTML", "CSS"],
      correctIndex: 1
    },
    {
      question: "What runs every 1000 milliseconds (1 second) in the game?",
      options: ["Click event", "For loop", "setInterval timer", "If statement"],
      correctIndex: 2
    },
    {
      question: "Which concepts from this course does the mini game use?",
      options: ["Only variables", "Only click events", "Only loops", "Variables, events, conditions, and DOM"],
      correctIndex: 3
    }
  ];

  return (
    <section id="mini-game" className="section-card">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          7
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Mini Game: Click Challenge!</h2>
      </div>
      
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        Time to put it all together! This game uses <strong className="text-foreground">click events</strong>, 
        <strong className="text-foreground"> variables</strong>, <strong className="text-foreground">DOM manipulation</strong>, 
        and <strong className="text-foreground">conditions</strong>. Click the orange circle as many times as you can!
      </p>

      <CodeBlock code={codeExample} showTryButton={false} />

      <div className="mt-6 rounded-xl border-2 border-border bg-secondary/30 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Score</p>
              <p className="text-3xl font-bold text-primary">{score}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Time</p>
              <p className={`text-3xl font-bold ${timeLeft <= 3 ? 'text-destructive' : 'text-foreground'}`}>
                {timeLeft}s
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">High Score</p>
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
              <p className="text-2xl font-bold text-foreground mb-2">Game Over!</p>
              <p className="text-lg text-muted-foreground mb-4">You scored: <span className="text-primary font-bold">{score}</span></p>
              <Button variant="hero" size="lg" onClick={startGame}>
                Play Again
              </Button>
            </div>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-xl text-muted-foreground mb-4">Click the orange circles as fast as you can!</p>
              <Button variant="hero" size="lg" onClick={startGame}>
                Start Game
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
