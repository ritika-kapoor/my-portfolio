'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: "React", level: 90, color: "#61dafb" },
  { name: "Next.js", level: 85, color: "#000" },
  { name: "TypeScript", level: 80, color: "#3178c6" },
  { name: "Prisma", level: 75, color: "#2d3748" },
  { name: "TailwindCSS", level: 85, color: "#38bdf8" },
  { name: "Node.js", level: 80, color: "#3c873a" },
  { name: "Framer Motion", level: 70, color: "#e14eca" },
  { name: "Laravel", level: 60, color: "#ff2d20" },
  { name: "Python", level: 70, color: "#3572a5" },
  { name: "PostgreSQL", level: 65, color: "#336791" },
  { name: "MySQL", level: 60, color: "#00758f" },
  { name: "AWS", level: 55, color: "#232f3e" },
  { name: "Docker", level: 70, color: "#0db7ed" },
  { name: "Git", level: 80, color: "#f34f29" },
  { name: "REST APIs", level: 70, color: "#3498db" },
  { name: "AI/ML", level: 60, color: "#8e44ad" },
];

export const SkillsSection = () => (
  <section id="skills" className="py-24 bg-gradient-to-br from-background-dark via-background-light to-background-dark relative">
    <div className="max-w-5xl mx-auto px-4">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-accent mb-16 font-serif text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My <span className="text-secondary">Skills</span>
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-12">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
          >
            <motion.div
              className="relative w-28 h-28 flex items-center justify-center"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="112" height="112" viewBox="0 0 112 112" className="absolute top-0 left-0">
                <circle
                  cx="56"
                  cy="56"
                  r="48"
                  stroke="#e5e7eb"
                  strokeWidth="10"
                  fill="none"
                />
                <motion.circle
                  cx="56"
                  cy="56"
                  r="48"
                  stroke={skill.color}
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 48}
                  strokeDashoffset={2 * Math.PI * 48}
                  animate={{ strokeDashoffset: 2 * Math.PI * 48 * (1 - skill.level / 100) }}
                  transition={{ duration: 1.2, delay: idx * 0.1, type: "spring" }}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute text-2xl font-bold text-accent font-serif">
                {skill.level}%
              </span>
            </motion.div>
            <span className="text-lg font-semibold text-accent font-serif">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);