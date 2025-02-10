
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-primary-soft">
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
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent>
            {useCases.map((useCase, index) => (
              <CarouselItem key={index} className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1
                    }
                  }}
                  className="p-8 rounded-xl bg-white border border-gray-100 shadow-sm
                           transition-all duration-300 mx-auto max-w-2xl"
                >
                  <motion.div 
                    className="flex justify-center items-center mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {useCase.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    {useCase.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="-left-12 h-10 w-10 rounded-full 
                                      bg-white hover:bg-gray-50
                                      border border-gray-200" />
            <CarouselNext className="-right-12 h-10 w-10 rounded-full 
                                   bg-white hover:bg-gray-50
                                   border border-gray-200" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default UseCases;

