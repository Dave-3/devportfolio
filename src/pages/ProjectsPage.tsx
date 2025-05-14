import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import ProjectCard, { ProjectProps } from '../components/Projects/ProjectCard';

// Extended project data for the dedicated projects page
const projects: ProjectProps[] = [
  {
    id: 'project1',
    title: 'District Athletics',
    description: 'A comprehensive platform for managing athletic events, team coordination, and score tracking for district-level competitions.',
    year: '2024',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    mobileImage: 'https://images.pexels.com/photos/11311754/pexels-photo-11311754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'project2',
    title: 'Wanderseat',
    description: 'An innovative travel application that helps users discover hidden local spots, authentic experiences, and personalized travel itineraries.',
    year: '2024',
    tags: ['React Native', 'Firebase', 'Google Maps API'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    mobileImage: 'https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'project3',
    title: 'TaskMaster Pro',
    description: 'A productivity application designed to streamline task management with features like priority sorting, deadline tracking, and team collaboration.',
    year: '2023',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    mobileImage: 'https://images.pexels.com/photos/5053743/pexels-photo-5053743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'project4',
    title: 'FinTrack Dashboard',
    description: 'A financial tracking dashboard that provides users with insightful analytics, budget management tools, and expense categorization capabilities.',
    year: '2023',
    tags: ['React', 'D3.js', 'Express', 'MongoDB'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    mobileImage: 'https://images.pexels.com/photos/7567433/pexels-photo-7567433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'project5',
    title: 'EcoMarket',
    description: 'An e-commerce platform focused on sustainable and eco-friendly products, featuring carbon footprint tracking and ethical sourcing information.',
    year: '2022',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'Prisma'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    image: 'https://images.pexels.com/photos/5417639/pexels-photo-5417639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    mobileImage: 'https://images.pexels.com/photos/4549411/pexels-photo-4549411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const ProjectsPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className={`text-4xl md:text-5xl font-display font-bold mb-6
            ${theme === 'light' ? 'text-light-text' : ''}
            ${theme === 'dark' ? 'text-dark-text' : ''}
            ${theme === 'neon' ? 'text-neon-text' : ''}
          `}>
            My Projects
          </h1>
          <p className={`text-lg max-w-3xl
            ${theme === 'light' ? 'text-light-secondary' : ''}
            ${theme === 'dark' ? 'text-dark-secondary' : ''}
            ${theme === 'neon' ? 'text-neon-secondary' : ''}
          `}>
            Below is a curated collection of my work that demonstrates my skills and experience.
            Each project is briefly described with links to code repositories and live demos.
            Hover over the project images to see mobile views of the applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <ProjectCard 
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

export default ProjectsPage;