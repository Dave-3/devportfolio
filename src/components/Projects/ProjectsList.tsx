import React from 'react';
import { ProjectProps } from './ProjectCard';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ProjectSection from './ProjectSection';

// Group projects by category
interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  projects: ProjectProps[];
}

const projectCategories: ProjectCategory[] = [
  {
    id: 'apps',
    title: 'Apps',
    description: 'Apps showcase the process of turning concepts into concrete results. Here, you\'ll see projects where my skills and those of my peers come together to build practical, impactful solutions.',
    projects: [
      {
        id: 'project1',
        title: '254Arenas',
        description: 'A comprehensive platform for managing e-gaming events, team coordination, and score tracking for district-level competitions.',
        year: '2024',
        tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/11311754/pexels-photo-11311754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 'project2',
        title: 'Rigiti Groceries',
        description: 'An e-commerce platfrom for groceries shopping.',
        year: '2024',
        tags: ['React Native', 'Firebase', 'Google Maps API'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  {
    id: 'open-source',
    title: 'SaaS',
    description: 'SaaS is where I\'m laying the foundations for future collaboration. This section features projects in their initial phases, ripe for community input and collective development.',
    projects: [
      {
        id: 'project3',
        title: 'Earthling UI',
        description: 'A modern UI component library built with React and TypeScript, focusing on accessibility and customization.',
        year: '2024',
        tags: ['React', 'TypeScript', 'Storybook'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/5053743/pexels-photo-5053743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 'project4',
        title: 'Brainwave Broadcasting',
        description: 'An open-source streaming platform for educational content, featuring live coding sessions and interactive tutorials.',
        year: '2023',
        tags: ['Node.js', 'WebRTC', 'Socket.io'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/7567433/pexels-photo-7567433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 'project5',
        title: 'Easy Mesh Gradient',
        description: 'A lightweight library for generating beautiful mesh gradients for web applications.',
        year: '2023',
        tags: ['JavaScript', 'Canvas API', 'WebGL'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/5417639/pexels-photo-5417639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/4549411/pexels-photo-4549411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 'project6',
        title: 'Lab Controller',
        description: 'A framework for controlling and monitoring IoT devices in laboratory environments.',
        year: '2022',
        tags: ['Python', 'MQTT', 'Raspberry Pi'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  }
];

const ProjectsList: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className={`text-2xl md:text-3xl font-sans font-bold mb-4
            ${theme === 'light' ? 'text-light-text' : ''}
            ${theme === 'dark' ? 'text-dark-text' : ''}
            ${theme === 'neon' ? 'text-neon-text' : ''}
          `}>
            Projects
          </h2>
          <p className={`text-base max-w-2xl font-sans
            ${theme === 'light' ? 'text-light-secondary' : ''}
            ${theme === 'dark' ? 'text-dark-secondary' : ''}
            ${theme === 'neon' ? 'text-neon-secondary' : ''}
          `}>
            Below is a showcase of my work organized by category. Each project represents
            a unique challenge and solution, demonstrating my skills and approach to development.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projectCategories.map((category, index) => (
            <ProjectSection
              key={category.id}
              title={category.title}
              description={category.description}
              projects={category.projects}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;