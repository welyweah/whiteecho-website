
import React, { useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Building2, Users2, LineChart, ShoppingCart, Briefcase, Trophy, Cpu, Workflow } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const useCases = [
  {
    icon: <Building2 className="w-12 h-12 text-accent mb-4" />,
    title: "Enterprise Solutions",
    description: "Large organizations leveraging our AI platform for data-driven decision making and process automation."
  },
  {
    icon: <Users2 className="w-12 h-12 text-accent mb-4" />,
    title: "Team Collaboration",
    description: "Cross-functional teams using our tools to enhance productivity and streamline workflows."
  },
  {
    icon: <LineChart className="w-12 h-12 text-accent mb-4" />,
    title: "Data Analytics",
    description: "Businesses gaining valuable insights through our advanced analytics and visualization tools."
  },
  {
    icon: <ShoppingCart className="w-12 h-12 text-accent mb-4" />,
    title: "E-commerce",
    description: "Online retailers optimizing customer experience and inventory management with AI."
  },
  {
    icon: <Briefcase className="w-12 h-12 text-accent mb-4" />,
    title: "Professional Services",
    description: "Consultants and service providers enhancing client delivery with our platform."
  },
  {
    icon: <Trophy className="w-12 h-12 text-accent mb-4" />,
    title: "Sports Analytics",
    description: "Sports teams and organizations using AI for performance analysis and strategic planning."
  },
  {
    icon: <Cpu className="w-12 h-12 text-accent mb-4" />,
    title: "Manufacturing",
    description: "Smart manufacturing processes enhanced by AI-driven quality control and optimization."
  },
  {
    icon: <Workflow className="w-12 h-12 text-accent mb-4" />,
    title: "Workflow Automation",
    description: "Organizations streamlining operations through intelligent process automation."
  }
];

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const UseCases = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    // Preload animations for smoother initial load
    controls.start("visible");
  }, [controls]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-primary-soft will-change-transform">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial="hidden"
          animate={controls}
          variants={contentVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-accent-gradient will-change-transform"
          >
            Customer Use Cases
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto will-change-transform"
          >
            Discover how organizations are transforming their operations with our AI solutions
          </motion.p>
        </motion.div>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent>
            {useCases.map((useCase, index) => (
              <CarouselItem key={index} className="w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.4, ease: "easeInOut" },
                      layout: { duration: 0.4, ease: "easeInOut" }
                    }}
                    className="p-8 rounded-xl bg-white border border-gray-100 shadow-sm
                             mx-auto max-w-2xl will-change-transform"
                    style={{ 
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden"
                    }}
                  >
                    <motion.div 
                      className="flex justify-center items-center mb-6 will-change-transform"
                      whileHover={{ scale: 1.05 }}
                      transition={{ 
                        duration: 0.3, 
                        ease: [0.25, 0.1, 0.25, 1.0],
                        layout: { duration: 0.2 }
                      }}
                    >
                      {useCase.icon}
                    </motion.div>
                    <motion.h3 
                      layout
                      className="text-2xl font-semibold mb-4 text-gray-800"
                    >
                      {useCase.title}
                    </motion.h3>
                    <motion.p 
                      layout
                      className="text-lg text-gray-600 leading-relaxed"
                    >
                      {useCase.description}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="-left-12 h-10 w-10 rounded-full 
                                      bg-white hover:bg-gray-50
                                      border border-gray-200
                                      transition-all duration-300 ease-out" />
            <CarouselNext className="-right-12 h-10 w-10 rounded-full 
                                   bg-white hover:bg-gray-50
                                   border border-gray-200
                                   transition-all duration-300 ease-out" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default UseCases;
