
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Globe } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "AI-Powered Insights",
    description: "Leverage advanced artificial intelligence to gain deeper understanding of your data."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized infrastructure."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security ensuring your data is always protected."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Scale",
    description: "Scale your operations globally with our distributed network."
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-accent-gradient"
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Built with cutting-edge technology to help you achieve more
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
