import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import Quiz from "@/components/Quiz";

const LoopsSection = () => {
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

  const codeExample = `// Loops repeat code multiple times
// "for" loops are perfect when you know how many times

for (let i = 1; i <= 5; i++) {
  console.log("Box number " + i);
}

// How it works:
// let i = 1     → Start at 1
// i <= 5        → Keep going while i is 5 or less
// i++           → Add 1 to i after each loop

// This prints:
// Box number 1
// Box number 2
// Box number 3
// Box number 4
// Box number 5`;

  const quizQuestions = [
    {
      question: "What does i++ do in a for loop?",
      options: ["Subtracts 1 from i", "Adds 1 to i", "Multiplies i by 2", "Resets i to 0"],
      correctIndex: 1
    },
    {
      question: "In 'for (let i = 0; i < 3; i++)', how many times does the loop run?",
      options: ["2 times", "3 times", "4 times", "0 times"],
      correctIndex: 1
    },
    {
      question: "What is the purpose of loops?",
      options: ["To make code run once", "To repeat code multiple times", "To stop the program", "To create variables"],
      correctIndex: 1
    }
  ];

  return (
    <section id="loops" className="section-card">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          6
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">For Loops</h2>
      </div>
      
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        <strong className="text-foreground">Loops</strong> repeat code automatically. Instead of writing 
        the same code 100 times, you write it once and let the loop repeat it!
      </p>

      <CodeBlock code={codeExample} onTryIt={handleTryIt} />

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
                Loop created 5 boxes! 🎉
              </p>
            )}
          </div>
        ) : (
          <p className="text-muted-foreground text-center">
            Click "Try it!" to see a loop create 5 boxes
          </p>
        )}
      </div>

      <Quiz questions={quizQuestions} />
    </section>
  );
};

export default LoopsSection;
