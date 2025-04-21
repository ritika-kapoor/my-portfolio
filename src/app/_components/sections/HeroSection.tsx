'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

const PROFILE_IMG =
  '/silhouetted-female.jpeg'; // Unsplash profile fallback

export const HeroSection = () => {
  // Parallax effect for SVG background
  const svgRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!svgRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      svgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background-dark via-background-light to-background-dark text-accent px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated SVG background */}
      <motion.svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      >
        <motion.circle
          cx="300"
          cy="300"
          r="180"
          fill="#E64833"
          opacity="0.15"
          animate={{ cy: [300, 340, 300], r: [180, 200, 180] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />
        <motion.rect
          x="900"
          y="200"
          width="200"
          height="200"
          rx="40"
          fill="#244855"
          opacity="0.12"
          animate={{ x: [900, 950, 900], y: [200, 250, 200] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        />
        <motion.ellipse
          cx="1200"
          cy="700"
          rx="120"
          ry="60"
          fill="#FBE9D0"
          opacity="0.14"
          animate={{ cy: [700, 740, 700], rx: [120, 140, 120] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
      </motion.svg>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Animated profile image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
            whileHover={{ scale: 1.05, rotate: [-2, 2], boxShadow: '0 8px 32px rgba(230,72,51,0.15)' }}
            className="mx-auto mb-8 w-32 h-32 rounded-full shadow-2xl border-4 border-accent overflow-hidden bg-background-dark flex items-center justify-center"
          >
            <Image
              src={PROFILE_IMG}
              alt="Profile"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
          <motion.h1 
            className="text-5xl sm:text-7xl font-bold mb-8 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <span className="text-secondary">Ritzzzzz</span>
          </motion.h1>
          <motion.p 
            className="text-2xl sm:text-3xl mb-10 text-accent/90 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Ho! Ho! Ho!
          </motion.p>
          <motion.div
            className="text-lg sm:text-xl mb-14 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="mb-4 text-accent/80 leading-relaxed">
              From circuit boards to coding, I've embraced the journey of continuous learning and adaptation.
              Currently crafting digital experiences and exploring the frontiers of AI and cloud technologies.
            </p>
          </motion.div>
          {/* Animated Buttons with ripple effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            <a
              href="#about"
              className="vintage-button relative overflow-hidden group"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-20 transition duration-300 rounded" />
            </a>
            <a
              href="#contact"
              className="vintage-button bg-transparent hover:bg-secondary/10 border-2 border-secondary text-secondary hover:text-secondary relative overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-20 transition duration-300 rounded" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};