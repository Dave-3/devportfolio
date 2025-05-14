import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
  mobileImage: string;
}

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col md:flex-row items-start mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Project number */}
      <div className="hidden md:block w-16 mr-6">
        <span className={`text-sm font-mono
          ${theme === 'light' ? 'text-light-secondary' : ''}
          ${theme === 'dark' ? 'text-dark-secondary' : ''}
          ${theme === 'neon' ? 'text-neon-secondary' : ''}
        `}>
          {index < 9 ? `0${index + 1}` : index + 1}
        </span>
      </div>
      
      {/* Project year */}
      <div className="w-24 md:w-32 mb-4 md:mb-0">
        <span className={`text-sm md:text-base font-mono
          ${theme === 'light' ? 'text-light-secondary' : ''}
          ${theme === 'dark' ? 'text-dark-secondary' : ''}
          ${theme === 'neon' ? 'text-neon-secondary' : ''}
        `}>
          {project.year}
        </span>
      </div>
      
      {/* Project info */}
      <div className="flex-1">
        <h3 className={`text-xl md:text-2xl font-display font-bold mb-2
          ${theme === 'light' ? 'text-light-text' : ''}
          ${theme === 'dark' ? 'text-dark-text' : ''}
          ${theme === 'neon' ? 'text-neon-text' : ''}
        `}>
          {project.title}
        </h3>
        
        <p className={`mb-4 text-base leading-relaxed max-w-2xl
          ${theme === 'light' ? 'text-light-secondary' : ''}
          ${theme === 'dark' ? 'text-dark-secondary' : ''}
          ${theme === 'neon' ? 'text-neon-secondary' : ''}
        `}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx}
              className={`text-xs font-mono px-3 py-1 rounded-full
                ${theme === 'light' ? 'bg-light-primary/10 text-light-primary' : ''}
                ${theme === 'dark' ? 'bg-dark-primary/10 text-dark-primary' : ''}
                ${theme === 'neon' ? 'bg-neon-primary/10 text-neon-primary' : ''}
              `}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
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
            <ExternalLink size={16} className="mr-1" /> View Demo
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
            <Github size={16} className="mr-1" /> View Code
          </a>
        </div>
      </div>
      
      {/* Project image with hover effect */}
      <div 
        className="group w-full md:w-1/3 aspect-[4/3] mt-6 md:mt-0 overflow-hidden rounded-lg relative shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Desktop image */}
          <img 
            src={project.image} 
            alt={project.title}
            className={`w-full h-full object-cover object-center transition-all duration-500 ease-in-out
              ${isHovered ? 'scale-105 blur-sm' : 'scale-100'}
            `}
          />
          
          {/* Mobile image overlay on hover */}
          <div className={`absolute inset-0 w-full h-full flex items-center justify-center 
            transition-opacity duration-500 ease-in-out
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}>
            <div className="h-full max-h-[80%] overflow-hidden flex items-center">
              <img 
                src={project.mobileImage} 
                alt={`${project.title} mobile view`}
                className="max-h-full object-contain shadow-lg rounded-lg transform transition-transform duration-500"
                style={{ transform: isHovered ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;