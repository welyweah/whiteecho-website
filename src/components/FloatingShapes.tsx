
import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="cerebralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#398ae6" />
            <stop offset="100%" stopColor="#17d9d0" />
          </linearGradient>
        </defs>
        {/* Generate nodes */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 1000}
            cy={Math.random() * 1000}
            r="2.5"
            fill="url(#cerebralGradient)"
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        {/* Generate connecting lines */}
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={Math.random() * 1000}
            y1={Math.random() * 1000}
            x2={Math.random() * 1000}
            y2={Math.random() * 1000}
            stroke="url(#cerebralGradient)"
            strokeWidth="0.6"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default FloatingShapes;

