import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";

const DOMSection = () => {
  const [displayText, setDisplayText] = useState("Hello, World!");
  const [textChanged, setTextChanged] = useState(false);

  const handleTryIt = () => {
    const newTexts = [
      "JavaScript is awesome! 🚀",
      "You changed the DOM! ✨",
      "Magic happening here! 🎩",
      "Keep learning! 📚"
    ];
    const randomText = newTexts[Math.floor(Math.random() * newTexts.length)];
    setDisplayText(randomText);
    setTextChanged(true);
  };

  const codeExample = `let heading = document.getElementById("myHeading");

heading.textContent = "New Text Here!";

heading.style.color = "orange";

heading.innerHTML = "<strong>Bold text!</strong>";`;

  return (
    <section id="dom" className="section-card">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          3
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Changing Text (DOM)</h2>
      </div>
      
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        The <strong className="text-foreground">DOM</strong> (Document Object Model) is how JavaScript 
        sees your webpage. With it, you can find any element and change its text, color, or style!
      </p>

      <CodeBlock code={codeExample} onTryIt={handleTryIt} />

      <div className={`demo-area mt-6 ${textChanged ? 'active' : ''}`}>
        <div className="text-center">
          <p 
            className={`text-2xl font-bold transition-all duration-300 ${textChanged ? 'text-primary scale-110' : 'text-foreground'}`}
          >
            {displayText}
          </p>
          {textChanged && (
            <p className="text-sm text-muted-foreground mt-2 animate-slide-up">
              ↑ This text was changed with JavaScript!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DOMSection;
