
import React from 'react';
import { motion } from 'framer-motion';
import NetworkWeb from './NetworkWeb';

const Hero = () => {
  return (
    <section className="relative pt-40 lg:pt-48 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Transform Your Business with AI
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Experience the next generation of artificial intelligence, designed to transform your business and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#398ae6] to-[#17d9d0] text-white rounded-full font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/25">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white text-white border border-[#17d9d0]/20 rounded-full font-medium hover:bg-gray-50 transition-all duration-300">
                <span className="bg-gradient-to-r from-[#398ae6] to-[#17d9d0] bg-clip-text text-transparent">
                  Watch Demo
                </span>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <NetworkWeb />
            <img 
              src="/lovable-uploads/abb4d321-de2c-40c2-94db-a6203d5e050a.png"
              alt="Diamond Icon"
              className="w-full max-w-[600px] h-auto relative z-10 transform hover:scale-105 transition-all duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
