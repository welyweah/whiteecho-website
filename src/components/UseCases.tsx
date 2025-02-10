
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-white/50 to-primary-soft/50">
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
          className="w-full max-w-5xl mx-auto perspective-1000"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {useCases.map((useCase, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 relative"
              >
                <motion.div
                  initial={{ opacity: 0, rotateY: 45 }}
                  animate={{ 
                    opacity: 1, 
                    rotateY: 0,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    transition: { 
                      duration: 0.3
                    }
                  }}
                  className="h-full p-6 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg 
                           border border-white/20 transform-gpu"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  <motion.div 
                    className="flex justify-center items-center"
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {useCase.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="-left-12 lg:-left-16 h-12 w-12 rounded-full 
                                      bg-white/80 shadow-lg hover:bg-white
                                      backdrop-blur-sm border border-white/20" />
            <CarouselNext className="-right-12 lg:-right-16 h-12 w-12 rounded-full 
                                   bg-white/80 shadow-lg hover:bg-white
                                   backdrop-blur-sm border border-white/20" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default UseCases;
