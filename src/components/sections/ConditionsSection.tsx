import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";

const ConditionsSection = () => {
  const [number, setNumber] = useState<number | null>(null);
  const [result, setResult] = useState("");

  const handleTryIt = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
    
    if (randomNum >= 50) {
      setResult("High number! 🎯");
    } else {
      setResult("Low number! 📉");
    }
  };

  const codeExample = `// Conditions let your code make decisions!
// "if" checks if something is true

let age = 18;

if (age >= 18) {
  // This runs if age is 18 or more
  console.log("You are an adult!");
} else {
  // This runs if age is less than 18
  console.log("You are a minor.");
}

// You can check many things:
// age > 18   means "greater than 18"
// age < 18   means "less than 18"
// age === 18 means "exactly equal to 18"
// age !== 18 means "not equal to 18"`;

  return (
    <section id="conditions" className="section-card">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          5
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">If / Else Conditions</h2>
      </div>
      
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        <strong className="text-foreground">Conditions</strong> let your code make decisions. 
        Use <code className="px-2 py-1 bg-code text-code-foreground rounded text-sm">if</code> to check something, 
        and <code className="px-2 py-1 bg-code text-code-foreground rounded text-sm">else</code> for what happens if it's not true.
      </p>

      <CodeBlock code={codeExample} onTryIt={handleTryIt} />

      <div className={`demo-area mt-6 ${number !== null ? 'active' : ''}`}>
        {number !== null ? (
          <div className="text-center animate-slide-up">
            <div className="space-y-2">
              <p className="text-muted-foreground">Random number generated:</p>
              <p className="text-4xl font-bold text-primary">{number}</p>
              <p className="text-sm text-muted-foreground">
                Checking: <code className="px-2 py-1 bg-code text-code-foreground rounded">if (number &gt;= 50)</code>
              </p>
              <p className={`text-xl font-bold ${number >= 50 ? 'text-success' : 'text-warning'}`}>
                {result}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground text-center">
            Click "Try it!" to see a condition in action with a random number
          </p>
        )}
      </div>
    </section>
  );
};

export default ConditionsSection;
