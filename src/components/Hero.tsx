import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a simple text-based resume
    const resumeContent = `
KOMMAJOSYULA SAI CHANDANA
Computer Science Student | Full Stack Developer

Contact:
Email: kavchandru1998p@gmail.com
Phone: 9391791558
GitHub: https://github.com/chandana23F5
LinkedIn: https://www.linkedin.com/in/sai-chandana-kommajosyula-507128240

OBJECTIVE:
I'm a Computer Science student with a strong interest in building real-world software solutions. I'm currently exploring full-stack development and problem-solving through personal projects and coding challenges. I'm an innovation focused professional with strategic thinking and adaptability. I'm looking for an internship where I can apply my technical skills, learn from experienced developers, and grow through hands-on experience in a collaborative environment.

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden geometric-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50" />
      
      {/* Animated geometric shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-card border border-border rounded-full">
            <span className="text-sm text-muted-foreground">👋 Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-gradient-primary">
              Sai Chandana
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Computer Science Student passionate about{' '}
            <span className="text-primary font-semibold">Full Stack Development</span> and building{' '}
            <span className="text-secondary font-semibold">innovative solutions</span>
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Currently pursuing B.Tech in Computer Science at CMR Institute of Technology with a 9.78 CGPA. 
            I love solving complex problems and have tackled 150+ DSA challenges across various platforms.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="gradient-primary text-background font-semibold hover:opacity-90 transition-opacity glow-primary group"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary hover:bg-primary/10 font-semibold group"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/chandana23F5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-full hover:border-primary hover:glow-primary transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sai-chandana-kommajosyula-507128240" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-full hover:border-primary hover:glow-primary transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:kavchandru1998p@gmail.com"
              className="p-3 bg-card border border-border rounded-full hover:border-primary hover:glow-primary transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-8 w-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
