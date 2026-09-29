'use client';

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';
import Image from 'next/image';
import { ArrowLink, SectionHead, Tag, enterAt } from '@/components/ui/sharp';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  companyLogo: string;
  companyUrl: string;
  screenshot: string;
  /** Already-dark capture — needs the gentler plate filter. */
  darkShot?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Technical Product Manager',
    company: 'Tempo Labs',
    location: 'Toronto, ON',
    period: 'November 2025 - Present',
    description: [
      'Manage end-to-end product development, overseeing $700K+ of ARR across discovery, design, development, and delivery.',
      'Built and shipped an internal full-stack operating platform (self-initiated, later adopted org-wide) now used daily to manage 30+ clients and 50+ engineers, unifying code delivery analytics, capacity planning, and client intelligence into a single system, enabling org-wide visibility and data-driven decision-making.',
      'Implemented automated developer activity tracking and code-quality scoring (PR analysis, daily summaries, calendar views), enabling data-driven developer and client rankings that inform staffing, performance, and delivery risk.',
      "Deployed a central agent orchestration system with a chatbot and specialized sub-agents (PRD, user flows, UI specs, meeting insights, client profiler with web scraping) grounded in each client's repos and knowledge base, reducing feature-to-design cycle time by ~70%.",
    ],
    technologies: [
      'React',
      'TypeScript',
      'Supabase',
      'AI Agents',
      'Product Management',
      'Agile',
      'Scrum',
      'Tempo',
      'Trello',
      'Linear',
    ],
    companyLogo: '/images/marks/tempo.png',
    companyUrl: 'https://www.tempo.new/',
    screenshot: '/images/tempo-site-dark.png',
    darkShot: true,
  },
  {
    title: 'Technical Lead (Contract)',
    company: 'Duration Growth Advisors',
    location: 'Toronto, ON',
    period: 'January 2026 - July 2026',
    description: [
      'Partnered directly with the founder of a venture debt firm to architect and ship an underwriting platform from zero as the sole technical hire, turning 2 days of analyst work per deal into under 5 minutes',
      'Built ingestion pipelines for 2–10 years of historical financials and customer MRR data, automatically generating cohort analyses and SaaS metrics for every deal',
      'Deployed AI agents that scrape LinkedIn and company websites to profile founders, score their readiness for debt, and match them with investors',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Supabase',
      'Supabase MCP',
      'Claude Code',
      'Tavily API',
      'Mobbin MCP',
      'Linear',
    ],
    companyLogo: '/images/duration-logo.png',
    companyUrl: 'https://www.durationgrowth.com/',
    screenshot: '/images/duration-site.png',
  },
  {
    title: 'Software Engineer',
    company: 'Flowmatic',
    location: 'Toronto, ON',
    period: 'November 2024 - May 2025',
    description: [
      'Launched an OpenAI-driven email composer that pulls invoice, contract and customer data, cutting rep prep from 30 min to 1 min and standardizing customer outreach',
      'Deployed a PostgreSQL MCP server on AWS Lightsail Containers, enabling natural language to query data in tabular and graphical formats, powering self-serve analytics',
      'Built an anonymized PostgreSQL demo environment, enabling realistic product demos without violating customer-data compliance',
    ],
    technologies: [
      'OpenAI API',
      'PostgreSQL',
      'Docker',
      'AWS Lightsail',
      'FastAPI',
      'TypeScript',
      'Next.js',
    ],
    companyLogo: '/images/marks/flowmatic.png',
    companyUrl: 'https://www.withflowmatic.com/',
    screenshot: '/images/flowmatic-site.png',
  },
  {
    title: 'Software Engineering Intern - Analytics',
    company: 'Zynga Inc.',
    location: 'Toronto, ON',
    period: 'May 2024 - August 2024',
    description: [
      'Developed and deployed a new feature using React, Python, Airflow and Redshift enabling game team analysts to perform experimental segmentation and visualize target metric results for product managers; successfully used for Harry Potter and Words With Friends 2',
      'Updated the architecture of an internal data service tool, resulting in a $250k annual cost reduction and improved system efficiency',
      'Deployed containerized Jenkins pipelines for automated creation of Terraform resources, data synchronization; hosted on Kubernetes',
    ],
    technologies: [
      'React',
      'Typsescript',
      'Python',
      'Airflow',
      'Splunk',
      'Redshift',
      'Jenkins',
      'Kubernetes',
      'PostgreSQL',
      'Docker',
      'Terraform',
      'AWS EC2',
      'AWS IAM',
      'AWS EKS',
    ],
    companyLogo: '/images/marks/zynga.png',
    companyUrl: 'https://www.zynga.com/',
    screenshot: '/images/zynga-site.png',
  },
  {
    title: 'Software Developer Intern',
    company: 'Repwave',
    location: 'Remote',
    period: 'November 2023 - March 2024',
    description: [
      'Worked alongside a Salesforce Senior SWE on full-stack development, integrating a Flask/Python backend and leading the React front-end development. Optimized API for processing monthly conversational data',
      'Contextualized OpenAI API to generate sales scripts for sales reps to use in their conversations with customers, ',
      'Collaboratively designed UI elements and workflows in Figma for a B2B SaaS product, focusing on user experience and functionality',
    ],
    technologies: ['React', 'Typescript', 'Docker', 'Flask', 'Python', 'OpenAI API', 'Figma'],
    companyLogo: '',
    companyUrl: 'https://www.repwave.co/',
    screenshot: '',
  },
  {
    title: 'Business Systems Analyst Intern',
    company: 'Ontario Health – Digital Services',
    location: 'Toronto, ON',
    period: 'May 2023 - August 2023',
    description: [
      'Led Scrum meetings, managed work items and ensured timely execution of tasks; increasing sprint velocity by 18% across 4 iterations',
      'Created a dynamic dashboard on Azure DevOps to monitor task completion and team productivity with the use of Burndown, Gantt Charts, and graphs, providing transparent progress reports to clients, improving client satisfaction',
    ],
    technologies: ['Azure DevOps', 'Google Project Management Cert', 'Scrum', 'Agile'],
    companyLogo: '/images/marks/ontario-health.png',
    companyUrl: 'https://www.ontariohealth.ca/',
    screenshot: '/images/ontario-health-site.png',
  },
];

