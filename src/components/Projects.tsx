import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Seamless Legal Support for India Powered by AI",
      shortDescription: "Full Stack Legal Support website with AI integration",
      fullDescription: "A full-stack AI-driven legal assistance platform that helps users draft, review, and manage legal documents, connect with lawyers, track case updates like new case for studies, and get instant query resolution through an AI chatbot. Built with Next.js and TypeScript for a performant, type-safe UX, it features secure authentication, AI-assisted document generation, e-signing, role-based dashboards, chatbot guidance, and real-time notifications. Deployed on AWS and cloudinary for scalability and reliability.",
      technologies: ["Next.js", "TypeScript", "Neon DB", "Cloudinary", "AWS", "Google API"],
      github: "https://github.com/Arnabdas123456/HexaLaw.git",
      demo: "https://justiceia-ai.netlify.app/",
      status: "Production"
    },
    {
      id: 2,
      title: "WorkIvo Job Portal Website",
      shortDescription: "A modern full-stack job portal for connecting job seekers and employers.",
      fullDescription: "A full-stack job portal website built with Next.js and React, allowing users to explore job opportunities and manage their job search experience. The application uses TypeScript for type safety, Tailwind CSS for responsive UI design, Drizzle ORM for database operations, and MySQL for data storage.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Drizzle ORM",
        "MySQL"
      ],
      github: "https://github.com/Arnabdas123456/Job-Portal-Website",
      // demo: "https://your-demo-url.com",
      status: "Beta"
    },

    {
      id: 3,
      title: "Journey Cusine",
      shortDescription: "MENR Stack Hotel Booking Application",
      fullDescription: "A comprehensive hotel booking application built with the MENR stack (MongoDB, Express.js, Node.js, React). It features user authentication, hotel search and filtering, booking management, and payment integration. The application is designed for scalability and performance, utilizing modern web development practices and deployed on AWS for reliability.",
      technologies: ["React", "JavaScript", "Node.js", "Express.js", "Mongo DB", "AWS"],
      github: "https://github.com/Arnabdas123456/JourneyCusine",
      demo: "https://journey-cusine.vercel.app/",
      status: "Production"
    },
    {
      id: 4,
      title: "Stock Market Price Analysis",
      shortDescription: "A stock market analysis project for exploring and visualizing historical stock price data.",
      fullDescription: "A stock market price analysis project focused on analyzing historical stock data, identifying price trends, and visualizing market movements. The project applies data analysis and visualization techniques to help understand stock price behavior and market patterns.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib"
      ],
      github: "https://github.com/Arnabdas123456/Stock-Market-Price-Analysis-",
      // demo: "https://your-demo-url.com",
      status: "Beta"
    },
    {
      id: 5,
      title: "Last of Us UI",
      shortDescription: "A cinematic and immersive UI website inspired by The Last of Us.",
      fullDescription: "A visually immersive frontend website inspired by The Last of Us, featuring a cinematic post-apocalyptic design, interactive user interface, responsive layouts, and smooth animations. The project focuses on creating an engaging visual experience using modern web technologies and interactive UI elements.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Three.js",
        "Framer Motion"
      ],
      github: "https://github.com/Arnabdas123456/Last-Of-Us-UI",
      demo: "https://last-of-us-nine.vercel.app/",
      status: "Production"
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production': return 'text-neon-green';
      case 'Development': return 'text-electric';
      case 'Beta': return 'text-accent';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-neon-green glow-effect">
          Projects.directory
        </h2>

        <p className="text-center text-muted-foreground font-mono mb-16 max-w-2xl mx-auto">
          A collection of projects showcasing modern web development and innovative solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="terminal-border rounded-lg p-6 bg-dark-console/50 hover:bg-dark-console/80 transition-all duration-300 group hover:shadow-neon hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-display font-semibold text-electric">
                  {project.title}
                </h3>
                <span className={`text-xs font-mono px-2 py-1 rounded border ${getStatusColor(project.status)} border-current`}>
                  {project.status}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 font-mono text-sm leading-relaxed">
                {project.shortDescription}
              </p>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-neon-green/10 text-neon-green rounded border border-neon-green/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs font-mono text-muted-foreground">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-3 pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                    className="flex items-center space-x-1 text-xs font-mono text-muted-foreground hover:text-neon-green transition-colors duration-200"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demo, '_blank');
                    }}
                    className="flex items-center space-x-1 text-xs font-mono text-muted-foreground hover:text-electric transition-colors duration-200"
                  >
                    <ExternalLink size={14} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-green/5 to-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-dark-bg/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="terminal-border rounded-lg bg-dark-console max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-neon-green/20">
              <h3 className="text-xl font-display font-semibold text-electric">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-muted-foreground hover:text-neon-green transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center space-x-4">
                <span className={`text-sm font-mono px-3 py-1 rounded border ${getStatusColor(selectedProject.status)} border-current`}>
                  {selectedProject.status}
                </span>
              </div>

              <p className="text-muted-foreground font-mono leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              <div>
                <h4 className="text-lg font-display font-medium text-electric mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 text-sm font-mono bg-neon-green/10 text-neon-green rounded border border-neon-green/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <Button
                  variant="neon"
                  onClick={() => window.open(selectedProject.github, '_blank')}
                  className="flex items-center space-x-2"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </Button>
                <Button
                  variant="electric"
                  onClick={() => window.open(selectedProject.demo, '_blank')}
                  className="flex items-center space-x-2"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;