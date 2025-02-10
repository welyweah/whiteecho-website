
import React from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#398ae6] to-[#17d9d0]">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-20 items-center justify-center">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="w-full md:w-3/5 max-w-2xl space-y-8 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/30 hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] transition-all duration-300"
          >
            <div className="space-y-3">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full bg-white/80 h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-[#398ae6]/20"
              />
            </div>
            
            <div className="space-y-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full bg-white/80 h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-[#398ae6]/20"
              />
            </div>
            
            <div className="space-y-3">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                required
                className="w-full min-h-[180px] bg-white/80 text-base transition-all duration-200 focus:ring-2 focus:ring-[#398ae6]/20 resize-none"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#398ae6] to-[#17d9d0] text-white text-lg font-medium hover:opacity-90 transition-opacity rounded-xl"
            >
              Send Message
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-2/5 max-w-xl"
          >
            <img
              src="/lovable-uploads/533d1c48-7479-4897-aa95-007cd5afad6f.png"
              alt="Contact decoration"
              className="w-full h-auto scale-125 hover:scale-[1.35] transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
