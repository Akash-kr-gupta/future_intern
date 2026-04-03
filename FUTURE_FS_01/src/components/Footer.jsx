import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
          Akash Kumar Gupta
        </h2>

        <div className="flex space-x-6 mb-8">
          <a href="https://github.com/Akash-kr-gupta" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/akash-kumar-gupta-6a284b253/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="mailto:ak01gupta8235@gmail.com" className="text-gray-500 hover:text-red-500 transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <p className="text-center text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1.5 text-sm">
          Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Akash
        </p>
        <p className="text-center text-gray-400 dark:text-gray-500 text-xs mt-2">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
