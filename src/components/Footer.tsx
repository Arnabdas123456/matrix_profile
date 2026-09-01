const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-dark-bg border-t border-neon-green/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="terminal-border rounded-lg p-4 bg-dark-console/30 inline-block mb-4">
            <p className="text-muted-foreground font-mono text-sm">
              <span className="text-neon-green">{'>'}</span>
              <span className="animate-blink">_</span>
            </p>
          </div>

          <p className="text-muted-foreground font-mono text-sm mb-2">
            © {currentYear} Matrix Profile. All rights reserved.
          </p>
          {/*
          <p className="text-xs text-muted-foreground font-mono">
            Built with <span className="text-neon-green">❤</span>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;