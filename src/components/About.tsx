import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient-primary">Me</span>
            </h2>
          </div>
          
          <Card className="p-10 bg-card/90 backdrop-blur-sm border-2 border-border">
            <div className="space-y-6 text-center">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-bold text-primary">I'm a passionate Computer Science student</span> from CMR Institute of Technology, Hyderabad. I have a deep enthusiasm for <span className="font-semibold text-secondary">problem-solving</span> and learning new technologies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With experience in <span className="font-semibold text-foreground">Java</span> and <span className="font-semibold text-foreground">Python</span>, I enjoy turning innovative ideas into practical solutions. I actively participate in <span className="font-semibold text-foreground">coding competitions</span> and <span className="font-semibold text-foreground">tech events</span> to sharpen my skills.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey includes building <span className="font-semibold text-foreground">real-time projects</span>, collaborating in <span className="font-semibold text-foreground">teams</span>, and continuously improving through <span className="font-semibold text-foreground">self-learning</span>. I strive to contribute meaningfully to the tech industry and become a well-rounded software engineer.
              </p>

              <div className="pt-6">
                <div className="flex flex-wrap gap-3 justify-center">
                  {['Java', 'Python', 'JavaScript', 'React.js', 'Node.js', 'SQL', 'DSA'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-muted border border-primary/30 rounded-full text-sm font-medium hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
