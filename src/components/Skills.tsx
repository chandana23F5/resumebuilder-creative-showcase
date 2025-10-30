import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Lightbulb, Users, Clock, MessageSquare, Award } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", icon: Globe },
    { name: "CSS", icon: Globe },
    { name: "Java", icon: Code2 },
    { name: "Python", icon: Code2 },
    { name: "JavaScript", icon: Code2 },
    { name: "Node.js", icon: Database },
    { name: "React.js", icon: Globe },
    { name: "SQL", icon: Database },
  ];

  const softSkills = [
    { name: "Teamwork", icon: Users },
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Communication", icon: MessageSquare },
    { name: "Time Management", icon: Clock },
    { name: "Leadership", icon: Award },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Skills</span>
            </h2>
          </div>

          {/* Technical Skills */}
          <Card className="p-10 bg-card/90 backdrop-blur-sm border-2 border-border mb-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technicalSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <skill.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="p-10 bg-card/90 backdrop-blur-sm border-2 border-border">
            <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {softSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-all">
                    <skill.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
