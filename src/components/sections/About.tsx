'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Rule, SectionHead, enter, enterAt } from '@/components/ui/sharp';

const paragraphs = [
  "My work spans client discovery, designing real screens, and owning end-to-end delivery, alongside engineering agentic workflows and ingestion pipelines. I've built a fast, repeatable delivery process by staying hands-on through every stage: discovery, design, development, and iterating on feedback. My engineering half means I can ship it. The business half means I know why it matters.",
  'I work AI-native. LLMs and agents are part of how I design, build, and deliver.',
];

const galleryImages = [
  { src: '/images/ringed.jpg', alt: 'Iron Ring Ceremony with fellow engineers', caption: 'Iron rings secured 💍' },
  { src: '/images/coding.jpg', alt: 'Coding session', caption: 'Making shareholders happy 💻' },
  { src: '/images/surfing.jpg', alt: 'Surfing in El Salvador with brother', caption: 'Surfing with my little bro in El Salvador 🏄‍♂️' },
  { src: '/images/golf.PNG', alt: 'Golfing at the local course', caption: 'Working on fixing the swing ⛳' },
  { src: '/images/running.jpg', alt: 'Training for half marathon', caption: 'Marathon training in progress 🏃‍♂️' },
  { src: '/images/footy.JPG', alt: 'Intramural soccer team', caption: 'Elite group of soccer players ⚽' },
  { src: '/images/construction.jpg', alt: 'Construction with friends', caption: 'Getting help from my now roommates back in high school 🏗️' },
];

const highlights = [
  'Technical PM owning delivery across $700K+ ARR at a YC-backed startup',
  'Built an ops platform used daily by 50+ engineers across 30+ clients enabling org wide visibility',
  'Solo-built a lending platform that cut 2 days of analysis to under 5 minutes through complex ingestion of thousands of data points',
  'Own end-to-end delivery from discovery and design to launch',
];

/**
 * About — three changes from the old section.
 *  1. Portrait goes square and small; the writing leads, not a circle avatar.
 *  2. Key Highlights becomes a numbered spec list on hairlines, not a card.
 *  3. "Life in Action" becomes a filmstrip with a mono 03/07 index instead of
 *     a rounded carousel with dots — same seven photos, same captions.
 */
const About = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % galleryImages.length);
  const previous = () => setActive((p) => (p - 1 + galleryImages.length) % galleryImages.length);

  return (
    <section id="about" className="bg-ink-bg py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHead index="02" title="About Me" />

        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Writing */}
          <motion.div {...enter} className="lg:w-[660px] lg:shrink-0">
            <div className="mb-8 flex items-start gap-5">
              <div className="plate relative h-[140px] w-[123px] shrink-0">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 30%' }}
                  sizes="123px"
                  priority
                />
              </div>
              <div className="pt-1.5">
                <span className="lbl">Toronto, ON</span>
                <p className="mt-3 max-w-[520px] text-[21px] leading-[1.55] tracking-[-0.011em] text-ink">
                  I&apos;m a Technical PM with a dual background in Software Engineering and
                  Business (Ivey HBA), taking products from client discovery to production code.
                </p>
              </div>
            </div>

            <Rule />

            <div className="pt-7">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`max-w-[620px] text-[15.5px] leading-[1.72] text-ink-muted ${i > 0 ? 'mt-5' : ''}`}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="h-10" />
            <span className="lbl text-ink-muted">Key Highlights</span>
            <div className="mt-4 h-px bg-ink-hair2" />
            {highlights.map((h, i) => (
              <motion.div
                key={h}
                {...enterAt(i)}
                className="flex gap-5 border-b border-ink-hair py-4"
              >
                <span className="shrink-0 pt-[3px] font-mono text-[11px] text-signal">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[14.5px] leading-relaxed text-ink">{h}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Filmstrip */}
          <motion.div {...enter} className="flex-1">
            <div className="flex items-baseline justify-between pb-3.5">
              <span className="lbl text-ink-muted">Life in Action</span>
              <span className="font-mono text-[11px] text-ink-faint">
                <span className="text-signal">{String(active + 1).padStart(2, '0')}</span>
                {' / '}
                {String(galleryImages.length).padStart(2, '0')}
              </span>
            </div>

            <div className="plate relative h-[320px] sm:h-[420px]">
              <Image
                key={active}
                src={galleryImages[active].src}
                alt={galleryImages[active].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={85}
                style={{
                  objectPosition: galleryImages[active].src.includes('construction.jpg')
                    ? 'center top'
                    : 'center center',
                }}
              />
            </div>

            <div className="flex items-start justify-between pt-3.5">
              <span className="text-[13.5px] text-ink">{galleryImages[active].caption}</span>
              <div className="flex shrink-0 gap-3 pl-4">
                <button
                  onClick={previous}
                  aria-label="Previous photo"
                  className="font-mono text-xs text-ink-faint transition-colors hover:text-ink"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  aria-label="Next photo"
                  className="font-mono text-xs text-ink transition-colors hover:text-signal"
                >
                  →
                </button>
              </div>
            </div>

            <div className="mt-5 flex gap-2 overflow-x-auto no-scrollbar">
              {galleryImages.map((g, i) => (
                <button
                  key={g.src}
                  onClick={() => setActive(i)}
                  aria-label={`Show photo ${i + 1}`}
                  className={`plate relative h-14 w-[74px] shrink-0 transition-opacity ${
                    i === active ? 'border-signal opacity-100' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="74px" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
