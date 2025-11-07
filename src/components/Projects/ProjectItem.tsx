import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      className="group relative mb-6 md:mb-4 border-b border-transparent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div
        className="flex flex-row items-center gap-6 py-4 px-4 -mx-4 transition-all duration-300 rounded-md cursor-default"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: isHovered ? (
            theme === 'light' ? 'rgba(240, 240, 245, 0.05)' :
            theme === 'dark' ? 'rgba(30, 30, 35, 0.05)' :
            'rgba(10, 40, 35, 0.05)'
          ) : 'transparent'
        }}
      >
        {/* Project number */}
  <div className="flex flex-row items-center opacity-60 font-title text-[0.6rem] tracking-[0.22em] uppercase">
          {(index + 1).toString().padStart(2, '0').split('').map((digit, i) => (
            <div key={i} className={`
              ${theme === 'light' ? 'text-light-secondary' : ''}
              ${theme === 'dark' ? 'text-dark-secondary' : ''}
              ${theme === 'neon' ? 'text-neon-secondary' : ''}
            `}>
              {digit}
            </div>
          ))}
        </div>

        {/* Project year */}
  <div className="w-[40px] font-title text-[0.6rem] leading-tight tracking-[0.16em] uppercase">
          <span className={`opacity-70
            ${theme === 'light' ? 'text-light-secondary' : ''}
            ${theme === 'dark' ? 'text-dark-secondary' : ''}
            ${theme === 'neon' ? 'text-neon-secondary' : ''}
          `}>
            {project.year}
          </span>
        </div>

        {/* Project title and links */}
        <div className="flex-1 flex flex-row items-center justify-between">
          <h3 
            className={`text-xs sm:text-sm font-title uppercase tracking-[0.12em] transition-all duration-300
              ${isHovered ? 'font-semibold' : 'font-medium'}
              ${theme === 'light' ? `text-light-text ${isHovered ? 'text-light-primary' : ''}` : ''}
              ${theme === 'dark' ? `text-dark-text ${isHovered ? 'text-dark-primary' : ''}` : ''}
              ${theme === 'neon' ? `text-neon-text ${isHovered ? 'text-neon-primary' : ''}` : ''}
            `}
          >
            {project.title}
          </h3>

          <div className="flex flex-row items-center font-title text-[0.6rem] uppercase tracking-[0.12em]">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 hover:bg-opacity-5 rounded transition-colors flex items-center gap-1
                  ${theme === 'light' ? 'text-light-primary hover:bg-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-primary hover:bg-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-primary hover:bg-neon-primary' : ''}
                `}
              >
                <ExternalLink size={16} />
                <span className="hidden lg:inline">Visit</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 hover:bg-opacity-5 rounded transition-colors flex items-center gap-1
                  ${theme === 'light' ? 'text-light-primary hover:bg-light-primary' : ''}
                  ${theme === 'dark' ? 'text-dark-primary hover:bg-dark-primary' : ''}
                  ${theme === 'neon' ? 'text-neon-primary hover:bg-neon-primary' : ''}
                `}
              >
                <Github size={16} />
                <span className="hidden lg:inline">Code</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Mobile image preview */}
      <div
        className={`mt-4 block lg:hidden w-full overflow-hidden rounded-md border aspect-[3/2]
          ${theme === 'light' ? 'border-light-primary/20 bg-light-bg' : ''}
          ${theme === 'dark' ? 'border-dark-primary/30 bg-dark-bg' : ''}
          ${theme === 'neon' ? 'border-neon-primary/30 bg-neon-bg' : ''}
        `}
      >
        <img
          src={project.mobileImage || project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Project image - shown on hover for desktop */}
      <div
        className="hidden lg:block absolute w-[400px] h-[400px] overflow-hidden z-10 rounded-md pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 500ms ease-out',
        }}
      >
        {/* Left to right wipe overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '100%',
            background: theme === 'light' ? '#fff' : theme === 'dark' ? '#121212' : '#0A1E1A',
            transform: `scaleX(${isHovered ? 0 : 1})`,
            transformOrigin: 'left',
            transition: 'transform 500ms ease-in-out',
            zIndex: 2
          }}
        />

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain object-center"
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
  <div className="block md:hidden mt-3">
  <p className={`text-xs opacity-70 leading-relaxed font-sans tracking-[0.01em]
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
