import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Users, Zap, Database, Cloud } from "lucide-react";

export const About = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "TypeScript", "C"],
      icon: Code
    },
    {
      title: "Web Technologies", 
      skills: ["React.js", "Next.js", "Angular", "Express.js", "Node.js", "Flask", "Django", "CSS", "HTML"],
      icon: Palette
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD Pipelines"],
      icon: Cloud
    },
    {
      title: "Databases & Big Data",
      skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB"],
      icon: Database
    },
    {
      title: "Data Science",
      skills: ["Pandas", "NumPy", "Langchain", "Scikit-learn", "Matplotlib", "Seaborn"],
      icon: Zap
    },
    {
      title: "Testing & QA",
      skills: ["Software Verification/Validation", "Test Automation", "Unit Testing", "Functional Testing"],
      icon: Zap
    },
    {
      title: "Version Control & OS",
      skills: ["Linux", "Windows", "Unix Command Line", "Git", "GitHub"],
      icon: Zap
    }
  ];

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Experienced in building end-to-end applications using modern web technologies and cloud platforms."
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Skilled in designing scalable systems using AWS, GCP, and Azure with containerization and orchestration."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong experience working in agile teams and contributing to innovative projects."
    },
    {
      icon: Zap,
      title: "Problem Solving",
      description: "Passionate about solving complex technical challenges and optimizing system performance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a software engineer currently pursuing my Master's in Software Engineering 
            at Arizona State University. With hands-on experience in full-stack development, cloud-native systems, and AI-driven applications,
            I love building scalable systems, demonstrated through a real-time collaborative IDE with automated Kubernetes scaling and 
            a high-performance Redis server capable of handling concurrent clients with persistent storage. Currently, I am actively seeking Spring 2026 Internship and Full-time opportunities starting in June 2026 
            where I can get a chance to showcase my passion for designing and delivering scalable, high-performance software solutions.
          </p>
        </div>

        {/* Skills by Category */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <category.icon className="h-5 w-5 mr-2" style={{ color: '#bcd4e6' }} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="text-primary hover:bg-[#bcd4e6]/10"
                        style={{ borderColor: '#bcd4e6' }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div>
          <h3 className="text-2xl font-bold text-center text-primary mb-8">What I Bring</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <highlight.icon className="h-12 w-12 mx-auto mb-4" style={{ color: '#bcd4e6' }} />
                  <h4 className="font-semibold text-primary mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
