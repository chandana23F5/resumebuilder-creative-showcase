import { Card } from "@/components/ui/card";
import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Python Certificate",
      issuer: "Infosys SpringBoard",
      icon: "🐍",
    },
    {
      title: "Basics of Python Certificate",
      issuer: "Infosys SpringBoard",
      icon: "🐍",
    },
    {
      title: "Python for Beginners Certificate",
      issuer: "Simplilearn",
      icon: "📚",
    },
    {
      title: "Virtual Internship Program in Java Programming",
      issuer: "CodSoft",
      icon: "☕",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient-primary">Achievements</span>
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-primary/20 hover:border-primary hover:glow-primary transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{cert.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient-primary transition-all">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Award className="h-4 w-4 text-secondary" />
                    {cert.issuer}
                  </p>
                </div>
                <CheckCircle className="h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
            <div className="text-4xl font-bold text-gradient-primary mb-2">150+</div>
            <p className="text-muted-foreground">DSA Problems Solved</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30">
            <div className="text-4xl font-bold text-gradient-secondary mb-2">5+</div>
            <p className="text-muted-foreground">Hackathons Participated</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
            <div className="text-4xl font-bold text-gradient-primary mb-2">9.78</div>
            <p className="text-muted-foreground">Current CGPA</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
