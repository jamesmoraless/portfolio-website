'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Shared primitives for the Sharp design system.
 * See tempo/designs/canvases/sharp-design for the reference boards.
 */

/** Section scroll-in: the site's one entrance, used everywhere. */
export const enter = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
} as const;

/**
 * Staggered variant for list items. 0.07s per item rather than the 0.2s the
 * old site used — across five experience rows that took a full second to
 * settle, which read as slow rather than deliberate.
 */
export const enterAt = (index: number, duration = 0.5) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration, delay: index * 0.07 },
});

export function Rule({ strong = false }: { strong?: boolean }) {
  return <div className={strong ? 'h-px bg-ink-hair2' : 'h-px bg-ink-hair'} />;
}

/** Numbered section header: mono index in accent, title in display weight. */
export function SectionHead({
  index,
  title,
  sub,
  right,
}: {
  index: string;
  title: string;
  sub?: string;
  right?: ReactNode;
}) {
  return (
    <motion.div {...enter}>
      <Rule />
      <div className="flex items-start justify-between pt-6 pb-8">
        <div className="flex items-start gap-5 sm:gap-7">
          <span className="font-mono text-[11px] tracking-[0.1em] text-signal pt-3">{index}</span>
          <div>
            <h2 className="d3 text-ink m-0">{title}</h2>
            {sub && <p className="mt-2.5 text-[13px] leading-relaxed text-ink-faint max-w-lg">{sub}</p>}
          </div>
        </div>
        {right && <div className="hidden md:block shrink-0 pt-3">{right}</div>}
      </div>
    </motion.div>
  );
}

/** Parts-list tag. Hairline rect, mono caps — deliberately not a pill. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-muted border border-ink-hair rounded-[2px] px-2 py-[5px] whitespace-nowrap">
      {children}
    </span>
  );
}

export function Btn({
  href,
  variant = 'solid',
  children,
}: {
  href: string;
  variant?: 'solid' | 'ghost';
  children: ReactNode;
}) {
  const base =
    'inline-flex items-center justify-center h-[46px] px-6 rounded-[2px] font-mono text-[11px] tracking-[0.12em] uppercase font-medium transition-colors';
  return (
    <a
      href={href}
      className={
        variant === 'solid'
          ? `${base} bg-ink text-ink-bg border border-ink hover:bg-ink-muted hover:border-ink-muted`
          : `${base} bg-transparent text-ink border border-ink-hair2 hover:border-ink`
      }
    >
      {children}
    </a>
  );
}

/**
 * Resume download. Deliberately a third tier below Btn: no border box, so it
 * sits beside the two CTAs without competing with them — four equal buttons
 * would flatten the hierarchy and leave nothing obviously primary. Matches the
 * Btn row height so it shares their baseline.
 *
 * `download` names the saved file, which is why the hrefs can stay short.
 */
export function DownloadLink({
  href,
  filename,
  children,
}: {
  href: string;
  filename: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      download={filename}
      className="group inline-flex h-[46px] items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-ink"
    >
      {children}
      <span className="text-signal transition-transform group-hover:translate-y-0.5">↓</span>
    </a>
  );
}

/** Mono link with a trailing rule — replaces the old underlined CTA links. */
export function ArrowLink({
  href,
  external = false,
  children,
}: {
  href: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.12em] uppercase text-ink border-b border-ink-hair2 pb-1.5 transition-colors hover:border-ink"
    >
      {children}
      <span className="text-signal transition-transform group-hover:translate-x-0.5">
        {external ? '↗' : '→'}
      </span>
    </a>
  );
}
