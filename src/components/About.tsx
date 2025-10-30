import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gradient-secondary">
              Building the Future, One Line at a Time
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Computer Science student with a strong interest in building real-world software solutions. 
              Currently exploring backend development and problem-solving through personal projects and coding challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an innovation-focused professional with strategic thinking and adaptability. 
              Looking for opportunities to apply my technical skills, learn from experienced developers, 
              and grow through hands-on experience in a collaborative environment.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              {['Java', 'Python', 'JavaScript', 'React.js', 'Node.js', 'SQL', 'DSA'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-card border border-primary/30 rounded-full text-sm font-medium hover:border-primary hover:glow-primary transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid gap-6">
            <Card className="p-6 bg-card border-primary/30 hover:border-primary hover:glow-primary transition-all duration-300 group">
              <Code2 className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-semibold mb-2">Problem Solver</h4>
              <p className="text-muted-foreground">
                Solved 150+ DSA problems across LeetCode, HackerRank, and CodeChef. 
                Completed 75+ problems in Smart Interviews program.
              </p>
            </Card>
            
            <Card className="p-6 bg-card border-secondary/30 hover:border-secondary hover:glow-secondary transition-all duration-300 group">
              <Lightbulb className="h-10 w-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-semibold mb-2">Innovation Enthusiast</h4>
              <p className="text-muted-foreground">
                Participated in 5+ hackathons and ideathons, constantly pushing boundaries 
                and exploring new technologies and solutions.
              </p>
            </Card>
            
            <Card className="p-6 bg-card border-primary/30 hover:border-primary hover:glow-primary transition-all duration-300 group">
              <Users className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-semibold mb-2">Team Player</h4>
              <p className="text-muted-foreground">
                Strong leadership and communication skills. Fluent in English, Telugu, and Hindi, 
                enabling effective collaboration in diverse teams.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
