import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ClickEventsSection from "@/components/sections/ClickEventsSection";
import VariablesSection from "@/components/sections/VariablesSection";
import DOMSection from "@/components/sections/DOMSection";
import UserInputSection from "@/components/sections/UserInputSection";
import ConditionsSection from "@/components/sections/ConditionsSection";
import LoopsSection from "@/components/sections/LoopsSection";
import MiniGameSection from "@/components/sections/MiniGameSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <ClickEventsSection />
        <VariablesSection />
        <DOMSection />
        <UserInputSection />
        <ConditionsSection />
        <LoopsSection />
        <MiniGameSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
