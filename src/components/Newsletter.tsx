
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-accent/5 rounded-3xl filter blur-2xl"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-accent/10 shadow-xl">
            <div className="text-center max-w-2xl mx-auto space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#398ae6] to-[#17d9d0]">
                  Stay Updated
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                  Subscribe to our newsletter for the latest updates and insights.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-accent-soft focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-accent text-white hover:bg-accent/90 transition-all duration-300 rounded-lg py-3"
                  >
                    Subscribe Now
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
