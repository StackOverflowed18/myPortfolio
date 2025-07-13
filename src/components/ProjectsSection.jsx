import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 3,
    title: "Healthcare Data Management System",
    description: "A HDMS using SQL which represents a pivotal step towards modernizing healthcare operations and enhancing the quality of patient care.",
    image: "/projects/project1.png",
    tags: ["MySQL" ,"XAMPP" ,"HTML" ,"CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/StackOverflowed18/DBMS_HDMS",
  },
  {
    id: 2,
    title: "GreenGadget Responsive WebApp",
    description:
      "Designed and developed a responsive & interactive web application to promote sustainable e-waste management.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "UI/UX","MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/StackOverflowed18/greengadget",
  },
  {
    id: 1,
    title: "E-commerce ShopLense tool",
    description:
      "A shopping made easy e-commerce website tool used for image upload based shopping assistance.",
    image: "/projects/project3.png",
tags: ["TypeScript", "JavaScript", "Python", "CSS", "HTML"],
    demoUrl: "#",
    githubUrl: "https://github.com/StackOverflowed18/ShopLens",
  },
];

// Show alert on screen as a banner
export const ProjectsAlert = () => (
  <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
    <span className="font-bold">Note:</span> This section is still a work in progress!
  </div>
);

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/StackOverflowed18"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
