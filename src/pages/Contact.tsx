
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { removeBackground, loadImage } from '../utils/backgroundRemoval';

const Contact = () => {
  const { toast } = useToast();
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    const processLogo = async () => {
      try {
        // Fetch the original image
        const response = await fetch('/lovable-uploads/82b5d2d5-0952-4067-aaac-ab635cd345a7.png');
        const blob = await response.blob();
        
        // Load the image
        const img = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(img);
        
        // Create URL for the processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedLogoUrl(processedUrl);
      } catch (error) {
        console.error('Error processing logo:', error);
      }
    };

    processLogo();

    // Cleanup function
    return () => {
      if (processedLogoUrl) {
        URL.revokeObjectURL(processedLogoUrl);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-soft">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#398ae6] to-[#17d9d0]">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="p-8 bg-accent/5 rounded-full">
              <img 
                src={processedLogoUrl || '/lovable-uploads/82b5d2d5-0952-4067-aaac-ab635cd345a7.png'}
                alt="Logo" 
                className="w-[400px] h-[400px] transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-accent/10"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                required
                className="w-full min-h-[150px]"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#398ae6] to-[#17d9d0] text-white hover:opacity-90"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
