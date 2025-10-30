import { Card } from "@/components/ui/card";
import { ExternalLink, Globe, Youtube } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Web Development - Obesity Prevention",
      description: "A comprehensive web application designed to guide people in preventing and curing obesity through personalized exercises and marathons. The platform promotes physical fitness without relying on medication, offering a holistic approach to health and wellness.",
      icon: Globe,
      technologies: ["Web Development", "Health & Fitness", "UI/UX"],
      color: "primary",
    },
    {
      title: "YouTube Video Summarizer",
      description: "An intelligent Python-based application that summarizes YouTube videos according to user-specified word count. This tool helps users quickly grasp video content without watching the entire video, saving time and improving productivity.",
      icon: Youtube,
      technologies: ["Python", "Natural Language Processing", "API Integration"],
      color: "secondary",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card/30 relative">
      <div className="absolute inset-0 geometric-pattern opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real-world applications demonstrating my problem-solving abilities and technical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`p-8 bg-background/80 backdrop-blur-sm border-2 transition-all duration-300 hover:-translate-y-2 hover:glow-${project.color} ${
                project.color === 'primary' ? 'border-primary/30 hover:border-primary' : 'border-secondary/30 hover:border-secondary'
              }`}
            >
              <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                project.color === 'primary' ? 'gradient-primary' : 'gradient-secondary'
              }`}>
                <project.icon className="h-8 w-8 text-background" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className={`px-3 py-1 text-sm rounded-full ${
                      project.color === 'primary'
                        ? 'bg-primary/20 text-primary'
                        : 'bg-secondary/20 text-secondary'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <button 
                className={`flex items-center gap-2 font-semibold transition-all hover:gap-3 ${
                  project.color === 'primary' ? 'text-primary' : 'text-secondary'
                }`}
              >
                View Details <ExternalLink className="h-4 w-4" />
              </button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 max-w-2xl">
            <h4 className="text-2xl font-bold mb-4">Hackathon Experience</h4>
            <p className="text-muted-foreground">
              Participated in <span className="text-primary font-bold">5+ hackathons and ideathons</span>, 
              consistently demonstrating innovation, teamwork, and the ability to deliver working solutions 
              under time constraints.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
