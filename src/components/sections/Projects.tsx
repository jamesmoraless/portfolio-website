'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
    }
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
    }
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
    }
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
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-lg text-gray-600">Featured work and personal projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.period}</p>
              </div>

              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
                {project.description.map((item, i) => (
                  <li key={i} className="text-sm">{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.links && (
                <div className="flex gap-4">
                  {project.links.demo && (
                    <Link 
                      href={project.links.demo}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Demo →
                    </Link>
                  )}
                  {project.links.github && (
                    <Link 
                      href={project.links.github}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      GitHub →
                    </Link>
                  )}
                  {project.links.info && (
                    <Link 
                      href={project.links.info}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Learn More →
                    </Link>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 