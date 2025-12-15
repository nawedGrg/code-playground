import { useState, useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
  number: number;
}

const navItems: NavItem[] = [
  { id: "click-events", label: "Click Events", number: 1 },
  { id: "variables", label: "Variables", number: 2 },
  { id: "dom", label: "DOM", number: 3 },
  { id: "user-input", label: "Input", number: 4 },
  { id: "conditions", label: "If/Else", number: 5 },
  { id: "loops", label: "Loops", number: 6 },
  { id: "mini-game", label: "Game", number: 7 },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      setIsVisible(window.scrollY > 400);

      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-card/90 backdrop-blur-md rounded-full px-2 py-2 shadow-lg border border-border hidden md:flex gap-1">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            activeSection === item.id
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          }`}
        >
          <span className="w-5 h-5 rounded-full bg-current/10 flex items-center justify-center text-xs">
            {item.number}
          </span>
          <span className="hidden lg:inline">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
