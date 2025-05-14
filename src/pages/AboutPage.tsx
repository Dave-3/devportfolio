import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const AboutPage: React.FC = () => {
  const { theme } = useTheme();

  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Django', 'GraphQL'] },
    { category: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { category: 'Other', items: ['AWS', 'Docker', 'CI/CD', 'Jest', 'Figma'] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl md:text-5xl font-display font-bold mb-8
            ${theme === 'light' ? 'text-light-text' : ''}
            ${theme === 'dark' ? 'text-dark-text' : ''}
            ${theme === 'neon' ? 'text-neon-text' : ''}
          `}
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <h2 className={`text-2xl font-display font-semibold mb-4
              ${theme === 'light' ? 'text-light-text' : ''}
              ${theme === 'dark' ? 'text-dark-text' : ''}
              ${theme === 'neon' ? 'text-neon-text' : ''}
            `}>
              My Journey
            </h2>
            <div className={`space-y-4 text-base md:text-lg
              ${theme === 'light' ? 'text-light-secondary' : ''}
              ${theme === 'dark' ? 'text-dark-secondary' : ''}
              ${theme === 'neon' ? 'text-neon-secondary' : ''}
            `}>
              <p>
                I'm a passionate developer with over 4 years of experience specializing in web and mobile development. 
                Throughout my career, I've dedicated myself to creating user-centric solutions that combine functionality 
                with exceptional user experiences.
              </p>
              <p>
                My journey in tech began with a curiosity for how things work. That curiosity evolved into formal education 
                in computer science, followed by hands-on experience across diverse projects and industries. 
                I've worked with startups, established companies, and as an independent developer.
              </p>
              <p>
                What drives me is the intersection of technology and human experience. I believe the best solutions are not 
                just technically sound but also intuitive and accessible to the people who use them.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`rounded-lg p-6
              ${theme === 'light' ? 'bg-gray-100' : ''}
              ${theme === 'dark' ? 'bg-gray-800/50' : ''}
              ${theme === 'neon' ? 'bg-neon-secondary/10' : ''}
            `}
          >
            <h2 className={`text-xl font-display font-semibold mb-4
              ${theme === 'light' ? 'text-light-text' : ''}
              ${theme === 'dark' ? 'text-dark-text' : ''}
              ${theme === 'neon' ? 'text-neon-text' : ''}
            `}>
              Quick Facts
            </h2>
            <ul className="space-y-3">
              <li className={`flex items-start
                ${theme === 'light' ? 'text-light-secondary' : ''}
                ${theme === 'dark' ? 'text-dark-secondary' : ''}
                ${theme === 'neon' ? 'text-neon-secondary' : ''}
              `}>
                <span className={`mr-2 font-medium
                  ${theme === 'light' ? 'text-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-primary' : ''}
                `}>▹</span>
                Based in Nairobi, Kenya
              </li>
              <li className={`flex items-start
                ${theme === 'light' ? 'text-light-secondary' : ''}
                ${theme === 'dark' ? 'text-dark-secondary' : ''}
                ${theme === 'neon' ? 'text-neon-secondary' : ''}
              `}>
                <span className={`mr-2 font-medium
                  ${theme === 'light' ? 'text-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-primary' : ''}
                `}>▹</span>
                MSc in Computer Science
              </li>
              <li className={`flex items-start
                ${theme === 'light' ? 'text-light-secondary' : ''}
                ${theme === 'dark' ? 'text-dark-secondary' : ''}
                ${theme === 'neon' ? 'text-neon-secondary' : ''}
              `}>
                <span className={`mr-2 font-medium
                  ${theme === 'light' ? 'text-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-primary' : ''}
                `}>▹</span>
                Full-stack Developer
              </li>
              <li className={`flex items-start
                ${theme === 'light' ? 'text-light-secondary' : ''}
                ${theme === 'dark' ? 'text-dark-secondary' : ''}
                ${theme === 'neon' ? 'text-neon-secondary' : ''}
              `}>
                <span className={`mr-2 font-medium
                  ${theme === 'light' ? 'text-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-primary' : ''}
                `}>▹</span>
                Open Source Contributor
              </li>
              <li className={`flex items-start
                ${theme === 'light' ? 'text-light-secondary' : ''}
                ${theme === 'dark' ? 'text-dark-secondary' : ''}
                ${theme === 'neon' ? 'text-neon-secondary' : ''}
              `}>
                <span className={`mr-2 font-medium
                  ${theme === 'light' ? 'text-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-primary' : ''}
                `}>▹</span>
                Tech Conference Speaker
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className={`text-2xl font-display font-semibold mb-6
            ${theme === 'light' ? 'text-light-text' : ''}
            ${theme === 'dark' ? 'text-dark-text' : ''}
            ${theme === 'neon' ? 'text-neon-text' : ''}
          `}>
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                className={`rounded-lg p-5
                  ${theme === 'light' ? 'bg-gray-100' : ''}
                  ${theme === 'dark' ? 'bg-gray-800/50' : ''}
                  ${theme === 'neon' ? 'bg-neon-secondary/10' : ''}
                `}
              >
                <h3 className={`text-lg font-medium mb-3
                  ${theme === 'light' ? 'text-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-primary' : ''}
                `}>
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, idx) => (
                    <li 
                      key={idx}
                      className={`
                        ${theme === 'light' ? 'text-light-secondary' : ''}
                        ${theme === 'dark' ? 'text-dark-secondary' : ''}
                        ${theme === 'neon' ? 'text-neon-secondary' : ''}
                      `}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;