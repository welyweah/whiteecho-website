
import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-[20%] w-32 h-32 bg-primary-soft rounded-full opacity-30 animate-float" />
      <div className="absolute top-40 right-[25%] w-24 h-24 bg-accent-soft rounded-full opacity-20 animate-float-delayed" />
      <div className="absolute bottom-20 left-[30%] w-40 h-40 bg-primary-muted rounded-full opacity-25 animate-float" />
      <div className="absolute top-[60%] right-[15%] w-28 h-28 bg-accent rounded-full opacity-30 animate-float-delayed" />
    </div>
  );
};

export default FloatingShapes;
