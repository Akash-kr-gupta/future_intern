import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "HelpHub",
      subtitle: "Real-Time Emergency Assistance Platform",
      year: "2025",
      description: "Full-stack emergency response platform enabling users to raise urgent requests. Features include role-based dashboards, GPS-based discovery, and real-time push notifications.",
      bullets: [
        "Flask REST APIs with JWT authentication",
        "Firebase Cloud Messaging & Twilio SMS alerts",
        "MongoDB Atlas GeoJSON queries for nearby discovery",
        "Cloudinary integration for secure media storage",
        "Admin dashboard using Recharts and Leaflet heatmaps"
      ],
      tags: ["React.js", "Flask", "MongoDB Atlas", "Firebase", "Twilio", "Cloudinary", "Leaflet.js", "Tailwind CSS"],
      links: {
        github: "https://github.com/Akash-kr-gupta"
      }
    },
    {
      title: "SafeCrypt",
      subtitle: "AES and RSA Encryption Suite",
      year: "2025",
      description: "Python GUI-based encryption suite using AES and RSA algorithms to securely encrypt and decrypt text and all file types including images, documents, audio, and video.",
      bullets: [
        "RSA key pair generation and secure PEM key export",
        "Digital signatures for data authenticity",
        "SHA-256/SHA-512 file integrity verification",
        "Password strength indicators",
        "Modular architecture published on GitHub with MIT License"
      ],
      tags: ["Python", "Cryptography", "Tkinter", "AES", "RSA", "SHA-256"],
      links: {
        github: "https://github.com/Akash-kr-gupta"
      }
    },
    {
      title: "Personal Finance AI Advisor",
      subtitle: "AI-powered Financial Dashboard",
      year: "2025",
      description: "AI dashboard that analyzes transaction data, categorizes expenses, tracks budgets, and delivers personalized recommendations via natural language chat.",
      bullets: [
        "LangChain and LangGraph ReAct agent with tool usage",
        "RAG pipeline using FAISS for context-aware retrieval",
        "50/30/20 budget rule enforcement with SQLite",
        "CSV ingestion for real-time budget alerts and warnings"
      ],
      tags: ["Python", "Streamlit", "LangChain", "LangGraph", "FAISS", "SQLite", "Plotly", "OpenAI API"],
      links: {
        github: "https://github.com/Akash-kr-gupta"
      }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
            >
              A selection of my recent work in web development, AI engineering, and cybersecurity.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/Akash-kr-gupta" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            View all on GitHub <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Project Header Area */}
              <div className="p-8 pb-0 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <div className="flex gap-3">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {project.subtitle}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-8 hidden md:block">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Tags Foot Area */}
              <div className="p-8 pt-6 border-t border-gray-50 dark:border-gray-800/50 mt-auto bg-gray-50 dark:bg-gray-800/20">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
