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
  },
  {
    id: 'freelance',
    title: 'Freelance',
    description: 'In the freelance world, versatility is key. Here, you\'ll find projects that showcase my ability to meet diverse client needs with precision and creativity.',
    projects: [
      {
        id: 'freelance1',
        title: 'SPIN TO WIN',
        description: 'Interactive web-based game for a marketing campaign with engaging animations and user rewards system.',
        year: '2024',
        tags: ['React', 'GSAP', 'Firebase'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 'freelance2',
        title: 'CAPITAL ONE HOME RUN DERBY',
        description: 'Interactive baseball game simulation for Capital One\'s promotional event with real-time scoring and leaderboards.',
        year: '2023',
        tags: ['Three.js', 'WebGL', 'React'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 'freelance3',
        title: 'AT&T METEOR GAME',
        description: 'Mobile-first interactive game for AT&T\'s marketing campaign featuring WebGL animations and touch controls.',
        year: '2023',
        tags: ['JavaScript', 'Canvas API', 'Mobile Optimization'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 'freelance4',
        title: 'COCA-COLA KICK UPS',
        description: 'Interactive soccer game for Coca-Cola\'s World Cup campaign with physics-based gameplay and social sharing features.',
        year: '2023',
        tags: ['Phaser.js', 'React', 'Social API Integration'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/2361/nature-animal-wolf-wilderness.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/2361/nature-animal-wolf-wilderness.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 'freelance5',
        title: 'BUICK ROAD TO GREATNESS',
        description: 'Interactive driving experience showcasing Buick\'s new vehicle features with 3D visualization and customization options.',
        year: '2022',
        tags: ['Three.js', 'WebGL', 'React'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 'freelance6',
        title: 'VERIZON KICK UPS',
        description: 'Mobile-optimized interactive game for Verizon\'s sports sponsorship with real-time multiplayer functionality.',
        year: '2022',
        tags: ['Socket.io', 'React Native', 'Node.js'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 'freelance7',
        title: 'ABUNDANCE PORTFOLIO SCROLL',
        description: 'Animated scrolling portfolio website for a financial services company with data visualization and interactive charts.',
        year: '2022',
        tags: ['GSAP', 'D3.js', 'React'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/7567455/pexels-photo-7567455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/7567455/pexels-photo-7567455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 'freelance8',
        title: 'DR. PEPPER METAVERSE',
        description: 'Virtual reality experience for Dr. Pepper\'s digital marketing campaign with interactive 3D environments and mini-games.',
        year: '2021',
        tags: ['WebXR', 'Three.js', 'React'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/7567538/pexels-photo-7567538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/7567538/pexels-photo-7567538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 'freelance9',
        title: 'DREAM MACHINE',
        description: 'AI-powered creative tool for generating and customizing artwork based on user inputs and preferences.',
        year: '2021',
        tags: ['TensorFlow.js', 'WebGL', 'React'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 'freelance10',
        title: 'NIKE PRODUCT CONFIGURATOR',
        description: 'Interactive 3D product customization tool for Nike\'s e-commerce platform with real-time rendering and sharing capabilities.',
        year: '2021',
        tags: ['Three.js', 'WebGL', 'React'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        mobileImage: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  }
];

const ProjectsList: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className={`text-2xl md:text-3xl font-sans font-medium mb-4 tracking-wide
            ${theme === 'light' ? 'text-light-text' : ''}
            ${theme === 'dark' ? 'text-dark-text' : ''}
            ${theme === 'neon' ? 'text-neon-text' : ''}
          `}>
            Projects
          </h2>
          <p className={`text-sm md:text-base max-w-2xl font-sans opacity-80
            ${theme === 'light' ? 'text-light-secondary' : ''}
            ${theme === 'dark' ? 'text-dark-secondary' : ''}
            ${theme === 'neon' ? 'text-neon-secondary' : ''}
          `}>
            Below is a showcase of my work organized by category. Each project represents
            a unique challenge and solution, demonstrating my skills and approach to development.
          </p>
        </motion.div>

        <div className="space-y-16">
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