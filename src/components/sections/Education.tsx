'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHead, enterAt } from '@/components/ui/sharp';

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  courses: string[];
  extracurricular: string[];
  image: string;
}

const educationData: EducationItem[] = [
  {
    school: 'Ivey Business School, Western University',
    degree: 'Honours in Business Administration (HBA)',
    period: '2022 - 2025',
    location: 'London, ON',
    gpa: 'GPA: 3.7',
    courses: [
      'Decision Making with Analytics',
      'Corporate Financial Accounting',
      'Sales',
      'Finance',
      'Leadership',
      'Communications',
    ],
    extracurricular: ['Junior VP of Ivey Analytics Club', 'Ivey Consulting Club', 'Ivey Tech Club'],
    image: '/images/ivey-building.jpg',
  },
  {
    school: 'Western University',
    degree: 'Bachelors of Science, Software Engineering',
    period: '2020 - 2025',
    location: 'London, ON',
    gpa: 'GPA: 3.9 (89% avg)',
    courses: [
      'Cloud Computing',
      'Web Technologies',
      'Databases',
      'Project Management',
      'Scripting Languages',
    ],
    extracurricular: [
      'Western Engineering Competition Director',
      'Western AI Programmer',
      'Intramural Soccer',
      'Intramural Flag Football',
    ],
    image: '/images/engineering-building.jpg',
  },
];

/**
 * Education — from two big white cards to a two-row ledger. The left rail
 * carries the metadata in mono; the school and degree lead; courses and
 * activities sit as compact mono lists; the building photo becomes a wide
 * short plate instead of half a card.
 */
const Education = () => {
  return (
    <section id="education" className="bg-ink-bg py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHead
          index="04"
          title="Education"
          sub="Academic qualifications and achievements"
        />

        <div className="h-px bg-ink-hair2" />

        {educationData.map((ed, i) => (
          <motion.div
            key={ed.school}
            {...enterAt(i)}
            className="flex flex-col gap-8 border-b border-ink-hair py-8 lg:flex-row lg:gap-10"
          >
            {/* Rail */}
            <div className="lg:w-[168px] lg:shrink-0">
              <div className="flex items-baseline gap-3.5">
                <span className="font-mono text-[11px] text-signal">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-[11.5px] text-ink">{ed.period}</span>
              </div>
              <div className="mt-3 flex items-baseline gap-3.5 lg:block">
                <span className="lbl">{ed.location}</span>
                {ed.gpa && (
                  <span className="font-mono text-[11px] text-ink-muted lg:mt-2.5 lg:block">
                    {ed.gpa}
                  </span>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="flex-1">
              <h3 className="text-[22px] font-medium leading-tight tracking-[-0.022em] text-ink sm:text-[30px]">
                {ed.school}
              </h3>
              <p className="mt-2 text-[15px] text-ink-muted">{ed.degree}</p>

              <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:gap-14">
                <div className="flex-1">
                  <span className="lbl">Relevant Courses</span>
                  <div className="mt-3">
                    {ed.courses.map((c) => (
                      <div
                        key={c}
                        className="border-b border-ink-hair py-1.5 font-mono text-[11.5px] text-ink-muted"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <span className="lbl">Extracurricular</span>
                  <div className="mt-3">
                    {ed.extracurricular.map((c) => (
                      <div
                        key={c}
                        className="border-b border-ink-hair py-1.5 font-mono text-[11.5px] text-ink-muted"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Plate */}
            <div className="plate relative h-[200px] w-full shrink-0 lg:h-[214px] lg:w-[340px]">
              <Image
                src={ed.image}
                alt={`${ed.school} building`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 340px"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
