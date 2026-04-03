import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Film } from 'lucide-react';

const Activities = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Beyond the Code
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8"
            >
              I believe in maintaining a creative outlet. Exploring visual arts helps me build a better sense of design and user experience.
            </motion.p>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-4 rounded-xl h-fit">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Photography & Videography
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Skilled in photo/video editing and creative direction. I love capturing moments and telling stories through visual mediums.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:border-purple-200 dark:hover:border-purple-900/50 transition-colors"
              >
                <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 p-4 rounded-xl h-fit">
                  <Film className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Short Film Production
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Worked as a Cinematographer, handling filming and team coordination. It taught me teamwork, leadership, and attention to detail.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:w-1/2 w-full grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="h-48 md:h-64 bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium">Urban Exploration</span>
                  </div>
              </div>
              <div className="h-32 md:h-48 bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium">Team Coordination</span>
                  </div>
              </div>
            </div>
            <div className="space-y-4 pt-8 md:pt-12">
              <div className="h-32 md:h-48 bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium">Cinematography</span>
                  </div>
              </div>
              <div className="h-48 md:h-64 bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium">Creative Direction</span>
                  </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Activities;
