'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Rule, enter } from '@/components/ui/sharp';

const channels = [
  { label: 'Email', value: 'jmorales.hba2025@ivey.ca', href: 'mailto:jmorales.hba2025@ivey.ca' },
  { label: 'Location', value: 'Toronto, ON, Canada' },
  { label: 'Phone', value: '(519) 817-9957', href: 'tel:+15198179957' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/jamesmoraless' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/james-morales-470a161b2/' },
  { label: 'X', href: 'https://x.com/James_Moraless' },
  { label: 'Instagram', href: 'https://www.instagram.com/jamesmoraless/' },
];

/**
 * Get in Touch — the form is where soft rounded boxes hurt most.
 * Inputs become underline-only fields with mono labels above and an accent
 * rule on focus. Channels become hairline rows; socials get their names next
 * to the links so the row is readable instead of four unlabelled icons.
 */
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="bg-ink-bg pb-24 pt-14 lg:pb-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <Rule strong />

        <div className="flex flex-col gap-14 pt-11 lg:flex-row lg:gap-[90px]">
          {/* Left */}
          <motion.div {...enter} className="lg:w-[640px] lg:shrink-0">
            <div className="flex items-start gap-5 sm:gap-6">
              <span className="pt-6 font-mono text-[11px] tracking-[0.1em] text-signal">06</span>
              <h2 className="d2 m-0 text-ink">Get in Touch</h2>
            </div>
            <p className="mt-5 text-[21px] leading-[1.55] text-ink-muted sm:ml-[37px]">
              Let&apos;s talk!
            </p>

            <div className="h-12" />
            <span className="lbl text-ink-muted">Contact Information</span>
            <div className="mt-3.5 h-px bg-ink-hair2" />
            {channels.map((c) => (
              <div
                key={c.label}
                className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-hair py-4"
              >
                <span className="lbl">{c.label}</span>
                {c.href ? (
                  <a
                    href={c.href}
                    className="font-mono text-[13px] text-ink transition-colors hover:text-signal"
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="font-mono text-[13px] text-ink">{c.value}</span>
                )}
              </div>
            ))}

            <div className="h-10" />
            <span className="lbl text-ink-muted">Connect</span>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[2px] border border-ink-hair px-3.5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-muted transition-colors hover:border-ink-hair2 hover:text-ink"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — the form */}
          <motion.div {...enter} className="flex-1 pt-1.5">
            <form onSubmit={handleSubmit}>
              <div className="mb-7">
                <label htmlFor="name" className="lbl">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="field mt-2.5"
                />
              </div>

              <div className="mb-7">
                <label htmlFor="email" className="lbl">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="field mt-2.5"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="lbl">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="field mt-2.5 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="h-[50px] w-full rounded-[2px] bg-ink font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-bg transition-colors hover:bg-ink-muted disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {status === 'success' && (
              <div className="mt-5 flex items-center gap-2.5">
                <span className="h-[5px] w-[5px] bg-signal" />
                <span className="font-mono text-[11.5px] text-ink-muted">
                  Thank you! Your message has been sent.
                </span>
              </div>
            )}
            {status === 'error' && (
              <div className="mt-5 flex items-center gap-2.5">
                <span className="h-[5px] w-[5px] bg-ink-faint" />
                <span className="font-mono text-[11.5px] text-ink-faint">
                  Sorry, something went wrong. Please try again later.
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
