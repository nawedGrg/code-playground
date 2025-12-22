import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import Quiz from "@/components/Quiz";

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

  const codeExample = `// The DOM is how JavaScript "sees" your webpage
// We can find and change any part of the page!

// Find an element by its ID
let heading = document.getElementById("myHeading");

// Change its text
heading.textContent = "New Text Here!";

// You can also change colors:
heading.style.color = "orange";

// Or add new content:
heading.innerHTML = "<strong>Bold text!</strong>";`;

  const quizQuestions = [
    {
      question: "What does DOM stand for?",
      options: ["Data Object Model", "Document Object Model", "Digital Online Mode", "Display Output Manager"],
      correctIndex: 1
    },
    {
      question: "Which method finds an element by its ID?",
      options: ["findElement()", "getElementById()", "searchById()", "locateElement()"],
      correctIndex: 1
    },
    {
      question: "What property changes the text inside an element?",
      options: ["innerHTML", "textContent", "Both can work", "Neither"],
      correctIndex: 2
    }
  ];

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

      <Quiz questions={quizQuestions} />
    </section>
  );
};

export default DOMSection;
