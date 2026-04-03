import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Cloud, Terminal, Workflow, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Java", "Python", "C"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS", "React.js", "Tailwind CSS", "Streamlit", "PHP", "Bootstrap"]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="w-6 h-6" />,
      skills: ["Flask", "REST APIs", "JWT Authentication", "LangChain", "LangGraph"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB Atlas", "MySQL", "SQLite", "FAISS"]
    },
    {
      title: "Cloud & Services",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Firebase Cloud Messaging", "Cloudinary", "Twilio", "Oracle Cloud", "AWS", "Azure"]
    },
    {
      title: "Tools & Platforms",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VS Code", "Linux", "Eclipse", "Android Studio", "Plotly", "Recharts", "Leaflet.js"]
    },
    {
      title: "Concepts",
      icon: <Workflow className="w-6 h-6" />,
      skills: ["OOP", "Data Structures", "Full-Stack Development", "RAG Pipelines", "Cryptography", "NLP"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Technologies, libraries, and tools I use to build robust and scalable applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-white dark:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
