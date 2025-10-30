import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kavchandru1998p@gmail.com",
      link: "mailto:kavchandru1998p@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9391791558",
      link: "tel:9391791558",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "chandana23F5",
      link: "https://github.com/chandana23F5",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Sai Chandana Kommajosyula",
      link: "https://www.linkedin.com/in/sai-chandana-kommajosyula-507128240",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card/30 relative">
      <div className="absolute inset-0 geometric-pattern opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-background/80 backdrop-blur-sm border-primary/30">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  Looking for internship opportunities where I can apply my technical skills, 
                  learn from experienced developers, and contribute to meaningful projects.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary hover:glow-primary transition-all duration-300 group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Quick Message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Your message..."
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>
                  <Button 
                    className="w-full gradient-primary text-background font-semibold hover:opacity-90 transition-opacity glow-primary"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <Card className="inline-block p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Location:</span> Hyderabad, India
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
