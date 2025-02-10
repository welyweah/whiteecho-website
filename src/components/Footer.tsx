
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#1A1F2C] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/lovable-uploads/c86e61f7-3949-4a8c-b4f9-c8184bfd35c0.png" 
              alt="Logo" 
              className="h-10 brightness-0 invert hover:opacity-90 transition-opacity"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-6"
          >
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#D6BCFA] transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <p className="text-neutral-400 text-sm">
              © 2024 All rights reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
