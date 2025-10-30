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
      value: "Sai Chandana",
      link: "https://www.linkedin.com/in/sai-chandana-kommajosyula-507128240",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Contact</span>
            </h2>
          </div>

          <Card className="p-10 bg-card/90 backdrop-blur-sm border-2 border-border">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border flex items-center justify-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">Hyderabad, India</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
