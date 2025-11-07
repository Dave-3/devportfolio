import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import SocialIcons from '../UI/SocialIcons';
import AnimatedDevSvg from '../UI/AnimatedDevSvg';

const Hero: React.FC = () => {
  const { theme } = useTheme();

  // Animation variants
  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.2 + 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br opacity-10
          ${theme === 'light' ? 'from-light-primary/20 to-light-bg' : ''}
          ${theme === 'dark' ? 'from-dark-primary/20 to-dark-bg' : ''}
          ${theme === 'neon' ? 'from-neon-primary/20 to-neon-bg' : ''}
        `}></div>

        {/* Abstract shapes */}
        <div className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10
          ${theme === 'light' ? 'bg-light-primary' : ''}
          ${theme === 'dark' ? 'bg-dark-primary' : ''}
          ${theme === 'neon' ? 'bg-neon-primary' : ''}
        `}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5
          ${theme === 'light' ? 'bg-light-accent' : ''}
          ${theme === 'dark' ? 'bg-dark-accent' : ''}
          ${theme === 'neon' ? 'bg-neon-accent' : ''}
        `}></div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            {/* Main heading */}
            <motion.div
              className="overflow-hidden mb-4"
              variants={nameVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className={`text-[2.1rem] md:text-[3rem] font-title font-semibold uppercase tracking-[0.08em]
                ${theme === 'light' ? 'text-light-text' : ''}
                ${theme === 'dark' ? 'text-dark-text' : ''}
                ${theme === 'neon' ? 'text-neon-text' : ''}
              `}>
                Hi! I am David
              </h1>
            </motion.div>

            <motion.div
              className="overflow-hidden mb-6"
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              <h1 className={`text-[2.1rem] md:text-[3rem] font-display uppercase tracking-[0.12em]
                ${theme === 'light' ? 'text-light-primary' : ''}
                ${theme === 'dark' ? 'text-dark-primary' : ''}
                ${theme === 'neon' ? 'text-neon-primary' : ''}
              `}>
                Software Developer
              </h1>
            </motion.div>

            {/* Animated line */}
            <motion.div
              className={`h-1 w-24 mb-10 origin-left
                ${theme === 'light' ? 'bg-light-primary' : ''}
                ${theme === 'dark' ? 'bg-dark-primary' : ''}
                ${theme === 'neon' ? 'bg-neon-primary' : ''}
              `}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>

            {/* Description */}
            <motion.p
              className={`text-sm md:text-base max-w-xl mb-8 leading-relaxed tracking-[0.05em] font-sans
                ${theme === 'light' ? 'text-light-secondary' : ''}
                ${theme === 'dark' ? 'text-dark-secondary' : ''}
                ${theme === 'neon' ? 'text-neon-secondary' : ''}
              `}
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
            >
              I'm a freelance creative developer, 3D animator, Robotics & Embedded systems engineer.
              My goal is to blend imaginative thinking and design with an analytical approach to solve problems where business and technology meet.
              Feel free to hit me up :)
            </motion.p>

            {/* Social icons */}
            <motion.div
              custom={2}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="mb-8 md:mb-0"
            >
              <SocialIcons />
            </motion.div>
          </div>

          {/* Right side - SVG Animation */}
          <motion.div
            className="hidden md:flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AnimatedDevSvg />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;