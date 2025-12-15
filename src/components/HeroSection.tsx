import { ArrowDown, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToFirstSection = () => {
    document.getElementById("click-events")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-12">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-warning/10 rounded-full blur-3xl" />
      </div>

      <div className="relative text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-secondary-foreground">Interactive Learning</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Learn{" "}
          <span className="text-gradient">JavaScript</span>
          <br />
          <span className="text-muted-foreground">by Doing</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Stop just reading code. Start <strong className="text-foreground">clicking</strong>, 
          <strong className="text-foreground"> trying</strong>, and 
          <strong className="text-foreground"> playing</strong> with it! 
          Learn JavaScript through 7 interactive lessons that respond to your actions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="xl" onClick={scrollToFirstSection}>
            <Code2 className="w-5 h-5" />
            Start Learning
          </Button>
          <p className="text-sm text-muted-foreground">
            No signup required • 100% free
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto mb-16">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">7</p>
            <p className="text-sm text-muted-foreground">Lessons</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">∞</p>
            <p className="text-sm text-muted-foreground">Practice</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">1</p>
            <p className="text-sm text-muted-foreground">Mini Game</p>
          </div>
        </div>

        <button 
          onClick={scrollToFirstSection}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-sm">Scroll to start</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
