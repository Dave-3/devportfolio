import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const AnimatedDevSvg: React.FC = () => {
  const { theme } = useTheme();

  // Get the primary color based on the current theme
  const getPrimaryColor = () => {
    switch (theme) {
      case 'light':
        return '#3B82F6'; // light-primary
      case 'dark':
        return '#60A5FA'; // dark-primary
      case 'neon':
        return '#00FFAA'; // neon-primary
      default:
        return '#3B82F6';
    }
  };

  // SVG path animation variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          type: "spring", 
          duration: 1.5,
          bounce: 0, 
          delay: i * 0.2 
        },
        opacity: { duration: 0.01 }
      }
    })
  };

  // Circle animation variants
  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring", 
        duration: 0.8, 
        delay: i * 0.1 + 1.5 
      }
    })
  };

  // Line animation variants
  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: (i: number) => ({
      scaleX: 1,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: i * 0.05 + 2 
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <svg 
        viewBox="0 0 600 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Monitor */}
        <motion.path
          d="M450 70v160h-100c-5 0-9 4-9 9v37H100c-3 0-5.5-2.5-5.5-5.5V70c0-3 2.5-5.5 5.5-5.5h30v94c0 4 3 7 7 7h135c4 0 7-3 7-7V64.5h165c3 0 5.5 2.5 5.5 5.5z"
          stroke={getPrimaryColor()}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={pathVariants}
          custom={0}
          initial="hidden"
          animate="visible"
        />
        
        <motion.path
          d="M480 50v176h-130c-5 0-9 4-9 9v97H120v-52.5c0-3-1-5.5-3-7.5-2-2-4.5-3-7.5-3h-9c-3 0-5.5 2.5-5.5 5.5v-1c0-1-0.5-2-1.5-2.5-1-0.5-2-1-3-1.5H60V50c0-6.5 5.5-12 12-12h50v115c0 4 3 7 7 7h135c4 0 7-3 7-7V38h207c6.5 0 12 5.5 12 12z"
          stroke={getPrimaryColor()}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={pathVariants}
          custom={1}
          initial="hidden"
          animate="visible"
        />
        
        {/* Monitor stand */}
        <motion.line
          x1="270" y1="340" x2="260" y2="390"
          stroke={getPrimaryColor()}
          strokeWidth="2"
          strokeLinecap="round"
          variants={pathVariants}
          custom={2}
          initial="hidden"
          animate="visible"
        />
        
        <motion.line
          x1="305" y1="340" x2="315" y2="390"
          stroke={getPrimaryColor()}
          strokeWidth="2"
          strokeLinecap="round"
          variants={pathVariants}
          custom={2.1}
          initial="hidden"
          animate="visible"
        />
        
        <motion.rect
          x="245" y="390" width="85" height="20" rx="10" ry="10"
          stroke={getPrimaryColor()}
          strokeWidth="2"
          fill="none"
          variants={pathVariants}
          custom={2.2}
          initial="hidden"
          animate="visible"
        />
        
        <motion.circle
          cx="287" cy="315" r="9"
          stroke={getPrimaryColor()}
          strokeWidth="2"
          fill="none"
          variants={pathVariants}
          custom={2.3}
          initial="hidden"
          animate="visible"
        />
        
        {/* Laptop */}
        <motion.path
          d="M580 300v74c0 5-4 9-9 9H340c-5 0-9-4-9-9V240c0-5 4-9 9-9h155v59c0 6 5 10 10 10h75z"
          stroke={getPrimaryColor()}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={pathVariants}
          custom={3}
          initial="hidden"
          animate="visible"
        />
        
        <motion.path
          d="M570 300v65c0 4-3 7-7 7H350c-4 0-7-3-7-7V250c0-4 3-7 7-7h145v46c0 6 5 11 11 11h64z"
          stroke={getPrimaryColor()}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={pathVariants}
          custom={3.1}
          initial="hidden"
          animate="visible"
        />
        
        <motion.path
          d="M340 385h260c2 0 4 2 4 4v0c0 11-9 20-20 20H355c-11 0-20-9-20-20v0c0-2 2-4 4-4z"
          stroke={getPrimaryColor()}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={pathVariants}
          custom={3.2}
          initial="hidden"
          animate="visible"
        />
        
        {/* Code editor window */}
        <motion.path
          d="M285 20v142c0 4-3 7-7 7H140c-4 0-7-3-7-7V20h152z"
          stroke={getPrimaryColor()}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={pathVariants}
          custom={4}
          initial="hidden"
          animate="visible"
        />
        
        <motion.path
          d="M285 8v12H133V8c0-4 3-7 7-7h138c4 0 7 3 7 7z"
          stroke={getPrimaryColor()}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={pathVariants}
          custom={4.1}
          initial="hidden"
          animate="visible"
        />
        
        {/* Browser window dots */}
        <motion.circle
          cx="155" cy="11" r="3"
          fill={getPrimaryColor()}
          variants={circleVariants}
          custom={0}
          initial="hidden"
          animate="visible"
        />
        
        <motion.circle
          cx="168" cy="11" r="3"
          fill={getPrimaryColor()}
          variants={circleVariants}
          custom={1}
          initial="hidden"
          animate="visible"
        />
        
        <motion.circle
          cx="181" cy="11" r="3"
          fill={getPrimaryColor()}
          variants={circleVariants}
          custom={2}
          initial="hidden"
          animate="visible"
        />
        
        {/* Code lines */}
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            <motion.line
              x1="153" y1={52 + i * 12} x2="161" y2={52 + i * 12}
              stroke={getPrimaryColor()}
              strokeWidth="1.5"
              strokeLinecap="round"
              variants={lineVariants}
              custom={i}
              initial="hidden"
              animate="visible"
            />
            <motion.line
              x1="166" y1={52 + i * 12} x2={166 + Math.random() * 60} y2={52 + i * 12}
              stroke={getPrimaryColor()}
              strokeWidth="1.5"
              strokeLinecap="round"
              variants={lineVariants}
              custom={i + 0.3}
              initial="hidden"
              animate="visible"
            />
          </React.Fragment>
        ))}
      </svg>
    </motion.div>
  );
};

export default AnimatedDevSvg;
