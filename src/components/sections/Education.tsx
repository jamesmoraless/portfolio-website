'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
    school: "Ivey Business School, Western University",
    degree: "Bachelor of Arts, Honours Business Administration (HBA)",
    period: "2022 - 2025",
    location: "London, ON",
    gpa: "GPA: 3.7",
    courses: [
      "Decision Making with Analytics",
      "Corporate Financial Accounting",
      "Sales",
      "Finance",
      "Leadership",
      "Communications"
    ],
    extracurricular: [
      "Junior VP of Ivey Analytics Club",
      "Ivey Consulting Club",
      "Ivey Tech Club"
    ],
    image: "/images/ivey-building.jpg"
  },
  {
    school: "Western University",
    degree: "Bachelor of Engineering, Software Engineering",
    period: "2020 - 2025",
    location: "London, ON",
    gpa: "GPA: 3.9 (89% avg)",
    courses: [
      "Cloud Computing",
      "Web Technologies",
      "Databases",
      "Project Management",
      "Scripting Languages"
    ],
    extracurricular: [
      "Western Engineering Competition Director",
      "Western AI Programmer",
      "Intramural Soccer",
      "Intramural Flag Football"
    ],
    image: "/images/engineering-building.jpg"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-700">Academic qualifications and achievements</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">{education.school}</h3>
                      <p className="text-base text-gray-700 mt-1">{education.degree}</p>
                      {education.gpa && (
                        <p className="text-xs text-emerald-600 font-medium mt-1">{education.gpa}</p>
                      )}
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-sm text-gray-600">{education.period}</p>
                      <p className="text-sm text-gray-600">{education.location}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Relevant Courses</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {education.courses.map((course, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 bg-emerald-50 text-gray-700 text-xs rounded-full border border-emerald-100"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Extracurricular</h4>
                      <ul className="list-disc list-inside space-y-0.5">
                        {education.extracurricular.map((activity, i) => (
                          <li key={i} className="text-xs text-gray-700">{activity}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative h-72 md:h-full">
                  <Image
                    src={education.image}
                    alt={`${education.school} building`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 