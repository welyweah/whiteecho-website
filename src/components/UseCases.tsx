
import React from 'react';
import { motion } from 'framer-motion';
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

const UseCases = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-white/50 to-primary-soft/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-accent-gradient"
          >
            Customer Use Cases
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover how organizations are transforming their operations with our AI solutions
          </motion.p>
        </div>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4 [perspective:2000px]">
            {useCases.map((useCase, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 relative">
                <motion.div
                  initial={{ opacity: 0, rotateY: 45, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1, 
                    rotateY: 0, 
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: index * 0.1
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: -5,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 30 
                    }
                  }}
                  className="h-full p-6 md:p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-accent/10 
                           hover:border-accent/30 shadow-lg hover:shadow-xl transition-all duration-300 
                           transform-gpu group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 
                               group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex justify-center items-center h-24 mb-6 relative">
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -5, 5, -5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {useCase.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800 
                               relative z-10 group-hover:text-accent transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed relative z-10">
                    {useCase.description}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="-left-12 md:-left-16 h-12 w-12 rounded-full shadow-lg hover:shadow-xl 
                                      bg-white/90 backdrop-blur-sm border-accent/20 hover:bg-white hover:border-accent/50 
                                      transition-all duration-300" />
            <CarouselNext className="-right-12 md:-right-16 h-12 w-12 rounded-full shadow-lg hover:shadow-xl 
                                   bg-white/90 backdrop-blur-sm border-accent/20 hover:bg-white hover:border-accent/50 
                                   transition-all duration-300" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default UseCases;
