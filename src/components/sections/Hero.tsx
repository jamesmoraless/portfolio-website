'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-900 mb-4 tracking-tight leading-tight">
            James Morales
          </h1>
          <h2 className="text-lg md:text-xl text-indigo-700 mb-4 font-medium">
            Full Stack Developer
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-gray-700 max-w-xl mb-6 leading-relaxed"
          >
            Designing and building software that solves real problems, blending engineering expertise with a sharp focus on customer value.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="bg-indigo-800 text-white font-medium px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-white text-indigo-800 font-medium px-6 py-3 md:px-8 md:py-4 rounded-lg border border-indigo-100 hover:border-indigo-200 transition transform hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
        {/* Right: Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
        >
          <img
            src="/images/ghibli-made.png"
            alt="James Morales Studio Ghibli Form"
            className="w-72 h-92 md:w-106 md:h-136 object-cover object-center rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
      {/* Absolute Scroll Arrow at bottom */}
      <a href="#tech-stack" aria-label="Scroll to Tech Stack" className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <svg className="w-8 h-8 text-indigo-700 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
};

export default Hero; 