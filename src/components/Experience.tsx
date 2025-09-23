import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Techsture Technologies",
      role: "Software Developer",
      duration: "Jan 2024 – May 2024",
      location: "Remote",
      description: "Designed and implemented a custom ERP system for the organization's intranet network using the Django framework. Streamlined multiple HR functions and implemented security features.",
      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript", "React"],
      achievements: [
        "Streamlined multiple HR functions like pay-slip generation, attendance tracking, event management, task management, and leave approval into the ERP system, improving operational efficiency by 30%",
        "Implemented role-based access control and multi-factor authentication to ensure secure access to the organization's portals and enhance data protection"
      ]
    },
    {
      company: "L&T, Heavy Engineering",
      role: "Summer Intern",
      duration: "June 2023 – Jul 2023",
      location: "India",
      description: "Conducted in-depth research and analysis on low-code development technology, focusing on OutSystems platform implementation and real-time application development.",
      technologies: ["OutSystems", "Low-Code Development"],
      achievements: [
        "Achieved a 25% improvement in development speed and enhanced overall project efficiency through hands-on implementation on the OutSystems platform",
        "Collaborated in team meetings, contributing innovative ideas that streamlined decision-making processes and significantly boosted project success",
        "Developed a real-time access control application, reducing manual access processing time by 35% for authorized applicants"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey building innovative solutions and growing as a developer
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building className="h-4 w-4" style={{ color: '#bcd4e6' }} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" style={{ color: '#bcd4e6' }} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" style={{ color: '#bcd4e6' }} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium text-primary mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
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
                  
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};