import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cloud, Layout, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Generative AI Professional",
      issuer: "Oracle University",
      date: "Oct 2025",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Java (Basic) Certification",
      issuer: "HackerRank",
      date: "2024",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2023",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Getting Started with AWS Services",
      issuer: "AWS",
      date: "2024",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Responsible Generative AI Solution",
      issuer: "Microsoft Azure AI Foundry",
      date: "2024",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "UX Design Professional Certificate",
      issuer: "Coursera (Google)",
      date: "2023",
      icon: <Layout className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Licenses & Certifications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Continuous learning and professional validations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300"
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 p-3 rounded-xl">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded inline-block mb-1">
                  {cert.issuer}
                </p>
                <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                  Issued {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
