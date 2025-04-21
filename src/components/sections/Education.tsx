'use client';

import { motion } from 'framer-motion';

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  courses: string[];
  scholarships: string[];
  extracurricular: string[];
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
    scholarships: [
      "Edward Sullivan Award in Business $4,000"
    ],
    extracurricular: [
      "Junior VP of Ivey Analytics Club",
      "Ivey Consulting Club",
      "Ivey Tech Club"
    ]
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
    scholarships: [
      "Heaslip $15,000",
      "Western Distinction $2,500"
    ],
    extracurricular: [
      "Western Engineering Competition Director",
      "Western AI Programmer",
      "Intramural Soccer",
      "Intramural Flag Football"
    ]
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
              className="bg-white rounded-xl shadow-sm p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{education.school}</h3>
                  <p className="text-lg text-gray-700 mt-1">{education.degree}</p>
                  {education.gpa && (
                    <p className="text-sm text-emerald-600 font-medium mt-1">{education.gpa}</p>
                  )}
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-600">{education.period}</p>
                  <p className="text-gray-600">{education.location}</p>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Relevant Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.courses.map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-50 text-gray-700 text-sm rounded-full border border-emerald-100"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Scholarships</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {education.scholarships.map((scholarship, i) => (
                      <li key={i} className="text-sm text-gray-700">{scholarship}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Extracurricular</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {education.extracurricular.map((activity, i) => (
                      <li key={i} className="text-sm text-gray-700">{activity}</li>
                    ))}
                  </ul>
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