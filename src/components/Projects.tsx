import { Card } from "@/components/ui/card";
import { ExternalLink, Globe, Youtube } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Obesity Prevention Application",
      description: "An interactive web app designed to guide people in preventing and curing obesity through exercises and marathons, promoting physical fitness without medication.",
      icon: Globe,
      technologies: ["Web Development", "Health & Fitness"],
    },
    {
      title: "YouTube Video Summarizer",
      description: "A Python-based application that summarizes YouTube videos according to user-specified word count, helping users save time.",
      icon: Youtube,
      technologies: ["Python", "NLP", "API Integration"],
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Projects</span>
            </h2>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/90 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Hackathon Experience */}
          <Card className="mt-8 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
            <h4 className="text-xl font-bold mb-3 text-center">Hackathon Experience</h4>
            <p className="text-muted-foreground text-center">
              Participated in <span className="text-primary font-bold">5+ hackathons and ideathons</span>, 
              demonstrating innovation and problem-solving under pressure.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
