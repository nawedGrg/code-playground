import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";

const VariablesSection = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [showDemo, setShowDemo] = useState(false);

  const handleTryIt = () => {
    setName("Alex");
    setAge(25);
    setShowDemo(true);
  };

  const codeExample = `// Variables are like boxes that store information
// We use "let" to create a variable

let name = "Alex";     // This stores text (a "string")
let age = 25;          // This stores a number
let isHappy = true;    // This stores true or false (a "boolean")

// You can change variables later:
age = 26;  // Now age is 26!

// You can also use the variable:
console.log("Hello, " + name);  // Shows: Hello, Alex`;

  return (
    <section id="variables" className="section-card">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          2
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Variables (let)</h2>
      </div>
      
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        <strong className="text-foreground">Variables</strong> are like labeled boxes that store information. 
        Use <code className="px-2 py-1 bg-code text-code-foreground rounded text-sm">let</code> to create a box, 
        then give it a name and put something inside!
      </p>

      <CodeBlock code={codeExample} onTryIt={handleTryIt} />

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
            <p className="text-success font-semibold">Variables created! They hold your data.</p>
          </div>
        ) : (
          <p className="text-muted-foreground text-center">
            Click "Try it!" to see variables being created
          </p>
        )}
      </div>
    </section>
  );
};

export default VariablesSection;
