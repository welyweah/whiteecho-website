
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-soft">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <img 
            src="/lovable-uploads/82b5d2d5-0952-4067-aaac-ab635cd345a7.png" 
            alt="Company Logo" 
            className="w-[400px] h-[400px] transform hover:scale-105 transition-all duration-300"
          />
        </motion.div>

        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#398ae6] to-[#17d9d0] mb-6">
            About Us
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We're on a mission to revolutionize the way businesses harness the power of AI technology.
            Our commitment to innovation and excellence drives us to create solutions that transform industries.
          </p>
        </motion.div>

        {/* Headquarters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-center mb-8">Headquartered in Zurich, Switzerland</h2>
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Zurich Headquarters" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <img 
                    src={`/lovable-uploads/team-member-${index}.jpg`}
                    alt={`Team Member ${index}`}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Team Member {index}</h3>
                <p className="text-gray-600">
                  Passionate about creating innovative solutions that make a difference.
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Get Started Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in shaping the future of AI-powered business solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#398ae6] to-[#17d9d0] text-white rounded-full text-lg font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/25"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
