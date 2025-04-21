'use client';

import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background-dark via-background-light to-background-dark text-accent relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,233,208,0.03)_1px,transparent_1px)] bg-[length:24px_24px] opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 font-serif">
              <span className="text-secondary">About</span> Me
            </h2>
            <div className="space-y-6 text-lg text-accent/80">
              <p className="leading-relaxed">
                As an Army brat, I've had the unique privilege of calling many places home. This nomadic lifestyle has shaped me into an adaptable individual who thrives on new experiences and challenges.
              </p>
              <p className="leading-relaxed">
                My journey began in the world of Electrical and Electronics Engineering, where I developed a strong foundation in technical problem-solving. However, my curiosity led me to explore the vast landscape of software development.
              </p>
              <p className="leading-relaxed">
                tarararara fill later
              </p>
              <p className="text-secondary/90 italic">
                My diverse background has taught me that the best innovations often come from combining different perspectives and technologies.
              </p>
            </div>
          </motion.div>
          
          {/* Current Focus Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="vintage-card"
          >
            <h3 className="text-3xl font-bold mb-8 text-secondary font-serif">Current Focus</h3>
            <ul className="space-y-6">
              {[
                "Expanding Laravel expertise",
                "Learning AI tools",
                "AWS cloud architecture",
                "Full-stack development"
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 group"
                >
                  <span className="text-secondary transform group-hover:rotate-90 transition-transform duration-300">▹</span>
                  <span className="text-accent/90 group-hover:text-accent transition-colors duration-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
