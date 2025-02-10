
import React from 'react';
import { motion } from 'framer-motion';
import FloatingShapes from '../components/FloatingShapes';
import FeatureCard from '../components/FeatureCard';
import Newsletter from '../components/Newsletter';
import { Sparkles, Zap, Shield, Globe } from 'lucide-react';

const Index = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-soft relative overflow-hidden">
      <FloatingShapes />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <img 
                src="/lovable-uploads/c86e61f7-3949-4a8c-b4f9-c8184bfd35c0.png" 
                alt="Uthereal Logo" 
                className="h-16 md:h-20 mb-8"
              />
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Transform Your Business with AI
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Experience the next generation of artificial intelligence, designed to transform your business and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors">
                  Get Started
                </button>
                <button className="px-8 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/5 transition-colors">
                  Watch Demo
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <img 
                src="/lovable-uploads/abb4d321-de2c-40c2-94db-a6203d5e050a.png"
                alt="Diamond Icon"
                className="w-full max-w-[400px] h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with cutting-edge technology to help you achieve more
            </p>
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

      {/* Newsletter Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-accent/10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <Newsletter />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
