'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a software engineer and business professional in my final year of a unique dual degree program at Western University, 
                combining Software Engineering with Business Administration at Ivey Business School. This intersection of technical expertise 
                and business acumen reflects my holistic approach to problem-solving and development.
              </p>
              <p>
                My journey began with a foundation in software engineering, where I developed strong technical skills in full-stack development, 
                data engineering, and cloud technologies. This technical foundation was complemented by my business education at Ivey, where I 
                honed my leadership, communication, and strategic thinking skills while maintaining a 3.9 GPA.
              </p>
              <p>
                What drives me is the satisfaction of seeing a project through from concept to completion. This passion was instilled early on, 
                working alongside my father in concrete construction. Those experiences taught me the value of craftsmanship and the joy of 
                delivering solutions that make a real difference in people's lives.
              </p>
              <p>
                Today, I apply this same philosophy to software development. Whether it's building data pipelines at Flowmatic, developing 
                analytics tools at Zynga, or creating sales software at Repwave, I approach each project as an opportunity to blend technical 
                excellence with practical business value.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 p-1 bg-gray-900 rounded-full mr-3 mt-1.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600">Dual degree in Software Engineering and Business Administration (HBA)</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 p-1 bg-gray-900 rounded-full mr-3 mt-1.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600">Experience in data engineering, full-stack development, and analytics</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 p-1 bg-gray-900 rounded-full mr-3 mt-1.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600">Strong foundation in both technical development and business strategy</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 p-1 bg-gray-900 rounded-full mr-3 mt-1.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600">Proven track record in startups and game development companies</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 