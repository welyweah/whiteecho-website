
import React from 'react';
import { motion } from 'framer-motion';
import FloatingShapes from '../components/FloatingShapes';
import FeatureCard from '../components/FeatureCard';
import Newsletter from '../components/Newsletter';
import { Sparkles, Zap, Shield, Globe, Menu, Building2, Users2, LineChart, ShoppingCart, Briefcase } from 'lucide-react';
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
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="w-full h-full opacity-30" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#398ae6" />
            <stop offset="100%" stopColor="#17d9d0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 800}
            cy={Math.random() * 600}
            r="2"
            fill="url(#networkGradient)"
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={Math.random() * 800}
            y1={Math.random() * 600}
            x2={Math.random() * 800}
            y2={Math.random() * 600}
            stroke="url(#networkGradient)"
            strokeWidth="0.5"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 4,
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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-soft relative overflow-hidden">
      <FloatingShapes />
      
      {/* Top Menu */}
      <div className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <img 
              src="/lovable-uploads/c86e61f7-3949-4a8c-b4f9-c8184bfd35c0.png" 
              alt="Logo" 
              className="h-10 hover:opacity-90 transition-opacity"
            />
            
            {/* Desktop Menu */}
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

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-accent/5 rounded-lg transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
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
                <button className="px-8 py-4 bg-white text-white border border-[#F1F1F1] rounded-full font-medium hover:bg-gray-50 transition-all duration-300">
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

      {/* Customer Use Cases Section */}
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
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {useCases.map((useCase, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-accent/10 hover:border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-center mb-6">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 shadow-lg hover:shadow-xl" />
            <CarouselNext className="hidden md:flex -right-12 shadow-lg hover:shadow-xl" />
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
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

      {/* Newsletter Section */}
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
