import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const texts = [
    "Welcome to the Matrix...",
    "Code. Create. Innovate.",
    "Building the Future",
    "Let's collaborate together"
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (displayText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Path to CV file in the public folder
    const link = document.createElement('a');
    link.href = '/Arnab_Das_CV.pdf';
    link.download = 'Arnab_Das_CV.pdf'; // This will be the downloaded file name
    link.target = '_blank'; // Added to open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-animated">
      {/* Matrix-style background effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Math.random().toString(36).substring(2, 15)}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Terminal-style container */}
        <div className="terminal-border rounded-lg p-8 mb-8 bg-dark-console/50 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-neon-green"></div>
            </div>
            <div className="ml-4 text-xs text-muted-foreground font-mono">
              terminal@matrix:~$
            </div>
          </div>

          <div className="text-left">
            <span className="text-neon-green font-mono text-sm">{'>'} </span>
            <span className="text-neon-green font-mono text-sm">
              {displayText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                |
              </span>
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold  mb-6 text-neon">
          <span className="text-foreground">Welcome to </span>
          <span className="text-neon-green glow-effect">Matrix</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono max-w-2xl mx-auto">
          Crafting digital experiences with code, creativity, and cutting-edge technology.
          Welcome to my Matrix profile.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="neon" size="lg" onClick={scrollToAbout}>
            Explore My Work
          </Button>
          <Button variant="electric" size="lg" onClick={downloadCV}>
            Download Resume
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-neon-green w-6 h-6" />
      </div>
    </section>
  );
};
export default Hero;