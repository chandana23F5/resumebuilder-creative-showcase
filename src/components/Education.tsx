import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "CMR Institute of Technology Hyd",
      period: "2023 - 2027",
      score: "CGPA: 9.78",
      highlight: true,
    },
    {
      degree: "Intermediate",
      field: "Public Examination Andhra Pradesh",
      institution: "Tirumala Junior Mahila Kalasala",
      period: "2020 - 2022",
      score: "Score: 96.2",
    },
    {
      degree: "Secondary Education",
      field: "Board of Secondary Education Andhra Pradesh",
      institution: "Sri Gowthami (EM) Public High School",
      period: "2020",
      score: "Score: 9.8",
    },
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Educational <span className="text-gradient-primary">Journey</span>
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My academic achievements and learning path
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className={`p-8 bg-card border-2 transition-all duration-300 hover:glow-primary ${
                edu.highlight 
                  ? 'border-primary glow-primary' 
                  : 'border-primary/20 hover:border-primary'
              }`}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-2xl ${
                  edu.highlight 
                    ? 'gradient-primary' 
                    : 'bg-primary/10'
                }`}>
                  {edu.highlight ? (
                    <Award className="h-8 w-8 text-background" />
                  ) : (
                    <GraduationCap className="h-8 w-8 text-primary" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-lg text-primary font-medium">{edu.field}</p>
                    </div>
                    <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-xl font-bold text-gradient-secondary">{edu.score}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 max-w-2xl">
            <h4 className="text-2xl font-bold mb-4">Academic Excellence</h4>
            <p className="text-muted-foreground">
              Consistently maintained high academic performance throughout my educational journey, 
              demonstrating strong commitment to learning and excellence in computer science.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
