
import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-[20%] w-64 h-64 bg-accent/5 rounded-full animate-float" />
      <div className="absolute top-40 right-[25%] w-48 h-48 bg-accent/10 rounded-full animate-float-delayed" />
      <div className="absolute bottom-20 left-[30%] w-72 h-72 bg-accent/5 rounded-full animate-float" />
      <div className="absolute top-[60%] right-[15%] w-56 h-56 bg-accent/10 rounded-full animate-float-delayed" />
    </div>
  );
};

export default FloatingShapes;
