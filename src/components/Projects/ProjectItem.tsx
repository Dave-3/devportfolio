import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectProps } from './ProjectCard';

interface ProjectItemProps {
  project: ProjectProps;
  index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative mb-8 md:mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div
        className="flex flex-col md:flex-row items-start relative md:py-2 md:transition-all md:duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: isHovered ? (
            theme === 'light' ? 'rgba(240, 240, 245, 0.1)' :
            theme === 'dark' ? 'rgba(30, 30, 35, 0.1)' :
            'rgba(10, 40, 35, 0.1)'
          ) : 'transparent'
        }}
      >
        {/* Project number */}
        <div className="w-8 md:w-10 flex-shrink-0 mb-2 md:mb-0 text-right pr-2">
          <span className={`text-xs font-mono opacity-70
            ${theme === 'light' ? 'text-light-secondary' : ''}
            ${theme === 'dark' ? 'text-dark-secondary' : ''}
            ${theme === 'neon' ? 'text-neon-secondary' : ''}
          `}>
            {index < 9 ? `0${index + 1}` : index + 1}
          </span>
        </div>

        {/* Project year */}
        <div className="w-12 md:w-16 flex-shrink-0 mb-2 md:mb-0 text-right pr-4">
          <span className={`text-xs font-mono opacity-70
            ${theme === 'light' ? 'text-light-secondary' : ''}
            ${theme === 'dark' ? 'text-dark-secondary' : ''}
            ${theme === 'neon' ? 'text-neon-secondary' : ''}
          `}>
            {project.year}
          </span>
        </div>

        {/* Project title and links */}
        <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-between">
          <h3 className={`text-base font-sans mb-2 md:mb-0 transition-all duration-300
            ${isHovered ? 'font-medium' : 'font-normal'}
            ${theme === 'light' ? `text-light-text ${isHovered ? 'text-light-primary' : ''}` : ''}
            ${theme === 'dark' ? `text-dark-text ${isHovered ? 'text-dark-primary' : ''}` : ''}
            ${theme === 'neon' ? `text-neon-text ${isHovered ? 'text-neon-primary' : ''}` : ''}
          `}>
            {project.title}
          </h3>

          <div className="flex space-x-3 md:ml-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center text-sm font-medium transition-colors
                ${theme === 'light' ? 'text-light-primary hover:text-light-primary/80' : ''}
                ${theme === 'dark' ? 'text-dark-primary hover:text-dark-primary/80' : ''}
                ${theme === 'neon' ? 'text-neon-primary hover:text-neon-primary/80' : ''}
              `}
            >
              <ExternalLink size={16} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center text-sm font-medium transition-colors
                ${theme === 'light' ? 'text-light-primary hover:text-light-primary/80' : ''}
                ${theme === 'dark' ? 'text-dark-primary hover:text-dark-primary/80' : ''}
                ${theme === 'neon' ? 'text-neon-primary hover:text-neon-primary/80' : ''}
              `}
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Project image - shown on hover for desktop, always visible for mobile */}
      <div
        className={`
          mt-4 md:mt-0 md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2
          w-full md:w-[400px] md:h-auto md:aspect-[4/3] rounded-md overflow-hidden md:z-50
          md:pointer-events-none
          block md:hidden lg:block
        `}
        style={{
          opacity: isHovered ? 1 : 0,
          top: '-50%',
          transition: 'opacity 500ms ease-out',
        }}
      >
        {/* This inner div handles the wipe animation */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: theme === 'light' ? '#fff' : theme === 'dark' ? '#121212' : '#0A1E1A',
            transform: isHovered ? 'translateX(-100%)' : 'translateX(0)',
            transition: 'transform 500ms ease-in-out',
            zIndex: 2
          }}
        />

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 500ms ease-out',
            position: 'relative',
            zIndex: 1
          }}
        />
        <div className={`absolute inset-0 opacity-0 ${isHovered ? 'md:opacity-5' : ''} transition-opacity duration-300
          ${theme === 'light' ? 'bg-light-primary' : ''}
          ${theme === 'dark' ? 'bg-dark-primary' : ''}
          ${theme === 'neon' ? 'bg-neon-primary' : ''}
        `} style={{ zIndex: 1 }}></div>
      </div>

      {/* Mobile-only description */}
      <div className="block md:hidden mt-2">
        <p className={`text-xs opacity-70 leading-relaxed
          ${theme === 'light' ? 'text-light-secondary' : ''}
          ${theme === 'dark' ? 'text-dark-secondary' : ''}
          ${theme === 'neon' ? 'text-neon-secondary' : ''}
        `}>
          {project.description.length > 60
            ? `${project.description.substring(0, 60)}...`
            : project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
