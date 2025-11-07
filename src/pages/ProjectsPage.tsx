import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import ProjectCard, { ProjectProps } from '../components/Projects/ProjectCard';

// Extended project data for the dedicated projects page
const projects: ProjectProps[] = [
  {
    id: 'safeher',
    title: 'Safeher',
    description: 'AI-assisted reporting platform across web and mobile that keeps social channels safer for women while protecting income opportunities.',
    year: '2024',
    tags: ['Next.js', 'React Native', 'Node.js', 'AI Safety'],
    demoUrl: 'https://safeherkenya.org/',
    githubUrl: '',
    image: '/safeher.png',
    mobileImage: '/safeher.png'
  },
  {
    id: 'treasured-scents',
    title: 'Treasured Scents',
    description: 'Modern fragrance commerce experience with storytelling, scent quiz funnels, and Odoo-backed fulfillment flows.',
    year: '2024',
    tags: ['Next.js', 'Odoo', 'Commerce.js'],
    demoUrl: 'https://treasuredscents.co.ke/',
    githubUrl: '',
    image: '/treasuredscents.png',
    mobileImage: '/treasuredscents.png'
  },
  {
    id: 'nurupay',
    title: 'NuruPay',
    description: 'Unified payments hub delivering seamless personal and business transactions with automated reconciliation and alerts.',
    year: '2024',
    tags: ['React', 'Node.js', 'Fintech'],
    demoUrl: '',
    githubUrl: '',
    image: '/nurupay-1024x639.png',
    mobileImage: '/nurupay-1024x639.png'
  },
  {
    id: 'inkibank',
    title: 'Inkibank',
    description: 'Knowledge base preserving indigenous innovations and guiding patent workflows for Kenyan communities.',
    year: '2023',
    tags: ['React', 'Yii2', 'React Native'],
    demoUrl: '',
    githubUrl: '',
    image: '/inkibank.jpg',
    mobileImage: '/inkibank.jpg'
  },
  {
    id: 'appinapp',
    title: 'AppinApp',
    description: 'All-in-one platform powering POS, online ordering, and customer engagement for restaurants and service brands.',
    year: '2023',
    tags: ['WordPress', 'PHP', 'POS'],
    demoUrl: 'https://revamp.appinapp.ke/wp/',
    githubUrl: '',
    image: '/appinapp.png',
    mobileImage: '/appinapp.png'
  },
  {
    id: 'dukalink',
    title: 'Dukalink Dealer Network',
    description: 'Enterprise POS and HRMS suite enabling Safaricom dealers to manage teams, stock, and cashflow across locations.',
    year: '2022',
    tags: ['React', 'Node.js', 'HRMS'],
    demoUrl: '',
    githubUrl: '',
    image: '/dukalink.png',
    mobileImage: '/dukalink.png'
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
            Each project highlights the stack and impact, with live previews where sharing is possible.
            Desktop and mobile screens sit side by side so you can review the experience at a glance.
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