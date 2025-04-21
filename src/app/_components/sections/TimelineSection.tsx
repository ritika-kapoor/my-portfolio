"use client";

import { motion } from "framer-motion";

// Mocked data; replace with API data later
const timeline = [
  {
    type: "experience",
    title: "Senior Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    startDate: "2022-01-01",
    endDate: null,
    description: "Leading the frontend team and building interactive web apps.",
    icon: "💼",
  },
  {
    type: "education",
    title: "MSc Computer Science",
    company: "Stanford University",
    location: "Stanford, CA",
    startDate: "2020-09-01",
    endDate: "2022-06-01",
    description: "Specialized in Human-Computer Interaction.",
    icon: "🎓",
  },
  {
    type: "experience",
    title: "Frontend Developer",
    company: "Creative Studio",
    location: "Remote",
    startDate: "2019-06-01",
    endDate: "2021-12-31",
    description: "Built beautiful, accessible websites for clients.",
    icon: "💼",
  },
];

const formatDate = (date) => date ? new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short" }) : "Present";

export const TimelineSection = () => (
  <section id="timeline" className="py-24 bg-gradient-to-br from-background-dark via-background-light to-background-dark relative overflow-x-hidden">
    <div className="max-w-4xl mx-auto px-4 relative z-10">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-accent mb-16 font-serif text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Journey
      </motion.h2>
      <div className="relative border-l-4 border-accent/40 pl-8">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            className="mb-16 relative group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <span className="absolute -left-12 top-1 text-3xl select-none animate-bounce group-hover:scale-125 transition-transform">{item.icon}</span>
            <div className="bg-background-light/80 backdrop-blur-md rounded-lg p-6 shadow-xl border border-accent/10 group-hover:scale-105 transition-transform">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <span className="text-secondary font-bold text-lg font-serif">{item.title}</span>
                <span className="text-accent/70 text-sm font-mono">
                  {formatDate(item.startDate)} - {formatDate(item.endDate)}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-accent/90 font-semibold">{item.company}</span>
                <span className="text-accent/60 text-xs">{item.location}</span>
              </div>
              <p className="text-accent/80 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
