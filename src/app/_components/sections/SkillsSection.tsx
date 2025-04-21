'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Laravel", level: 12 },
      { name: "TypeScript", level: 20 },
      { name: "React", level: 20 },
      { name: "Next.js", level: 30 },
      { name: "Python", level: 40 },
    ]
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "PostgreSQL", level: 25 },
      { name: "MySQL", level: 23 },
      { name: "AWS (Learning)", level: 12 },
      { name: "Docker", level: 39 },
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 30 },
      { name: "REST APIs", level: 2 },
      { name: "TailwindCSS", level: 30 },
      { name: "AI/ML (Learning)", level: 22 },
    ]
  }
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-accent/90 font-serif">{name}</span>
      <span className="text-sm font-medium text-secondary/80">{level}%</span>
    </div>
    <div className="w-full bg-secondary/10 rounded-full h-2 vintage-border">
      <motion.div
        className="bg-secondary h-2 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-background-dark via-background-light to-background-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,233,208,0.03)_1px,transparent_1px)] bg-[length:24px_24px] opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-6 font-serif">
            Technical <span className="text-secondary">Skills</span>
          </h2>
          <p className="text-accent/80 max-w-2xl mx-auto text-lg">
            A harmonious blend of electrical engineering foundations and modern software development expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="vintage-card"
            >
              <h3 className="text-2xl font-bold text-secondary mb-8 font-serif">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};