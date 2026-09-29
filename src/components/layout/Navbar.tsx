'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/#about' },
  { label: 'Education', path: '/#education' },
  { label: 'Experience', path: '/#experience' },
  { label: 'Projects', path: '/#projects' },
  { label: 'Contact', path: '/#contact' },
];

/**
 * 64px bar on one hairline instead of a drop shadow. The `~/James Morales`
 * identity stays — it is the one genuinely distinctive thing in the old nav —
 * but the typewriter's own cursor is turned off in favour of the accent caret.
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  // Underline whichever section is currently under the bar.
  useEffect(() => {
    const ids = ['about', 'education', 'experience', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const match = menuItems.find((i) => i.path === `/#${visible.target.id}`);
        setActive(match ? match.label : 'Home');
      },
      { rootMargin: '-64px 0px -55% 0px', threshold: [0.05, 0.3] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const onTop = () => window.scrollY < 120 && setActive('Home');
    window.addEventListener('scroll', onTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onTop);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-ink-hair bg-ink-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-20">
        <Link href="/" className="flex items-center" aria-label="James Morales — home">
          <span className="font-mono text-[15px] text-ink-faint">~/</span>
          <span className="text-[15px] font-medium tracking-[-0.012em] text-ink">
            <Typewriter words={['James Morales']} loop={1} cursor={false} typeSpeed={60} />
          </span>
          <span className="caret" aria-hidden />
        </Link>

        <div className="hidden md:flex md:gap-8">
          {menuItems.map((item) => {
            const on = item.label === active;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`border-b pb-[3px] font-mono text-[11px] uppercase tracking-[0.13em] transition-colors ${
                  on ? 'border-signal text-ink' : 'border-transparent text-ink-faint hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-ink md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open main menu</span>
          {!isMenuOpen ? (
            <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          ) : (
            <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-ink-hair bg-ink-bg md:hidden">
          {menuItems.map((item, i) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-baseline gap-3.5 border-b border-ink-hair px-6 py-3 last:border-b-0"
            >
              <span className="font-mono text-[10px] text-signal">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.13em] text-ink">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
