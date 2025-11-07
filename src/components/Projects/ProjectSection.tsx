import React from 'react';
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
  index
}) => {
  const { theme } = useTheme();

  return (
    <section className="py-[60px]" id={title.toLowerCase()}>
  <div className="px-4 md:px-14 mx-auto max-lg:container flex flex-col lg:grid grid-cols-12 gap-10 lg:items-start">
        {/* Left column - Section title and description - Sticky */}
        <div className="col-span-5 xl:col-span-4 xl:col-start-2 row-start-1 lg:self-start">
          <div className="sticky top-[160px] flex flex-col gap-3">
            <h2 className={`text-xs md:text-sm font-title uppercase tracking-[0.18em] font-medium leading-relaxed
              ${theme === 'light' ? 'text-light-primary' : ''}
              ${theme === 'dark' ? 'text-dark-primary' : ''}
              ${theme === 'neon' ? 'text-neon-primary' : ''}
            `}>
              {title}
            </h2>
            <p className={`text-xs md:text-sm lg:leading-relaxed opacity-80 text-balance font-sans tracking-[0.015em]
              ${theme === 'light' ? 'text-light-secondary' : ''}
              ${theme === 'dark' ? 'text-dark-secondary' : ''}
              ${theme === 'neon' ? 'text-neon-secondary' : ''}
            `}>
              {description}
            </p>

            {index === 0 && (
              <div className="flex flex-wrap gap-4">
                <button className={`inline-flex items-center text-sm font-medium py-2 px-4 rounded-full border transition-colors
                  ${theme === 'light' ? 'border-light-primary text-light-primary hover:bg-light-primary/5' : ''}
                  ${theme === 'dark' ? 'border-dark-primary text-dark-primary hover:bg-dark-primary/5' : ''}
                  ${theme === 'neon' ? 'border-neon-primary text-neon-primary hover:bg-neon-primary/5' : ''}
                `}>
                  <span className="relative mr-2 flex h-4 w-4 items-center justify-center">
                    <span className="absolute h-5 w-5 rounded-full bg-emerald-400 opacity-50 blur-md"></span>
                    <span className="absolute h-8 w-8 rounded-full bg-emerald-400 opacity-25 blur-xl"></span>
                    <span className="relative h-2 w-2 rounded-full bg-emerald-300"></span>
                  </span>
                  Open for work
                </button>
                <a
                  href="mailto:mdnjenga@gmail.com"
                  className={`inline-flex items-center text-sm font-medium py-2 px-4 rounded-full border transition-colors
                  ${theme === 'light' ? 'border-light-primary text-light-primary hover:bg-light-primary/5' : ''}
                  ${theme === 'dark' ? 'border-dark-primary text-dark-primary hover:bg-dark-primary/5' : ''}
                  ${theme === 'neon' ? 'border-neon-primary text-neon-primary hover:bg-neon-primary/5' : ''}
                `}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email Me
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right column - Project items with natural page scroll */}
        <div className="max-xl:col-span-6 col-span-5 max-xl:col-start-7 col-start-7 row-start-1">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
