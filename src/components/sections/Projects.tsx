'use client';

import { motion } from 'framer-motion';
import { ArrowLink, SectionHead, Tag, enterAt } from '@/components/ui/sharp';

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
    title: 'Atlas Code - Automated Technical Debt Resolution GitHub App',
    period: 'January 2026',
    description: [
      'Built an AI-powered GitHub App that continuously monitors codebases, detects technical debt, and automatically opens targeted pull requests with precise fixes for security vulnerabilities, duplicated logic, and maintainability issues',
      'Engineered specialized sub-agents (security, reliability, DRY, maintainability) that analyze code changes on every push to main, generating context-aware fixes with clear explanations',
      'Implemented a centralized debt tracking database using Supabase to prevent duplicate findings and automatically resolve issues upon PR merge',
    ],
    technologies: [
      'GitHub Apps',
      'Github Actions',
      'Supabase',
      'TypeScript',
      'AI Agents',
      'PostgreSQL',
      'Vercel',
    ],
    links: {
      demo: 'https://www.youtube.com/watch?v=MhSbGI2JdPM',
      info: 'https://8090-hackathon.vercel.app',
    },
  },
  {
    title: 'Capstone: London Transit Delays - 1st Place Winner',
    period: 'Fall 2024 - Spring 2025',
    description: [
      'Implemented a real-time data pipeline using Node.js, Express, and MongoDB, processing weather and traffic data dynamically',
      'Configured a Grafana dashboard to visualize the data, and a cron job to run the pipeline as a scheduled task',
      'Utilized Python, Pandas, Scikit-learn, and TensorFlow to build a predictive analytics pipeline, leveraging historical and real-time datasets for model training',
    ],
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'Python',
      'Grafana ',
      'Docker',
      'Cron',
      'GCP',
      'Open Source APIs',
    ],
    links: { demo: 'https://www.youtube.com/watch?app=desktop&v=faBJWkhCoZU' },
  },
  {
    title: 'Stockr',
    period: 'Fall 2024',
    description: [
      'Engineered an AI agent using the OpenAI API that analyzes personal portfolios and delivers personalized financial advice, leveraging insights from corporate financial reporting, finance and accounting coursework',
      'Developed a real-time finance dashboard integrating market data, portfolio tracking, and interactive visualizations utilizing open source libraries such as Chart.js and APIs such as Alpha Vantage, IEX Cloud, Yahoo Finance, and OpenAI',
    ],
    technologies: [
      'OpenAI API',
      'Docker',
      'Chart.js',
      'Alpha Vantage API',
      'IEX Cloud',
      'Yahoo Finance API',
      'React',
      'Typescript',
      'Next.js',
      'MongoDB',
      'Node.js',
      'Express',
      'Vercel',
    ],
    // No links: stockr.info is deprecated and the domain no longer resolves.
  },
  {
    title: 'Cheer Web App',
    period: 'Winter 2024',
    description: [
      'Deployed on GCP a comprehensive web app using the MERN stack, implementing a role-based access control system, real-time communication with Socket.io, staff scheduling, payroll system and Eleven Labs for text-to-speech functionality ensuring accessibility',
      'Collaborated with Family Connections Center over 8 months, utilizing scrum and Jim throughout the SDLC, adopting agile principles',
    ],
    technologies: [
      'MongoDB',
      'Express',
      'React',
      'Typescript',
      'Next.js',
      'GCP',
      'Socket.io',
      'Eleven Labs',
      'Docker',
    ],
    links: { demo: 'https://www.youtube.com/watch?v=vwu5KqiraI4' },
  },
];

/**
 * Featured Projects — a 2×2 grid where the grid LINES are the container.
 * No card fill, no shadow, no radius.
 *
 * Note: the old version rendered `description` (a string[]) straight into a
 * <p>, so every bullet ran together as one sentence. They are set as the
 * separate lines they already were in the data.
 */
const Projects = () => {
  return (
    <section id="projects" className="bg-ink-bg py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHead
          index="05"
          title="Featured Projects"
          sub="Some of my recent work"
          right={<ArrowLink href="/archive">View Full Project Archive</ArrowLink>}
        />

        <div className="grid grid-cols-1 border-l border-t border-ink-hair2 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              {...enterAt(i)}
              className="group relative border-b border-r border-ink-hair px-6 py-6 transition-colors hover:bg-ink-surface"
            >
              <span className="absolute inset-y-0 left-0 w-0.5 bg-transparent transition-colors group-hover:bg-signal" />

              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-[11px] text-ink-faint transition-colors group-hover:text-signal">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="lbl text-right">{p.period}</span>
              </div>

              <h3 className="mt-4 max-w-[520px] text-[21px] font-medium leading-tight tracking-[-0.016em] text-ink">
                {p.title}
              </h3>

              <div className="mt-4">
                {p.description.map((d, di) => (
                  <div key={di} className="flex gap-3 border-t border-ink-hair py-2">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-ink-hair2" />
                    <span className="text-[12.5px] leading-relaxed text-ink-muted">{d}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.technologies.map((t) => (
                  <Tag key={t}>{t.trim()}</Tag>
                ))}
              </div>

              <div className="mt-[18px] flex flex-wrap gap-5">
                {p.links?.demo && (
                  <a
                    href={p.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink transition-colors hover:text-signal"
                  >
                    Watch Demo <span className="text-signal">↗</span>
                  </a>
                )}
                {p.links?.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink transition-colors hover:text-signal"
                  >
                    GitHub <span className="text-signal">↗</span>
                  </a>
                )}
                {p.links?.info && (
                  <a
                    href={p.links.info}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink transition-colors hover:text-signal"
                  >
                    Live Site <span className="text-signal">↗</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <ArrowLink href="/archive">View Full Project Archive</ArrowLink>
        </div>
      </div>
    </section>
  );
};

export default Projects;
