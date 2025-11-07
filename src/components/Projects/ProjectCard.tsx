import React from 'react';
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

  const backgroundColor = theme === 'light' ? '#f8f9fa' : theme === 'dark' ? '#121212' : '#0A1E1A';

  return (
    <motion.div
      className="relative flex flex-col md:flex-row items-start mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Project number */}
      <div className="hidden md:block w-16 mr-6">
        <span className={`text-[0.6rem] font-title uppercase tracking-[0.22em]
          ${theme === 'light' ? 'text-light-secondary' : ''}
          ${theme === 'dark' ? 'text-dark-secondary' : ''}
          ${theme === 'neon' ? 'text-neon-secondary' : ''}
        `}>
          {index < 9 ? `0${index + 1}` : index + 1}
        </span>
      </div>
      
      {/* Project year */}
      <div className="w-24 md:w-32 mb-4 md:mb-0">
        <span className={`text-[0.6rem] md:text-[0.7rem] font-title uppercase tracking-[0.18em]
          ${theme === 'light' ? 'text-light-secondary' : ''}
          ${theme === 'dark' ? 'text-dark-secondary' : ''}
          ${theme === 'neon' ? 'text-neon-secondary' : ''}
        `}>
          {project.year}
        </span>
      </div>
      
      {/* Project info */}
      <div className="flex-1">
        <h3 className={`text-lg md:text-xl font-title uppercase tracking-[0.14em] font-semibold leading-snug mb-3
          ${theme === 'light' ? 'text-light-text' : ''}
          ${theme === 'dark' ? 'text-dark-text' : ''}
          ${theme === 'neon' ? 'text-neon-text' : ''}
        `}>
          {project.title}
        </h3>
        
        <p className={`mb-4 text-sm md:text-base leading-relaxed max-w-2xl font-sans tracking-[0.01em]
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
              className={`text-[0.55rem] tracking-[0.18em] uppercase font-title px-3 py-1 rounded-full
                ${theme === 'light' ? 'bg-light-primary/10 text-light-primary' : ''}
                ${theme === 'dark' ? 'bg-dark-primary/10 text-dark-primary' : ''}
                ${theme === 'neon' ? 'bg-neon-primary/10 text-neon-primary' : ''}
              `}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3 font-title text-[0.6rem] tracking-[0.18em] uppercase">
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-colors
                ${theme === 'light' ? 'text-light-primary hover:text-light-primary/80' : ''}
                ${theme === 'dark' ? 'text-dark-primary hover:text-dark-primary/80' : ''}
                ${theme === 'neon' ? 'text-neon-primary hover:text-neon-primary/80' : ''}
              `}
            >
              <ExternalLink size={16} /> Visit Site
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-colors
                ${theme === 'light' ? 'text-light-primary hover:text-light-primary/80' : ''}
                ${theme === 'dark' ? 'text-dark-primary hover:text-dark-primary/80' : ''}
                ${theme === 'neon' ? 'text-neon-primary hover:text-neon-primary/80' : ''}
              `}
            >
              <Github size={16} /> View Code
            </a>
          )}
        </div>
      </div>
      
      {/* Project image with hover effect */}
      <div 
        className="group w-full md:w-1/3 aspect-[4/3] mt-6 md:mt-0 overflow-hidden rounded-lg relative shadow-md"
        style={{ backgroundColor }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-contain object-top"
          />
        </div>
        {project.mobileImage && project.mobileImage !== project.image && (
          <div className="absolute bottom-4 right-4 w-28 rounded-lg border border-white/30 shadow-lg overflow-hidden bg-white">
            <img
              src={project.mobileImage}
              alt={`${project.title} mobile view`}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;