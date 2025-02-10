
import React from 'react';
import { motion } from 'framer-motion';

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

export default NetworkWeb;
