"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "timeline", label: "Journey" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export const FloatingNav = () => {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let found = sections[0].id;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) found = sec.id;
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-1/2 right-6 -translate-y-1/2 z-50 flex flex-col gap-4 vintage-nav">
      {sections.map((sec) => (
        <motion.button
          key={sec.id}
          onClick={() => scrollToSection(sec.id)}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl border-2 border-accent bg-background-light/80 backdrop-blur-md transition-all duration-300 ${active === sec.id ? "scale-110 bg-accent text-background-dark" : "hover:scale-105 text-accent"}`}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.97 }}
          aria-label={sec.label}
        >
          <span className="font-serif font-bold text-lg">{sec.label.charAt(0)}</span>
        </motion.button>
      ))}
    </nav>
  );
};
