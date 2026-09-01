import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const audioRef = useRef(null);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // Initialize audio element
    if (!audioRef.current) {
      audioRef.current = new Audio();
      // Using a direct link to a rain sound from Pixabay
      // audioRef.current.src = "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3";
      audioRef.current.src = "/mp3/Suzume no TojimariSuzumeTheme Song.mp3";
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMusic = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error("Error playing audio:", error);
        // If there's an error, try with a fallback audio
        // audioRef.current.src = "https://www.soundjay.com/misc/sounds/rain-01.mp3";
        audioRef.current.src = "/mp3/Suzume no TojimariSuzumeTheme Song.mp3";
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (fallbackError) {
          console.error("Fallback audio also failed:", fallbackError);
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-neon-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-display font-bold text-neon-green glow-effect">
              {"<Matrix/>"}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-neon-green px-3 py-2 text-sm font-mono transition-colors duration-300 hover:glow-effect"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Music Player & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="neon"
              size="sm"
              onClick={toggleMusic}
              className="hidden sm:flex"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span className="ml-1">Music</span>
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-neon-green"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-neon-green/20">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-neon-green block px-3 py-2 text-base font-mono transition-colors duration-300 w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button
                variant="neon"
                size="sm"
                onClick={toggleMusic}
                className="mt-2 w-full"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span className="ml-1">Music</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;