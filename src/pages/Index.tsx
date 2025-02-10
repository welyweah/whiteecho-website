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
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <img 
              src="/lovable-uploads/c86e61f7-3949-4a8c-b4f9-c8184bfd35c0.png" 
              alt="Logo" 
              className="h-8"
            />
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                        <div className="grid gap-1">
                          <h4 className="text-sm font-medium leading-none">AI Solutions</h4>
                          <p className="text-sm text-gray-500">Explore our AI-powered tools and services</p>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="px-3 py-2 text-sm hover:text-accent transition-colors">
                      Pricing
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="px-3 py-2 text-sm hover:text-accent transition-colors">
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="px-3 py-2 text-sm hover:text-accent transition-colors">
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <button className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Transform Your Business with AI
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Experience the next generation of artificial intelligence, designed to transform your business and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors">
                  Get Started
                </button>
                <button className="px-8 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/5 transition-colors">
                  Watch Demo
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center animate-float"
            >
              <img 
                src="/lovable-uploads/abb4d321-de2c-40c2-94db-a6203d5e050a.png"
                alt="Diamond Icon"
                className="w-full max-w-[500px] h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Use Cases Section */}
      <section className="py-20 px-6 relative bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {useCases.map((useCase, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="h-full glass-card rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                    >
                      <div className="flex justify-center">
                        {useCase.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                      <p className="text-gray-600">{useCase.description}</p>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-accent/10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <Newsletter />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
