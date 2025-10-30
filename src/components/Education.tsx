import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "CMR Institute of Technology, Hyderabad",
      period: "2023 - 2027",
      score: "CGPA: 9.78",
    },
    {
      degree: "Intermediate Public Examination",
      institution: "Tirumala Junior Mahila Kalasala, Andhra Pradesh",
      period: "2020 - 2022",
      score: "Score: 96.2%",
    },
    {
      degree: "Secondary Education",
      institution: "Sri Gowthami (EM) Public High School, Andhra Pradesh",
      period: "2020",
      score: "Score: 9.8 GPA",
    },
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Education</span>
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/90 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium border border-secondary/30">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <p className="text-lg font-bold text-primary">{edu.score}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
