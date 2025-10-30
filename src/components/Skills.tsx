import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", level: 60 },
        { name: "Python", level: 60 },
        { name: "C Language", level: 60 },
      ],
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "CSS", level: 60 },
        { name: "JavaScript", level: 60 },
        { name: "Node.js", level: 60 },
      ],
    },
    {
      category: "Currently Learning",
      skills: [
        { name: "React.js", level: 80 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      category: "Core Competencies",
      skills: [
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "Problem Solving (150+ DSA)", level: 80 },
        { name: "Smart Interviews (75+ problems)", level: 80 },
        { name: "AI & Data Science", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Technical <span className="text-gradient-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiency across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <Card 
              key={category.category} 
              className="p-6 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient-secondary">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
            <h4 className="text-2xl font-bold mb-4">Languages</h4>
            <div className="flex gap-6 justify-center flex-wrap">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🇬🇧</span>
                </div>
                <p className="font-medium">English</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🇮🇳</span>
                </div>
                <p className="font-medium">Telugu</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🇮🇳</span>
                </div>
                <p className="font-medium">Hindi</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
