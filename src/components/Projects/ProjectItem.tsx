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
      className="group relative mb-12 md:mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div
        className="flex flex-col md:flex-row items-start relative md:p-3 md:rounded-lg md:transition-all md:duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: isHovered ? (
            theme === 'light' ? 'rgba(240, 240, 245, 0.5)' :
            theme === 'dark' ? 'rgba(30, 30, 35, 0.5)' :
            'rgba(10, 40, 35, 0.5)'
          ) : 'transparent'
        }}
      >
        {/* Project number and year */}
        <div className="w-16 md:w-20 flex-shrink-0 mb-2 md:mb-0">
          <span className={`text-xs font-mono
            ${theme === 'light' ? 'text-light-secondary' : ''}
            ${theme === 'dark' ? 'text-dark-secondary' : ''}
            ${theme === 'neon' ? 'text-neon-secondary' : ''}
          `}>
            {index < 9 ? `0${index + 1}` : index + 1}
          </span>
        </div>

        {/* Project year */}
        <div className="w-16 md:w-20 flex-shrink-0 mb-2 md:mb-0">
          <span className={`text-xs font-mono
            ${theme === 'light' ? 'text-light-secondary' : ''}
            ${theme === 'dark' ? 'text-dark-secondary' : ''}
            ${theme === 'neon' ? 'text-neon-secondary' : ''}
          `}>
            {project.year}
          </span>
        </div>

        {/* Project title and links */}
        <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-between">
          <h3 className={`text-base md:text-xl font-sans mb-2 md:mb-0 transition-all duration-300
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
      <div className={`
        mt-4 md:mt-0 md:absolute md:right-0 md:top-0 md:transform md:-translate-y-1/3
        w-full md:w-64 aspect-video rounded-md overflow-hidden md:z-10
        md:opacity-0 md:pointer-events-none transition-all duration-500 ease-in-out
        ${isHovered ? 'md:opacity-100 md:translate-x-16 md:w-80 md:shadow-2xl' : 'md:shadow-lg'}
        block md:hidden lg:block
      `}>
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover object-center transition-transform duration-500 ease-in-out
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}
        />
        <div className={`absolute inset-0 opacity-0 ${isHovered ? 'md:opacity-10' : ''} transition-opacity duration-500
          ${theme === 'light' ? 'bg-light-primary' : ''}
          ${theme === 'dark' ? 'bg-dark-primary' : ''}
          ${theme === 'neon' ? 'bg-neon-primary' : ''}
        `}></div>
      </div>

      {/* Mobile-only description */}
      <div className="block md:hidden mt-2">
        <p className={`text-xs
          ${theme === 'light' ? 'text-light-secondary' : ''}
          ${theme === 'dark' ? 'text-dark-secondary' : ''}
          ${theme === 'neon' ? 'text-neon-secondary' : ''}
        `}>
          {project.description.length > 80
            ? `${project.description.substring(0, 80)}...`
            : project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
