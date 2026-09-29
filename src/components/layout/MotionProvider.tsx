'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * `reducedMotion="user"` makes every framer-motion animation on the site drop
 * its transform channel when the visitor asks for reduced motion, while still
 * fading in. The site had no reduced-motion handling before.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
