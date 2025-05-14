import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ProjectItem from './ProjectItem';
import { ProjectProps } from './ProjectCard';

interface ProjectSectionProps {
  title: string;
  description: string;
  projects: ProjectProps[];
  index: number;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  description,
  projects,
  index: sectionIndex
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      className="mb-24 relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: sectionIndex * 0.2 }}
    >
      {/* Divider line */}
      {sectionIndex > 0 && (
        <div className={`absolute -top-12 left-0 right-0 h-px opacity-20
          ${theme === 'light' ? 'bg-light-secondary' : ''}
          ${theme === 'dark' ? 'bg-dark-secondary' : ''}
          ${theme === 'neon' ? 'bg-neon-secondary' : ''}
        `}></div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left column - Section title and description */}
        <div className="md:pr-8">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-sans uppercase tracking-wide mb-8
            ${theme === 'light' ? 'text-light-primary' : ''}
            ${theme === 'dark' ? 'text-dark-primary' : ''}
            ${theme === 'neon' ? 'text-neon-primary' : ''}
          `}>
            {title}
          </h2>
          <p className={`text-base md:text-lg leading-relaxed font-sans max-w-md
            ${theme === 'light' ? 'text-light-secondary' : ''}
            ${theme === 'dark' ? 'text-dark-secondary' : ''}
            ${theme === 'neon' ? 'text-neon-secondary' : ''}
          `}>
            {description}
          </p>
        </div>

        {/* Right column - Project items */}
        <div className="relative">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
