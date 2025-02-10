
import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: "ETH Student Project House",
    logo: "/lovable-uploads/29377331-c092-4300-ae7e-d6d2c092fc23.png",
    alt: "ETH Student Project House Logo",
    className: ""
  },
  {
    name: "AWS",
    logo: "/lovable-uploads/ba68f5ce-eb05-43e2-b5c7-313462fcbe8c.png",
    alt: "AWS Logo",
    className: ""
  },
  {
    name: "ETH AI Center",
    logo: "/lovable-uploads/9cef9d35-b323-4777-911c-9700c5dc94df.png",
    alt: "ETH AI Center Logo",
    className: ""
  },
  {
    name: "Founderful",
    logo: "/lovable-uploads/146e0147-8655-41b0-8453-f10c7d0753ad.png",
    alt: "Founderful Logo",
    className: ""
  },
  {
    name: "Google Cloud",
    logo: "/lovable-uploads/934c9354-bd2a-4854-85b4-4c301f8e0957.png",
    alt: "Google Cloud Logo",
    className: ""
  },
  {
    name: "Talent Kick",
    logo: "/lovable-uploads/fcec8524-f98a-4d03-86cb-68a3f95f9d28.png",
    alt: "Talent Kick Logo",
    className: ""
  },
  {
    name: "Azure",
    logo: "/lovable-uploads/683b4e08-4608-4fb5-b73d-9380771ef1e3.png",
    alt: "Azure Logo",
    className: ""
  }
];

const Partners = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-accent-gradient"
          >
            Our Partners
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Trusted by leading organizations worldwide
          </motion.p>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative w-full max-w-[160px] aspect-[3/2] p-4"
              >
                <div className="absolute inset-0 bg-gray-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-full w-full flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className={`w-full h-full object-contain ${partner.className || ''}`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
