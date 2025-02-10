
import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Info } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-soft">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#398ae6] to-[#17d9d0]">
            About Us
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We're on a mission to revolutionize the way businesses harness the power of AI technology.
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-accent/10"
          >
            <div className="h-12 w-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Team</h3>
            <p className="text-gray-600">
              A diverse group of experts dedicated to pushing the boundaries of what's possible with AI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-accent/10"
          >
            <div className="h-12 w-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To make advanced AI technology accessible and practical for businesses of all sizes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-accent/10"
          >
            <div className="h-12 w-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
              <Info className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To create a future where AI enhances human potential rather than replacing it.
            </p>
          </motion.div>
        </div>

        {/* Company Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mb-16"
        >
          <div className="p-8 bg-accent/5 rounded-full">
            <img 
              src="/lovable-uploads/82b5d2d5-0952-4067-aaac-ab635cd345a7.png" 
              alt="Company Logo" 
              className="w-[400px] h-[400px] transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
