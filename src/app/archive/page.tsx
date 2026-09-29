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
    year: '2026',
    title: 'Atlas Code - Automated Technical Debt Resolution',
    builtWith: ['GitHub Apps', 'Supabase', 'TypeScript', 'AI Agents', 'PostgreSQL', 'Vercel', 'Github Actions'],
    links: { external: 'https://www.youtube.com/watch?v=MhSbGI2JdPM' },
  },
  {
    year: '2025',
    title: 'London Transit Delays',
    builtWith: ['Node.js', 'Express', 'MongoDB', 'Python', 'Pandas', 'Scikit-learn', 'TensorFlow'],
    links: { external: 'https://www.youtube.com/watch?app=desktop&v=faBJWkhCoZU' },
  },
  {
    year: '2024',
    title: 'Stockr',
    builtWith: ['OpenAI API', 'Chart.js', 'Alpha Vantage API', 'IEX Cloud', 'Yahoo Finance API'],
    links: {},
  },
  {
    year: '2024',
    title: 'Personal Portfolio Website',
    builtWith: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'App Router'],
    links: {
      github: 'https://github.com/jamesmoraless/portfolio-website',
      external: 'https://jamesmorales.ca',
    },
  },
  {
    year: '2024',
    title: 'Cheer Web App',
    builtWith: ['MERN Stack', 'GCP', 'Socket.io', 'Eleven Labs', 'Agile'],
    links: { external: 'https://www.youtube.com/watch?v=vwu5KqiraI4' },
  },
  {
    year: '2023',
    title: 'Superhero Community Platform Web App',
    builtWith: ['PostgreSQL', 'Express', 'React', 'Node.js', 'AWS EC2'],
    links: { github: 'https://github.com/jamesmoraless/Hero-Hub-PERN-Stack' },
  },
  {
    year: '2023',
    title: 'Premier League Match Predictor',
    builtWith: ['Python', 'Jupyter Notebook', 'Pandas', 'Scikit-learn', 'Random Forest'],
    links: { github: 'https://github.com/jamesmoraless/Premier-League-Model' },
  },
  {
    year: '2023',
    title: 'URL Shortener',
    builtWith: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    links: { github: 'https://github.com/jamesmoraless/URL-Shortener' },
  },
  {
    year: '2023',
    title: 'Python Stock Price Predictor',
    builtWith: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Data Analysis'],
    links: { github: 'https://github.com/jamesmoraless/Python-Stock-Price-Predictor' },
  },
  {
    year: '2023',
    title: 'Retail Store Management Program',
    builtWith: ['Python', 'OOP', 'Terminal-based UI'],
    links: { github: 'https://github.com/jamesmoraless/Retail-Store-Management-Program' },
  },
  {
    year: '2023',
    title: 'E-Commerce API',
    builtWith: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    links: { github: 'https://github.com/jamesmoraless/EcommerceAPI' },
  },
  {
    year: '2022',
    title: 'Restorations of Eldya',
    builtWith: ['Unity', 'C#', '2D Game Development'],
    links: { github: 'https://github.com/jamesmoraless/RestorationsOfEldya' },
  },
  {
    year: '2023',
    title: 'Python Data Structures & Algorithms',
    builtWith: ['Python', 'Data Structures', 'Algorithms'],
    links: { github: 'https://github.com/jamesmoraless/Python-Data-Structures-and-Algorithms' },
  },
  {
    year: '2023',
    title: 'Machine Learning Projects',
    builtWith: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
    links: { github: 'https://github.com/jamesmoraless/Machine-Learning-Projects' },
  },
  {
    year: '2023',
    title: 'Web Development Portfolio',
    builtWith: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    links: { github: 'https://github.com/jamesmoraless/Web-Development-Portfolio' },
  },
];

const linkClass =
  'inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-ink';

/**
 * /archive — already the best-structured page on the site, so this keeps the
 * table and stops fighting it: hairline rows instead of a white card, mono
 * everywhere (it is all metadata), year in accent on hover, and "Built with"
 * as a comma-separated run rather than seven pills per row — which at fifteen
 * rows was the densest visual noise on the whole site.
 */
export default function Archive() {
  return (
    <main className="min-h-screen bg-ink-bg px-6 pb-24 pt-28 sm:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[1440px]"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.13em] text-ink-muted transition-colors hover:text-ink"
        >
          <span className="text-signal">←</span>
          Back to Home
        </Link>

        <h1 className="d2 mt-8 text-ink">All Projects</h1>

        <div className="my-7 flex items-baseline gap-3.5">
          <span className="lbl">{projects.length} entries</span>
          <span className="h-px flex-1 bg-ink-hair" />
        </div>

        {/* Head */}
        <div className="hidden grid-cols-[84px_380px_1fr_170px] border-b border-ink-hair2 pb-3 lg:grid">
          <span className="lbl">Year</span>
          <span className="lbl">Project</span>
          <span className="lbl">Built with</span>
          <span className="lbl text-right">Links</span>
        </div>

        {/* Rows */}
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className="group grid grid-cols-1 items-start gap-2 border-b border-ink-hair py-3.5 transition-colors hover:bg-ink-surface lg:grid-cols-[84px_380px_1fr_170px] lg:items-center lg:gap-0"
          >
            <span className="font-mono text-xs text-ink-faint transition-colors group-hover:text-signal">
              {project.year}
            </span>
            <span className="pr-6 text-sm tracking-[-0.01em] text-ink">{project.title}</span>
            <span className="pr-6 font-mono text-[11px] text-ink-faint">
              {project.builtWith.join(', ')}
            </span>
            <span className="flex gap-4 lg:justify-end">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  GitHub <span className="text-signal">↗</span>
                </a>
              )}
              {project.links.external &&
                (project.links.external.includes('youtube.com') ? (
                  <a
                    href={project.links.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Demo <span className="text-signal">↗</span>
                  </a>
                ) : (
                  <a
                    href={project.links.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Live Site <span className="text-signal">↗</span>
                  </a>
                ))}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
