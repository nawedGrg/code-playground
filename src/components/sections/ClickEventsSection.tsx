import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";

const ClickEventsSection = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleTryIt = () => {
    setClickCount(prev => prev + 1);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 2000);
  };

  const codeExample = `// This is a comment - it helps explain the code
// Click events let JavaScript respond when you click something

// First, we find a button on the page
let myButton = document.getElementById("myButton");

// Then we tell it what to do when clicked
myButton.addEventListener("click", function() {
  alert("You clicked me!");
});`;

  return (
    <section id="click-events" className="section-card">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          1
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Click Events</h2>
      </div>
      
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        A <strong className="text-foreground">click event</strong> is how JavaScript knows when you click something. 
        It's like teaching your webpage to listen for clicks and do something in response!
      </p>

      <CodeBlock code={codeExample} onTryIt={handleTryIt} />

      <div className={`demo-area mt-6 ${showFeedback ? 'active' : ''}`}>
        {showFeedback ? (
          <div className="text-center animate-slide-up">
            <span className="text-4xl mb-2 block">🎉</span>
            <p className="text-xl font-bold text-primary">You clicked! Count: {clickCount}</p>
          </div>
        ) : (
          <p className="text-muted-foreground text-center">
            Click "Try it!" above to see a click event in action
          </p>
        )}
      </div>
    </section>
  );
};

export default ClickEventsSection;
