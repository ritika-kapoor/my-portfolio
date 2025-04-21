'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Project 1",
    description: "Description of your first project. ",
    technologies: ["Laravel", "MySQL", "TailwindCSS"],
    image: "/project1.jpg", // You'll need to add these images to your public folder
    link: "#",
    github: "https://github.com"
  },
  {
    title: "Project 2",
    description: "Description of your second project. ",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: "/project2.jpg",
    link: "#",
    github: "https://github.com"
  },
  {
    title: "Project 3",
    description: "Description of your third project.",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    image: "/project3.jpg",
    link: "#",
    github: "https://github.com"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-4 font-serif">
            Featured <span className="text-secondary">Projects</span>
          </h2>
          <p className="text-accent/80 max-w-2xl mx-auto text-lg">
            A curated collection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="vintage-card group"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg vintage-border">
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/5 transition-colors duration-300" />
                <Image
                  src={"/Sage-Green-Aesthetic-Wallpaper-2.webp"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-accent font-serif">
                  {project.title}
                </h3>
                <p className="text-accent/80">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium bg-secondary/10 text-accent/90 px-3 py-1 rounded-full vintage-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                      className="vintage-button border-accent text-accent hover:bg-accent hover:text-background-dark transition-colors"
                    >
                  </motion.a>
                  <a
                    href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    className="text-text-light hover:text-accent transition-colors"
                    >
                    GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 