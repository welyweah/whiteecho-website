
import React from 'react';
import FloatingShapes from '../components/FloatingShapes';
import Header from '../components/Header';
import Hero from '../components/Hero';
import UseCases from '../components/UseCases';
import Features from '../components/Features';
import Partners from '../components/Partners';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-soft relative overflow-hidden">
      <FloatingShapes />
      <Header />
      <Hero />
      <UseCases />
      <Features />
      <Partners />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
