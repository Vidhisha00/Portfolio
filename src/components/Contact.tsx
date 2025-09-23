import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss potential projects or just connect!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 mb-4" style={{ color: '#bcd4e6' }} />
              <h3 className="font-semibold text-primary mb-2"><a 
                href="mailto:vidhishamle@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Email
              </a></h3>
              
            </div>

            <div className="flex flex-col items-center">
              <Github className="h-8 w-8 mb-4" style={{ color: '#bcd4e6' }} />
              <h3 className="font-semibold text-primary mb-2">
              <a 
                href="https://github.com/Vidhisha00" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <Linkedin className="h-8 w-8 mb-4" style={{ color: '#bcd4e6' }} />
              <h3 className="font-semibold text-primary mb-2">
              <a 
                href="https://linkedin.com/in/vidhisha-amle/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};