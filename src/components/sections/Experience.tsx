'use client';

import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Flowmatic",
    location: "Toronto, ON",
    period: "November 2024 - Present",
    description: [
      "Deployed an ETL pipeline utilizing Airflow, PostgreSQL, and AWS EC2 to efficiently process and manage over 10,000 customer data points; enhancing data collection and usability",
      "Synchronized backend and frontend systems by integrating FastAPI schemas with automated TypeScript type generation, boosting API development speed"
    ],
    technologies: ["Airflow", "PostgreSQL", "AWS EC2", "FastAPI", "TypeScript"]
  },
  {
    title: "Software Engineering Intern - Analytics",
    company: "Zynga Inc.",
    location: "Toronto, ON",
    period: "May 2024 - September 2024",
    description: [
      "Developed and deployed a new feature using React, Python, Airflow and Redshift enabling game team analysts to perform experimental segmentation and visualize target metric results for product managers; successfully used for Harry Potter and Words With Friends 2",
      "Updated the architecture of an internal data service tool, resulting in a $250k annual cost reduction and improved system efficiency",
      "Deployed containerized Jenkins pipelines for automated creation of Terraform resources, data synchronization; hosted on Kubernetes"
    ],
    technologies: ["React", "Python", "Airflow", "Redshift", "Jenkins", "Kubernetes", "Terraform"]
  },
  {
    title: "Software Developer",
    company: "Repwave",
    location: "Remote",
    period: "November 2023 - March 2024",
    description: [
      "Worked alongside a Salesforce Senior SWE on full-stack development, integrating a Flask/Python backend and leading the React front-end development. Optimized API for processing monthly conversational data",
      "Collaboratively designed UI elements and workflows in Figma for a B2B SaaS product, focusing on user experience and functionality"
    ],
    technologies: ["React", "Flask", "Python", "Salesforce", "Figma"]
  },
  {
    title: "Business Systems Analyst Intern",
    company: "Ontario Health – Digital Services",
    location: "Toronto, ON",
    period: "May 2023 - September 2023",
    description: [
      "Led Scrum meetings, managed work items and ensured timely execution of tasks; increasing sprint velocity by 18% over 8 sprints",
      "Created a dynamic dashboard on Azure DevOps to monitor task completion and team productivity with the use of Burndown, Gantt Charts, and graphs, providing transparent progress reports to clients, improving client satisfaction"
    ],
    technologies: ["Azure DevOps", "Scrum", "Agile"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-lg text-gray-700">My professional journey and contributions</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-emerald-200" />

          {/* Experience items */}
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 bg-emerald-800 rounded-full mt-6" />

              {/* Content */}
              <div className="ml-12 md:ml-0 md:w-1/2 p-6 bg-emerald-50 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-gray-700">{experience.company}</p>
                  <span className="text-emerald-400">•</span>
                  <p className="text-gray-700">{experience.location}</p>
                </div>
                <p className="text-sm text-gray-600 mb-4">{experience.period}</p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  {experience.description.map((item, i) => (
                    <li key={i} className="text-sm">{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-emerald-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Resume Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-900 hover:text-emerald-700 transition-colors duration-200 group"
          >
            <span className="text-lg font-medium">View Full Résumé</span>
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

export default Experience; 