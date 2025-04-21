'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectItem {
  title: string;
  period: string;
  description: string[];
  technologies: string[];
  links?: {
    demo?: string;
    github?: string;
    info?: string;
  };
  image: string;
  link?: string;
}

const projects: ProjectItem[] = [
  {
    title: "London Transit Delays",
    period: "Fall 2024 - Present",
    description: [
      "Implemented a real-time data pipeline using Node.js, Express, and MongoDB, processing weather and traffic data dynamically",
      "Utilized Python, Pandas, Scikit-learn, and TensorFlow to build a predictive analytics pipeline, leveraging historical and real-time datasets for model training"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Python", "Pandas", "Scikit-learn", "TensorFlow"],
    links: {
      demo: "https://www.youtube.com/watch?app=desktop&v=faBJWkhCoZU"
    },
    image: "/images/london-transit-delays.jpg"
  },
  {
    title: "Stockr",
    period: "Fall 2024 - Present",
    description: [
      "Engineered an AI agent using the OpenAI API that analyzes personal portfolios and delivers personalized financial advice, leveraging insights from corporate financial reporting, finance and accounting coursework",
      "Developed a real-time finance dashboard integrating market data, portfolio tracking, and interactive visualizations utilizing open source libraries such as Chart.js and APIs such as Alpha Vantage, IEX Cloud, Yahoo Finance, and OpenAI"
    ],
    technologies: ["OpenAI API", "Chart.js", "Alpha Vantage API", "IEX Cloud", "Yahoo Finance API"],
    links: {
      info: "https://www.stockr.info/"
    },
    image: "/images/stockr.jpg"
  },
  {
    title: "Cheer Web App",
    period: "Winter 2024",
    description: [
      "Deployed on GCP a comprehensive web app using the MERN stack, implementing a role-based access control system, real-time communication with Socket.io, staff scheduling, payroll system and Eleven Labs for text-to-speech functionality ensuring accessibility",
      "Collaborated with Family Connections Center over 8 months, utilizing scrum and Jim throughout the SDLC, adopting agile principles"
    ],
    technologies: ["MERN Stack", "GCP", "Socket.io", "Eleven Labs", "Agile"],
    links: {
      demo: "https://www.youtube.com/watch?v=vwu5KqiraI4"
    },
    image: "/images/cheer-web-app.jpg"
  },
  {
    title: "Superhero Community Platform Web App",
    period: "Fall 2023",
    description: [
      "Developed a HeroHub, a full-stack web application using the PERN stack (PostgreSQL, Express, React, Node.js), enabling users to explore, manage, and review a comprehensive superhero database",
      "Deployed on AWS EC2 and managed server configs, security groups, and storage optimization for efficient cloud-based operations"
    ],
    technologies: ["PostgreSQL", "Express", "React", "Node.js", "AWS EC2"],
    links: {
      github: "https://github.com/jamesmoraless/Hero-Hub-PERN-Stack"
    },
    image: "/images/superhero-community-platform.jpg"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-700">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-indigo-200 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                  <p className="text-sm font-medium text-gray-600">{project.period}</p>
                </div>
                <p className="text-sm text-gray-700 mb-3 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-white text-gray-700 text-xs rounded-full border border-indigo-100 hover:bg-indigo-100 hover:border-indigo-200 hover:text-indigo-700 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-3">
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-indigo-600 transition-colors flex items-center space-x-1"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
                      </svg>
                      <span className="text-xs font-medium">Watch Demo</span>
                    </a>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-indigo-600 transition-colors flex items-center space-x-1"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs font-medium">GitHub</span>
                    </a>
                  )}
                  {project.links?.info && (
                    <a
                      href={project.links.info}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-indigo-600 transition-colors flex items-center space-x-1"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <span className="text-xs font-medium">Live Site</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/archive"
            className="inline-flex items-center text-gray-900 hover:text-indigo-600 transition-colors duration-200 group"
          >
            <span className="text-lg font-medium">View Full Project Archive</span>
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 