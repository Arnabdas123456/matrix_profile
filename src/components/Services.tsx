import { Code, Database, Globe, BarChart, ShieldCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern React applications with TypeScript, responsive design, and cutting-edge UI/UX",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },

    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable server architectures, APIs, and database design for robust applications",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
    },

    {
      icon: BarChart,
      title: "Data Analysis",
      description: "Transforming raw data into actionable insights using statistical methods, visualization, and reporting",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Excel", "SQL"]
    },

    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end web applications from concept to deployment with modern tech stacks",
      technologies: ["MERN", "REST APIs"]
    },

    {
      icon: ShieldCheck,
      title: "Bug Bounty Hunting",
      description: "Identifying and reporting security vulnerabilities to improve application and system security",
      technologies: ["Web Security", "Penetration Testing", "OWASP", "Burp Suite", "Reconnaissance"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-dark-darker">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-neon-green glow-effect">
          Services.json
        </h2>

        <p className="text-center text-muted-foreground font-mono mb-16 max-w-2xl mx-auto">
          Comprehensive development services to bring your digital vision to life
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="terminal-border rounded-lg p-6 bg-dark-console/50 hover:bg-dark-console/80 transition-all duration-300 group hover:shadow-neon hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-neon-green/10 group-hover:bg-neon-green/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="text-lg font-display font-semibold text-electric ml-3">
                  {service.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-4 font-mono text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                <div className="text-xs text-neon-green font-mono mb-2">
                  Technologies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-neon-green/10 text-neon-green rounded border border-neon-green/30 hover:bg-neon-green/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-green/5 to-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="terminal-border rounded-lg p-6 bg-dark-console/30 inline-block">
            <p className="text-muted-foreground font-mono mb-4">
              Ready to start your next project?
            </p>
            <button
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-3 bg-transparent border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-bg font-mono transition-all duration-300 rounded shadow-neon hover:shadow-neon-strong"
            >
              Let's Build Something Amazing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;