/**
 * Work Experience — the timeline idea was right, the execution was soft.
 * The rail is a real hairline running the full column with a square node on it
 * (accent only for the current role). Each role is a row on the grid rather
 * than a floating card, bullets are hairline-separated, and the site
 * screenshot is a 16:10 plate with no radius.
 * Repwave genuinely has no logo and no screenshot — that stays honest here.
 */
const Experience = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  /** Each node's position down the rail, 0–1. A ref, not state: the scroll
   *  handler reads it every frame and must never see a stale closure. */
  const marksRef = useRef<number[]>([]);
  const [reached, setReached] = useState(0);
  const reduced = useReducedMotion();

  // The focus line sits at 60% viewport height — progress is 0 when the rail's
  // top crosses it and 1 when its bottom does, so the fill tracks where the
  // reader is actually looking rather than where the section merely starts.
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 0.6', 'end 0.6'],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.35 });

  useEffect(() => {
    const measure = () => {
      const rail = railRef.current;
      if (!rail) return;
      const railTop = rail.getBoundingClientRect().top;
      const height = rail.offsetHeight || 1;
      marksRef.current = dotRefs.current.map((dot) =>
        dot ? (dot.getBoundingClientRect().top - railTop) / height : 0,
      );
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useMotionValueEvent(fill, 'change', (value) => {
    let next = 0;
    marksRef.current.forEach((mark, i) => {
      if (value >= mark) next = i;
    });
    setReached((prev) => (prev === next ? prev : next));
  });

  return (
    <section id="experience" className="bg-ink-bg py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHead
          index="03"
          title="Work Experience"
          sub="My professional journey and contributions"
          right={<ArrowLink href="/resume.pdf" external>View Full Resume</ArrowLink>}
        />

        <div ref={railRef} className="relative">
          <div className="absolute bottom-0 left-[3px] top-0 hidden w-px bg-ink-hair lg:block" />
          {/* The accent travelling down the same hairline. Scaled rather than
              re-laid-out, so it animates on the compositor. Omitted entirely
              under reduced motion — a permanently full orange rail would read
              as a design decision rather than a disabled animation. */}
          {!reduced && (
            <motion.div
              aria-hidden
              style={{ scaleY: fill }}
              className="absolute bottom-0 left-[3px] top-0 hidden w-px origin-top bg-signal lg:block"
            />
          )}

          {experiences.map((job, i) => (
            <motion.div
              key={job.company}
              {...enterAt(i)}
              className="flex flex-col gap-6 border-t border-ink-hair py-6 lg:flex-row lg:gap-0"
            >
              {/* Rail */}
              <div className="relative hidden w-[82px] shrink-0 pr-5 lg:block">
                <span
                  ref={(el) => {
                    dotRefs.current[i] = el;
                  }}
                  className={`absolute left-0 top-1.5 h-[7px] w-[7px] transition-colors duration-300 ${
                    (reduced ? i === 0 : i <= reached) ? 'bg-signal' : 'bg-ink-hair2'
                  }`}
                />
                <span className="ml-5 font-mono text-[11px] text-ink-faint">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Meta */}
              <div className="lg:w-[208px] lg:shrink-0 lg:pl-6">
                <span
                  className={`font-mono text-[11px] ${i === 0 ? 'text-ink' : 'text-ink-muted'}`}
                >
                  {job.period}
                </span>
                <div className="mt-2 lg:mt-3">
                  <span className="lbl">{job.location}</span>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 lg:pr-8">
                <div className="flex items-center gap-3.5">
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${job.company} website`}
                    className="flex h-[26px] w-[26px] shrink-0 items-center justify-center border border-ink-hair bg-ink-surface transition-colors hover:border-ink-hair2"
                  >
                    {job.companyLogo ? (
                      <span className="mark relative block h-4 w-4">
                        <Image
                          src={job.companyLogo}
                          alt={`${job.company} logo`}
                          fill
                          className="object-contain"
                          sizes="16px"
                        />
                      </span>
                    ) : (
                      <span className="font-mono text-xs text-ink-muted">
                        {job.company.charAt(0)}
                      </span>
                    )}
                  </a>
                  <div>
                    <h3 className="text-[21px] font-medium leading-tight tracking-[-0.016em] text-ink">
                      {job.title}
                    </h3>
                    <span className="font-mono text-[11px] text-ink-muted">{job.company}</span>
                  </div>
                </div>

                <div className="mt-4">
                  {job.description.map((d, di) => (
                    <div
                      key={di}
                      className={`flex gap-4 border-b border-ink-hair py-2.5 ${di === 0 ? 'border-t' : ''}`}
                    >
                      <span className="shrink-0 pt-1 font-mono text-[10px] text-ink-faint">
                        {String(di + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[13.5px] leading-[1.62] text-ink-muted">{d}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {job.technologies.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>

              {/* Plate */}
              <div className="w-full shrink-0 lg:w-[264px]">
                {job.screenshot ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`plate ${job.darkShot ? 'plate-deep' : 'plate-dim'} relative block h-[166px]`}
                  >
                    <Image
                      src={job.screenshot}
                      alt={`${job.company} website screenshot`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 264px"
                    />
                  </a>
                ) : (
                  <div className="flex h-[166px] items-center justify-center border border-dashed border-ink-hair">
                    <span className="lbl">No plate</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <ArrowLink href="/resume.pdf" external>View Full Resume</ArrowLink>
        </div>
      </div>
    </section>
  );
};

export default Experience;
