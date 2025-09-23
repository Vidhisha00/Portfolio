import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Redis Server",
      description: "A high-performance in-memory data structure store, used as a database, cache, and message broker, implemented in C++.",
      technologies: ["C++", "TCP/IP", "threads", "Mutex", "Custom RESP Parser", "File I/O", "Signal Handling"],
      github: "https://github.com/Vidhisha00/Redis-Server",
      features: [
        "Supports various data structures such as strings, hashes, lists, sets, and sorted sets",
        "Persistence options for data durability",
        "Custom RESP protocol parser for efficient client-server communication",
        "Thread-safe handling of multiple concurrent clients",
        "Implemented Singleton design pattern for managing server instance"
        
      ]
    },
    {
      title: "Cloud IDE",
      description: "A web-based integrated development environment (IDE) that allows users to write, compile, and run code in multiple programming languages directly from their browser.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Vidhisha00/Cloud-IDE",
      features: [
        "Real-time collaborative coding",
        "Built-in terminal and file explorer",
        "Code sharing and version control",
        "Customizable workspace and themes"
      ]
    },
    {
      title: "Diabetic Retinopathy Detection",
      description: "A machine learning application for the early detection of diabetic retinopathy using retinal fundus images.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
      github: "https://github.com/Vidhisha00/Diabetic-Retinopathy-Detection",
      features: [
        "Image preprocessing and augmentation",
        "Retinal fundus image analysis",
        "Early detection of diabetic retinopathy",
        "User-friendly interface for medical professionals"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: '#bcd4e6' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development skills, 
            innovative problem-solving, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-primary mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-[#bcd4e6] mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-primary hover:bg-[#bcd4e6]/10"
                        style={{ borderColor: '#bcd4e6' }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};