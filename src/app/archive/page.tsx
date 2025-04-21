'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Project {
  year: string;
  title: string;
  builtWith: string[];
  links: {
    github?: string;
    external?: string;
  };
}

const projects: Project[] = [
  {
    year: '2025',
    title: 'London Transit Delays',
    builtWith: ['Node.js', 'Express', 'MongoDB', 'Python', 'Pandas', 'Scikit-learn', 'TensorFlow'],
    links: {
      external: 'https://www.youtube.com/watch?app=desktop&v=faBJWkhCoZU'
    }
  },
  {
    year: '2025',
    title: 'Stockr',
    builtWith: ['OpenAI API', 'Chart.js', 'Alpha Vantage API', 'IEX Cloud', 'Yahoo Finance API'],
    links: {
      external: 'https://www.stockr.info/'
    }
  },
  {
    year: '2024',
    title: 'Personal Portfolio Website',
    builtWith: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'App Router'],
    links: {
      github: 'https://github.com/jamesmoraless/portfolio-website',
      external: 'https://jamesmorales.ca'
    }
  },
  {
    year: '2024',
    title: 'Cheer Web App',
    builtWith: ['MERN Stack', 'GCP', 'Socket.io', 'Eleven Labs', 'Agile'],
    links: {
      external: 'https://www.youtube.com/watch?v=vwu5KqiraI4'
    }
  },
  {
    year: '2023',
    title: 'Superhero Community Platform Web App',
    builtWith: ['PostgreSQL', 'Express', 'React', 'Node.js', 'AWS EC2'],
    links: {
      github: 'https://github.com/jamesmoraless/Hero-Hub-PERN-Stack'
    }
  },
  {
    year: '2023',
    title: 'Premier League Match Predictor',
    builtWith: ['Python', 'Jupyter Notebook', 'Pandas', 'Scikit-learn', 'Random Forest'],
    links: {
      github: 'https://github.com/jamesmoraless/Premier-League-Model'
    }
  },
  {
    year: '2023',
    title: 'URL Shortener',
    builtWith: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    links: {
      github: 'https://github.com/jamesmoraless/URL-Shortener'
    }
  },
  {
    year: '2023',
    title: 'Python Stock Price Predictor',
    builtWith: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Data Analysis'],
    links: {
      github: 'https://github.com/jamesmoraless/Python-Stock-Price-Predictor'
    }
  },
  {
    year: '2023',
    title: 'Retail Store Management Program',
    builtWith: ['Python', 'OOP', 'Terminal-based UI'],
    links: {
      github: 'https://github.com/jamesmoraless/Retail-Store-Management-Program'
    }
  },
  {
    year: '2023',
    title: 'E-Commerce API',
    builtWith: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    links: {
      github: 'https://github.com/jamesmoraless/EcommerceAPI'
    }
  },
  {
    year: '2022',
    title: 'Restorations of Eldya',
    builtWith: ['Unity', 'C#', '2D Game Development'],
    links: {
      github: 'https://github.com/jamesmoraless/RestorationsOfEldya'
    }
  },
  {
    year: '2023',
    title: 'Python Data Structures & Algorithms',
    builtWith: ['Python', 'Data Structures', 'Algorithms'],
    links: {
      github: 'https://github.com/jamesmoraless/Python-Data-Structures-and-Algorithms'
    }
  },
  {
    year: '2023',
    title: 'Machine Learning Projects',
    builtWith: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
    links: {
      github: 'https://github.com/jamesmoraless/Machine-Learning-Projects'
    }
  },
  {
    year: '2023',
    title: 'Web Development Portfolio',
    builtWith: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    links: {
      github: 'https://github.com/jamesmoraless/Web-Development-Portfolio'
    }
  }
];

export default function Archive() {
  return (
    <main className="min-h-screen bg-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-indigo-800 hover:text-indigo-600 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2 transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Projects</h1>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-indigo-200">
            <thead className="bg-indigo-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Year
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Project
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider hidden md:table-cell">
                  Built with
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Links
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-indigo-200">
              {projects.map((project, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="hover:bg-indigo-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-700">
                    {project.year}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-indigo-900">{project.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                    <div className="flex flex-wrap gap-2">
                      {project.builtWith.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-4">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-indigo-900 hover:text-indigo-600 transition-colors"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs font-medium">GitHub</span>
                        </a>
                      )}
                      {project.links.external && (
                        (project.links.external.includes('youtube.com') ? (
                          <a
                            href={project.links.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-indigo-900 hover:text-indigo-600 transition-colors"
                          >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <polygon points="5 3 19 12 5 21" />
                            </svg>
                            <span className="text-xs font-medium">Demo</span>
                          </a>
                        ) : (
                          <a
                            href={project.links.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-indigo-900 hover:text-indigo-600 transition-colors"
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span className="text-xs font-medium">Live Site</span>
                          </a>
                        ))
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </main>
  );
} 