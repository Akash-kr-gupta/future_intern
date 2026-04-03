import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      institution: "C.V. Raman Global University",
      location: "Bhubaneswar",
      degree: "B.Tech – Computer Science & IT",
      period: "2023 – 2027 (Expected)",
      score: "CGPA: 8.13"
    },
    {
      institution: "Oxford Public School",
      location: "Ranchi",
      degree: "Class 12 – CBSE",
      period: "2022",
      score: "Percentage: 73.6%"
    },
    {
      institution: "Oxford Public School",
      location: "Ranchi",
      degree: "Class 10 – CBSE",
      period: "2020",
      score: "Percentage: 83.3%"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Education & Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            My academic timeline and qualifications.
          </motion.p>
        </div>

        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-0">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-10 ml-8 md:ml-10 relative"
            >
              <span className="absolute flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full -left-14 md:-left-16 ring-8 ring-white dark:ring-gray-900 text-blue-600 dark:text-blue-400">
                <GraduationCap className="w-6 h-6" />
              </span>
              
              <div className="bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700/50 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="flex items-center text-xl font-bold text-gray-900 dark:text-gray-100">
                  {edu.institution}
                </h3>
                <h4 className="text-lg text-blue-600 dark:text-blue-400 font-medium mt-1 mb-4">
                  {edu.degree}
                </h4>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-4 h-4" /> {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1 rounded-full w-fit">
                    <MapPin className="w-4 h-4" /> {edu.location}
                  </span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Result: <span className="text-gray-900 dark:text-white font-bold">{edu.score}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
