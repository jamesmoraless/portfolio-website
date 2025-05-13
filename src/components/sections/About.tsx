'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      src: '/images/ringed.jpg',
      alt: 'Iron Ring Ceremony with fellow engineers',
      caption: 'Iron rings secured 💍'
    },
    {
      src: '/images/coding.jpg',
      alt: 'Coding session',
      caption: 'Making shareholders happy 💻'
    },
    {
      src: '/images/surfing.jpg',
      alt: 'Surfing in El Salvador with brother',
      caption: 'Surfing with my little bro in El Salvador 🏄‍♂️'
    },
    {
      src: '/images/golf.PNG',
      alt: 'Golfing at the local course',
      caption: 'Working on fixing the swing ⛳'
    },
    {
      src: '/images/running.jpg',
      alt: 'Training for half marathon',
      caption: 'Marathon training in progress 🏃‍♂️'
    },
    {
      src: '/images/footy.JPG',
      alt: 'Intramural soccer team',
      caption: 'Elite group of soccer players ⚽'
    },
    {
      src: '/images/construction.jpg',
      alt: 'Construction with friends',
      caption: 'Getting help from my now roommates back in high school 🏗️'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="about" className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-6 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-42 h-42 rounded-full overflow-hidden ring-4 ring-indigo-200"
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  style={{ objectPosition: 'center 30%' }}
                />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p className="text-gray-600 mb-6">
                I&apos;m a software engineer and business professional who recently graduated from Western University with a dual degree in Software Engineering and Business Administration (HBA). I&apos;m focused on building robust software that creates true user value.
              </p>
              <p>
                Throughout my academic journey, I built a strong foundation in software engineering, focusing 
                on full-stack development, data engineering, and cloud technologies. This technical foundation was 
                complemented by my business education at Ivey, where I honed my leadership, communication, and strategic 
                thinking skills while maintaining a 3.9 GPA.
              </p>
              <p>
                What drives me is the satisfaction of seeing a project through from concept to completion. This passion 
                was instilled early on, working alongside my father in concrete construction. Those experiences taught 
                me the value of craftsmanship and the joy of delivering solutions that make a real difference in 
                people&apos;s lives.
              </p>
              <p>
                Today, I apply this same philosophy to software development. Whether it&apos;s building data pipelines at 
                Flowmatic, developing analytics tools at Zynga, or creating sales software at Repwave, I approach each 
                project as an opportunity to blend technical knowledge with practical business value.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-indigo-200 p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">Life in Action</h3>
              <div className="relative">
                <div className="relative w-full h-[320px] rounded-lg overflow-hidden bg-indigo-100">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={galleryImages[currentImageIndex].src}
                      alt={galleryImages[currentImageIndex].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={currentImageIndex === 0}
                      quality={85}
                      style={{
                        objectPosition: galleryImages[currentImageIndex].src.includes('construction.jpg') ? 'center top' : 'center center'
                      }}
                    />
                  </motion.div>
                </div>
                
                <button
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
                >
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
                >
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="mt-3 text-center">
                  <p className="text-gray-900 font-medium text-sm">{galleryImages[currentImageIndex].caption}</p>
                  <div className="flex justify-center space-x-2 mt-2">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? 'bg-gray-900 w-3' : 'bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-indigo-200 p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">Key Highlights</h3>
              <ul className="space-y-2.5">
                <li className="flex items-start">
                  <span className="flex-shrink-0 p-0.5 bg-gray-900 rounded-full mr-2 mt-1.5">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-900 text-sm">Graduated with dual degree in Software Engineering and Business Administration (HBA)</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 p-0.5 bg-gray-900 rounded-full mr-2 mt-1.5">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-900 text-sm">Experience in data engineering, full-stack development, and analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 p-0.5 bg-gray-900 rounded-full mr-2 mt-1.5">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-900 text-sm">Strong foundation in both technical development and business strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 p-0.5 bg-gray-900 rounded-full mr-2 mt-1.5">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-900 text-sm">Proven track record in fast paced startups and analytics teams</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 