import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/button";

const UserInputSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setGreeting(`Hello, ${inputValue}! Welcome to JavaScript! 👋`);
    } else {
      setGreeting("Please enter your name first!");
    }
  };

  const codeExample = `// Getting input from users is super useful!
// First, we need an input field and a button in HTML

// In JavaScript, we get the value like this:
let nameInput = document.getElementById("nameInput");
let userButton = document.getElementById("greetButton");

userButton.addEventListener("click", function() {
  // Get what the user typed
  let userName = nameInput.value;
  
  // Use it to create a greeting
  let message = "Hello, " + userName + "!";
  
  // Show the greeting
  alert(message);
});`;

  return (
    <section id="user-input" className="section-card">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
          4
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">User Input</h2>
      </div>
      
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        JavaScript can read what users type in text boxes! This is how forms, search bars, 
        and interactive apps work. We use <code className="px-2 py-1 bg-code text-code-foreground rounded text-sm">.value</code> to get the text.
      </p>

      <CodeBlock code={codeExample} showTryButton={false} />

      <div className="demo-area mt-6 flex-col gap-4">
        <p className="text-muted-foreground mb-2">Try it yourself:</p>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="text"
            placeholder="Enter your name..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <Button variant="default" onClick={handleSubmit}>
            Say Hello!
          </Button>
        </div>
        {greeting && (
          <p className={`text-xl font-bold mt-4 animate-slide-up ${greeting.includes("Please") ? 'text-warning' : 'text-success'}`}>
            {greeting}
          </p>
        )}
      </div>
    </section>
  );
};

export default UserInputSection;
