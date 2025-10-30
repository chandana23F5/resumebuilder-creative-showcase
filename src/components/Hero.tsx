import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download, User } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const resumeContent = `
KOMMAJOSYULA SAI CHANDANA
Computer Science Student | Backend Developer

Contact:
Email: kavchandru1998p@gmail.com
Phone: 9391791558
GitHub: https://github.com/chandana23F5
LinkedIn: https://www.linkedin.com/in/sai-chandana-kommajosyula-507128240

OBJECTIVE:
I'm a Computer Science student with a strong interest in building real-world software solutions. I'm currently exploring backend development and problem-solving through personal projects and coding challenges. I'm an innovation focused professional with strategic thinking and adaptability. I'm looking for an internship where I can apply my technical skills, learn from experienced developers, and grow through hands-on experience in a collaborative environment.

EDUCATION:
CMR Institute of Technology Hyd (2023-2027)
Bachelor of Technology in Computer Science and Engineering
CGPA: 9.78

Tirumala Junior Mahila Kalasala (2020-2022)
Intermediate Public Examination, Andhra Pradesh
Score: 96.2

Sri Gowthami (EM) Public High School (2020)
Board of Secondary Education, Andhra Pradesh
Score: 9.8

TECHNICAL SKILLS:
• Programming: Java, Python (60% proficiency)
• Web Technologies: C, CSS, JavaScript, Node.js (60% proficiency)
• Learning: React.js, SQL (80% proficiency)
• Problem Solving: 150+ DSA problems solved on LeetCode, HackerRank, CodeChef
• Data Structures & Algorithms: Strong foundation
• Smart Interviews: 75+ problems solved
• AI & Data Science: Foundational knowledge

PROJECTS:
1. Web Development - Obesity Prevention Application
   Web application designed to guide people in preventing and curing obesity through exercises and marathons, promoting physical fitness without medication.

2. YouTube Video Summarizer
   Python-based application that summarizes YouTube videos according to user-specified word count.

CERTIFICATIONS:
• Introduction to Python Certificate - Infosys SpringBoard
• Basics of Python Certificate - Infosys SpringBoard
• Python for Beginners Certificate - Simplilearn
• Virtual Internship Program in Java Programming - CodSoft

ADDITIONAL INFORMATION:
• Participated in 5+ hackathons and ideathons
• Strong leadership and communication skills
• Languages: English, Telugu, Hindi

Generated from portfolio: ${window.location.href}
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sai_Chandana_Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <Card className="p-12 bg-card/90 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500">
            {/* Profile Image Placeholder */}
            <div className="flex justify-center mb-8">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <User className="w-20 h-20 text-primary" />
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center mb-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                <span className="text-gradient-primary">Sai Chandana Kommajosyula</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                Backend Developer | Tech Enthusiast
              </p>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <span>📍</span> Hyderabad, India
              </p>
            </div>

            {/* Download Resume Button */}
            <div className="flex justify-center mb-8">
              <Button 
                onClick={downloadResume}
                className="gradient-primary text-background font-semibold hover:opacity-90 transition-opacity"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <a 
                href="https://github.com/chandana23F5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-full hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sai-chandana-kommajosyula-507128240" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-full hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:kavchandru1998p@gmail.com"
                className="p-3 bg-muted rounded-full hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
