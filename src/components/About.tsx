import { useState, useEffect } from "react";
import profileImage from "@/assets/Me.jpg";

const About = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  const codeLines = [
    "class Developer {",
    "  profile() {",
    "    name = 'ARNAB DAS';",
    "    role = 'Full-Stack Developer', 'AI/ML Enthusiast', 'Bug Bounty Hunter'",
    "    languages = 'JavaScript', 'TypeScript', 'Python','Java'",
    "    library= 'React','Pandas','Numpy','Matplotlib'",
    "    frameworks = 'Flask', 'Express.js', 'Next.js'",
    "    databases = 'MongoDB', 'SQL', 'Neon DB'",
    "  }",
    "  buildAmazing() {",
    "    return 'Creating digital experiences that matter';",
    "  }",
    "}"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval = setInterval(() => {
            setVisibleLines(prev => {
              if (prev < codeLines.length) {
                return prev + 1;
              }
              clearInterval(interval);
              return prev;
            });
          }, 200);
        }
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-neon-green glow-effect">
          About.exe
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-lg overflow-hidden terminal-border glow-effect">
                <img
                  src={profileImage}
                  alt="Developer Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating tech elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-green rounded-full animate-float shadow-neon"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-blue rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-electric rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Code Terminal Section */}
          <div className="lg:order-first">
            <div className="terminal-border rounded-lg p-6 bg-dark-console/90 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-neon-green"></div>
                </div>
                <div className="ml-4 text-xs text-muted-foreground font-mono">
                  about.js
                </div>
              </div>

              <div className="font-mono text-sm space-y-1">
                {codeLines.slice(0, visibleLines).map((line, index) => (
                  <div
                    key={index}
                    className="text-neon-green animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-muted-foreground mr-2">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={
                      line.includes('class') || line.includes('constructor') || line.includes('getSkills') || line.includes('buildAmazing')
                        ? 'text-electric'
                        : line.includes('this.')
                          ? 'text-neon-green'
                          : line.includes('return')
                            ? 'text-accent'
                            : 'text-foreground'
                    }>
                      {line}
                    </span>
                  </div>
                ))}

                {visibleLines < codeLines.length && (
                  <div className="text-neon-green animate-blink">
                    <span className="text-muted-foreground mr-2">
                      {String(visibleLines + 1).padStart(2, '0')}
                    </span>
                    |
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="terminal-border rounded-lg p-4 bg-dark-console/50">
                <h3 className="text-lg font-display font-semibold text-electric mb-2">
                  Current Mission
                </h3>
                <p className="text-muted-foreground font-mono text-sm">
                  I architect secure and scalable web applications.I write clean code focused on user experience.By night,
                  I'm a bug bounty hunter, fortifying the digital world by thinking like an attacker.
                </p>
              </div>

              <div className="terminal-border rounded-lg p-4 bg-dark-console/50">
                <h3 className="text-lg font-display font-semibold text-electric mb-2">
                  Active Status
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="text-neon-green font-mono text-sm">
                    open to new opportunities in development and offensive security
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;