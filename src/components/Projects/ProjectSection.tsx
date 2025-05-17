import React, { useRef, useEffect, useState } from 'react';
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  // Check if the projects container is scrollable
  useEffect(() => {
    const checkScrollable = () => {
      if (projectsContainerRef.current) {
        const { scrollHeight, clientHeight } = projectsContainerRef.current;
        setIsScrollable(scrollHeight > clientHeight);
      }
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, [projects]);

  // Handle scroll behavior
  useEffect(() => {
    // Only apply custom scroll behavior on desktop
    if (!isScrollable || window.innerWidth < 768) return;

    const section = sectionRef.current;
    const projectsContainer = projectsContainerRef.current;

    if (!section || !projectsContainer) return;

    const handleWheel = (e: WheelEvent) => {
      if (!reachedEnd) {
        e.preventDefault();

        const { scrollTop, scrollHeight, clientHeight } = projectsContainer;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;

        if (e.deltaY > 0 && isAtBottom) {
          // Reached the end of the projects container, allow normal scrolling
          setReachedEnd(true);
        } else {
          // Scroll the projects container
          projectsContainer.scrollTop += e.deltaY;
        }
      } else if (e.deltaY < 0) {
        const { scrollTop } = projectsContainer;
        if (scrollTop <= 0) {
          // At the top of the projects container, reset to capture scrolling again
          setReachedEnd(false);
        }
      }
    };

    const handleScroll = () => {
      if (projectsContainer) {
        const { scrollTop } = projectsContainer;
        if (scrollTop === 0) {
          setReachedEnd(false);
        }
      }
    };

    const handleResize = () => {
      // Disable custom scrolling on mobile
      if (window.innerWidth < 768) {
        setReachedEnd(true);
      }
    };

    section.addEventListener('wheel', handleWheel, { passive: false });
    projectsContainer.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      section.removeEventListener('wheel', handleWheel);
      projectsContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isScrollable, reachedEnd]);

  return (
    <motion.div
      ref={sectionRef}
      className="mb-16 relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: sectionIndex * 0.2 }}
    >
      {/* Divider line */}
      {sectionIndex > 0 && (
        <div className={`absolute -top-8 left-0 right-0 h-px opacity-20
          ${theme === 'light' ? 'bg-light-secondary' : ''}
          ${theme === 'dark' ? 'bg-dark-secondary' : ''}
          ${theme === 'neon' ? 'bg-neon-secondary' : ''}
        `}></div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left column - Section title and description - Sticky */}
        <div className="md:sticky md:top-24 md:self-start md:h-fit md:pr-8">
          <h2 className={`text-xl md:text-2xl font-sans uppercase tracking-[0.2em] mb-8 font-light
            ${theme === 'light' ? 'text-light-primary' : ''}
            ${theme === 'dark' ? 'text-dark-primary' : ''}
            ${theme === 'neon' ? 'text-neon-primary' : ''}
          `}>
            {title}
          </h2>
          <p className={`text-sm md:text-base leading-relaxed font-sans max-w-md opacity-80
            ${theme === 'light' ? 'text-light-secondary' : ''}
            ${theme === 'dark' ? 'text-dark-secondary' : ''}
            ${theme === 'neon' ? 'text-neon-secondary' : ''}
          `}>
            {description}
          </p>

          {title === 'Freelance' && (
            <div className="mt-8 flex flex-wrap gap-4">
              <button className={`inline-flex items-center text-sm font-medium py-2 px-4 rounded-full border
                ${theme === 'light' ? 'border-light-primary text-light-primary hover:bg-light-primary/5' : ''}
                ${theme === 'dark' ? 'border-dark-primary text-dark-primary hover:bg-dark-primary/5' : ''}
                ${theme === 'neon' ? 'border-neon-primary text-neon-primary hover:bg-neon-primary/5' : ''}
              `}>
                <span className="mr-2 w-2 h-2 rounded-full bg-green-500"></span>
                Open for work
              </button>
              <a href="#contact" className={`inline-flex items-center text-sm font-medium py-2 px-4 rounded-full border
                ${theme === 'light' ? 'border-light-primary text-light-primary hover:bg-light-primary/5' : ''}
                ${theme === 'dark' ? 'border-dark-primary text-dark-primary hover:bg-dark-primary/5' : ''}
                ${theme === 'neon' ? 'border-neon-primary text-neon-primary hover:bg-neon-primary/5' : ''}
              `}>
                Email Me
              </a>
            </div>
          )}
        </div>

        {/* Right column - Project items - Scrollable */}
        <div
          ref={projectsContainerRef}
          className="relative md:max-h-[70vh] md:overflow-y-auto md:pr-4 hide-scrollbar md:z-10"
        >
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
