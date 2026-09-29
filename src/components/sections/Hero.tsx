'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Btn } from '@/components/ui/sharp';

/**
 * Hero A — "Engineered".
 * Left-weighted and asymmetric on a 12-column hairline grid you can actually
 * see. The name is a two-line stack so it holds the page the way the old
 * centred version never did. Accent appears three times total.
 */
const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center bg-ink-bg pt-16">
      <div className="grid12" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col items-start gap-12 py-16 lg:flex-row lg:items-start lg:gap-16 lg:py-24">
          {/* Left — the statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <span className="lbl">Technical Product Manager and Full Stack Engineer</span>

            <h1 className="d1 mt-6 text-ink">
              James
              <br />
              Morales
            </h1>

            <div className="my-8 h-px w-full max-w-[560px] bg-ink-hair2" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="max-w-[468px] text-[15.5px] leading-[1.72] text-ink-muted"
            >
              Designing and building software that solves real problems, blending engineering
              expertise with a sharp focus on product vision and delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-3.5"
            >
              <Btn href="#projects">View My Work</Btn>
              <Btn href="#contact" variant="ghost">
                Contact Me
              </Btn>
            </motion.div>
          </motion.div>

          {/* Right — the plate */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-[396px] shrink-0"
          >
            <div className="mb-3 flex items-baseline justify-between">
              <span className="lbl">Fig. 01</span>
              <span className="font-mono text-[10px] tracking-[0.16em] text-signal">●</span>
            </div>
            <div className="plate relative h-[420px] sm:h-[540px]">
              <Image
                src="/images/ghibli-made.png"
                alt="James Morales Studio Ghibli Form"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 396px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Foot — scroll cue sits on the baseline rule, not floating mid-air */}
      <div className="absolute inset-x-0 bottom-10 hidden px-6 sm:px-10 lg:block lg:px-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-4 h-px w-full bg-ink-hair" />
          <div className="flex items-center justify-between">
            <a href="#tech-stack" className="group flex items-center gap-3">
              <span className="h-px w-7 bg-signal" />
              <span className="lbl transition-colors group-hover:text-ink">Tech Stack</span>
            </a>
            <span className="font-mono text-[11px] tracking-[0.14em] text-ink-faint">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
