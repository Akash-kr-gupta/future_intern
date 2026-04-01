import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob dark:opacity-10 dark:bg-purple-900"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000 dark:opacity-10 dark:bg-blue-900"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000 dark:opacity-10 dark:bg-pink-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-sm font-medium text-gray-800 dark:text-gray-200">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for Entry-Level Roles
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                Akash Kumar Gupta
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto">
              Computer Science Undergraduate & Full-Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400"
          >
            <MapPin className="w-5 h-5" />
            <span>Ranchi, Jharkhand, India</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about building production-level web applications, AI/ML tools, and secure systems. Proficient in modern full-stack technologies like React, Flask, and MongoDB, with hands-on experience in NLP and RAG pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <a 
              href="#projects"
              className="px-8 py-3.5 w-full sm:w-auto text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              View Projects
            </a>
            <a 
              href="mailto:ak01gupta8235@gmail.com"
              className="px-8 py-3.5 w-full sm:w-auto text-base font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-6 pt-10 border-t border-gray-200 dark:border-gray-800 mt-10"
          >
            <a href="https://github.com/Akash-kr-gupta" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-500 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800/50 rounded-full transition-colors active:scale-95">
              <FaGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/akash-kumar-gupta-6a284b253/" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 bg-gray-100 dark:bg-gray-800/50 rounded-full transition-colors active:scale-95">
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:ak01gupta8235@gmail.com" className="p-3 text-gray-500 hover:text-red-500 bg-gray-100 dark:bg-gray-800/50 rounded-full transition-colors active:scale-95">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
