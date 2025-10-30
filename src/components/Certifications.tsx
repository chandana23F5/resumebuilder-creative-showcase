import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Python Certificate",
      issuer: "Infosys SpringBoard",
    },
    {
      title: "Basics of Python Certificate",
      issuer: "Infosys SpringBoard",
    },
    {
      title: "Python for Beginners Certificate",
      issuer: "Simplilearn",
    },
    {
      title: "Virtual Internship Program in Java Programming",
      issuer: "CodSoft",
    },
  ];

  const achievements = [
    { value: "150+", label: "DSA Problems" },
    { value: "5+", label: "Hackathons" },
    { value: "9.78", label: "CGPA" },
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Certifications</span>
            </h2>
          </div>

          <Card className="p-10 bg-card/90 backdrop-blur-sm border-2 border-border mb-8">
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Coding Profiles */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
            <h3 className="text-xl font-bold mb-6 text-center">Coding Profiles</h3>
            <div className="grid grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">
                    {achievement.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
