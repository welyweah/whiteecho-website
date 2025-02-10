import React from 'react';
import { motion } from 'framer-motion';
import FloatingShapes from '../components/FloatingShapes';
import FeatureCard from '../components/FeatureCard';
import Newsletter from '../components/Newsletter';
import { Sparkles, Zap, Shield, Globe, Menu, Building2, Users2, LineChart, ShoppingCart, Briefcase, Trophy, Cpu, Workflow } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const NetworkWeb = () => {
  const nodes = Array.from({ length: 30 }).map(() => ({
    x: Math.random() * 800,
    y: Math.random() * 600,
  }));

  const lines = nodes.flatMap((node, i) => 
    nodes.slice(i + 1).map((targetNode, j) => {
      const distance = Math.sqrt(
        Math.pow(node.x - targetNode.x, 2) + 
        Math.pow(node.y - targetNode.y, 2)
      );
      if (distance < 250) {
        return {
          x1: node.x,
          y1: node.y,
          x2: targetNode.x,
          y2: targetNode.y,
          opacity: 1 - (distance / 250),
        };
      }
      return null;
    }).filter(Boolean)
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="w-full h-full opacity-50" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1EAEDB" />
            <stop offset="100%" stopColor="#33C3F0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {lines.map((line, i) => (
          <motion.line
            key={`line-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#networkGradient)"
            strokeWidth="0.8"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, line.opacity * 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="1.5"
            fill="url(#networkGradient)"
            filter="url(#glow)"
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

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

  const partners = [
    {
      name: "TechCorp",
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      alt: "TechCorp Logo"
    },
    {
      name: "InnovateHub",
      logo: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      alt: "InnovateHub Logo"
    },
    {
      name: "GlobalTech",
      logo: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
      alt: "GlobalTech Logo"
    },
    {
      name: "FutureWorks",
      logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      alt: "FutureWorks Logo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-soft relative overflow-hidden">
      <FloatingShapes />
      
      <div className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <img 
              src="/lovable-uploads/c86e61f7-3949-4a8c-b4f9-c8184bfd35c0.png" 
              alt="Logo" 
              className="h-10 hover:opacity-90 transition-opacity"
            />
            
            <div className="hidden md:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList className="space-x-2">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent/5">Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] bg-white/80 backdrop-blur-xl">
                        <div className="grid gap-1">
                          <h4 className="text-sm font-medium leading-none">AI Solutions</h4>
                          <p className="text-sm text-gray-500">Explore our AI-powered tools and services</p>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="px-4 py-2 text-sm hover:text-accent transition-colors rounded-lg hover:bg-accent/5">
                      Pricing
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="px-4 py-2 text-sm hover:text-accent transition-colors rounded-lg hover:bg-accent/5">
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="px-4 py-2 text-sm hover:text-accent transition-colors rounded-lg hover:bg-accent/5">
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#398ae6] to-[#17d9d0] text-white rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/25">
                Get Started
              </button>
            </div>

            <button className="md:hidden p-2 hover:bg-accent/5 rounded-lg transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      <section className="relative pt-40 lg:pt-48 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Transform Your Business with AI
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Experience the next generation of artificial intelligence, designed to transform your business and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#398ae6] to-[#17d9d0] text-white rounded-full font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/25">
                  Get Started
                </button>
                <button className="px-8 py-4 bg-white text-white border border-[#17d9d0]/20 rounded-full font-medium hover:bg-gray-50 transition-all duration-300">
                  <span className="bg-gradient-to-r from-[#398ae6] to-[#17d9d0] bg-clip-text text-transparent">
                    Watch Demo
                  </span>
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <NetworkWeb />
              <img 
                src="/lovable-uploads/abb4d321-de2c-40c2-94db-a6203d5e050a.png"
                alt="Diamond Icon"
                className="w-full max-w-[600px] h-auto relative z-10 transform hover:scale-105 transition-all duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-white/50 to-primary-soft/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-accent-gradient">
              Customer Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how organizations are transforming their operations with our AI solutions
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {useCases.map((useCase, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full p-6 md:p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-accent/10 hover:border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-center mb-6">
                      {useCase.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{useCase.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{useCase.description}</p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="-left-4 md:-left-12 shadow-lg hover:shadow-xl" />
              <CarouselNext className="-right-4 md:-right-12 shadow-lg hover:shadow-xl" />
            </div>
          </Carousel>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-accent-gradient">
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

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-accent-gradient">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading organizations worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <div className="aspect-[3/2] relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-6 border border-accent/10 hover:border-accent/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/5 rounded-3xl filter blur-2xl"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-accent/10 shadow-xl">
              <div className="text-center max-w-2xl mx-auto space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-accent-gradient">
                  Stay Updated
                </h2>
                <p className="text-xl text-gray-600">
                  Subscribe to our newsletter for the latest updates and insights.
                </p>
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
