'use client';

import { motion } from 'framer-motion';
import { SectionHead, enterAt } from '@/components/ui/sharp';

/**
 * The biggest single fix on the site.
 *
 * Before: 26 full-colour brand logos on an infinite auto-scrolling marquee —
 * motion and rainbow where the reader wants something scannable.
 * Now: the same 26 items, same groupings, as four typographic columns on
 * hairlines. Nothing moves; hovering a row is the only reward.
 */
const groups: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['Python', 'TypeScript', 'Java', 'Go', 'SQL'] },
  { label: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'FastAPI', 'Django'] },
  { label: 'AI & Data', items: ['Claude', 'OpenAI', 'MCP', 'Supabase', 'PostgreSQL'] },
  {
    label: 'Cloud & Tools',
    items: ['AWS', 'GCP', 'Docker', 'GitHub Actions', 'Azure DevOps', 'Figma'],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="bg-ink-bg py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHead index="02" title="Tech Stack" />

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, gi) => (
            <motion.div key={group.label} {...enterAt(gi)}>
              <div className="flex items-baseline justify-between pb-3">
                <span className="lbl text-ink-muted">{group.label}</span>
                <span className="font-mono text-[10px] text-ink-faint">
                  {String(group.items.length).padStart(2, '0')}
                </span>
              </div>
              <div className="h-px bg-ink-hair2" />

              {group.items.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-2.5 border-b border-ink-hair border-l-2 border-l-transparent py-2.5 pr-2.5 transition-colors hover:border-l-signal hover:bg-ink-surface hover:pl-2.5"
                >
                  <span className="h-[5px] w-[5px] shrink-0 bg-ink-hair2 transition-colors group-hover:bg-signal" />
                  <span className="font-mono text-[12.5px] text-ink-muted transition-colors group-hover:text-ink">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
