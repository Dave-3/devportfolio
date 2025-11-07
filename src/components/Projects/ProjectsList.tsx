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
    id: 'work',
    title: 'Work',
    description: 'Selected client projects to showcase the process of turning concepts into concrete results. Here, you\'ll see projects where my skills and those of my peers come together to build practical, impactful solutions.',
    projects: [
      {
        id: 'premier-analytics',
        title: 'Premier Analytics',
        description: 'Rebrand and rebuild of Premier Analytics\' web presence, highlighting their analytics consultancy and capturing leads through a streamlined contact flow.',
        year: '2024',
        tags: ['WordPress', 'PHP', 'CSS'],
        demoUrl: 'https://premieranalytics.co/',
        githubUrl: '',
        image: '/premieranalytics.png',
        mobileImage: '/premieranalytics.png'
      },
      {
        id: 'treasured-scents',
        title: 'Treasured Scents',
        description: 'Modern e-commerce experience for a fragrance brand with product storytelling, scent discovery quiz, and WhatsApp driven checkout.',
        year: '2024',
        tags: ['Next.js', 'Odoo', 'Commerce.js'],
        demoUrl: 'https://treasuredscents.co.ke/',
        githubUrl: '',
        image: '/treasuredscents.png',
        mobileImage: '/treasuredscents.png'
      },
      {
        id: 'ikia-conference',
        title: 'IKIA Conference',
        description: 'Conference site for the IKIA network with agenda highlights, speaker roster, and registration workflow tailored for regional partners.',
        year: '2023',
        tags: ['Next.js', 'Payload CMS', 'Design System'],
        demoUrl: 'https://ikiaconference.or.ke/',
        githubUrl: '',
        image: '/ikia.png',
        mobileImage: '/ikia.png'
      },
      {
        id: 'safeher',
        title: 'Safeher',
        description: 'AI-led reporting platform delivered across web and mobile to keep social platforms safer for women while preserving access to income opportunities.',
        year: '2024',
        tags: ['Next.js', 'React Native', 'Node.js'],
        demoUrl: 'https://safeherkenya.org/',
        githubUrl: '',
        image: '/safeher.png',
        mobileImage: '/safeher.png'
      },
      {
        id: 'inkibank',
        title: 'Inkibank',
        description: 'Knowledge management system cataloguing indigenous innovations and guiding patent workflows for Kenyan communities.',
        year: '2023',
        tags: ['React', 'Yii2', 'React Native'],
        demoUrl: '',
        githubUrl: '',
        image: '/inkibank.jpg',
        mobileImage: '/inkibank.jpg'
      }
    ]
  },
  {
    id: 'open-source',
    title: 'SaaS',
    description: 'Product platforms that solve everyday problems for organisations and consumers alike—from payments automation to multi-location operations.',
    projects: [
      {
        id: 'nurupay',
        title: 'NuruPay',
        description: 'Seamless payments hub that streamlines personal and business transactions with a frictionless interface and automated reconciliation.',
        year: '2024',
        tags: ['Fintech', 'React', 'Node.js'],
        demoUrl: '',
        githubUrl: '',
        image: '/nurupay-1024x639.png',
        mobileImage: '/nurupay-1024x639.png'
      },
      {
        id: 'appinapp',
        title: 'AppinApp',
        description: 'All-in-one service platform powering POS, online ordering, and operations for restaurants and service businesses.',
        year: '2023',
        tags: ['Service Platform', 'WordPress', 'PHP'],
        demoUrl: 'https://revamp.appinapp.ke/wp/',
        githubUrl: '',
        image: '/appinapp.png',
        mobileImage: '/appinapp.png'
      },
      {
        id: 'dukalink',
        title: 'Dukalink Dealer Network',
        description: 'Enterprise POS and HRMS suite enabling Safaricom dealer organisations to track inventory, teams, and cashflow.',
        year: '2022',
        tags: ['Enterprise', 'React', 'HRMS'],
        demoUrl: '',
        githubUrl: '',
        image: '/dukalink.png',
        mobileImage: '/dukalink.png'
      }
    ]
  }
];

const ProjectsList: React.FC = () => {
  const { theme } = useTheme();

  return (
  <section className="overflow-hidden mt-[60px] md:mt-[100px]">
      <section className="md:pb-[60px]">
        <div className="container md:max-w-[620px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className={`text-left text-xs md:text-sm lg:leading-relaxed font-sans tracking-[0.012em] text-balance
              ${theme === 'light' ? 'text-light-secondary' : ''}
              ${theme === 'dark' ? 'text-dark-secondary' : ''}
              ${theme === 'neon' ? 'text-neon-secondary' : ''}
            `}>
              Below is a showcase of my work organized by category. Each project represents
              a unique challenge and solution, demonstrating my skills and approach to development.
            </p>
          </motion.div>
        </div>
      </section>

      <div>
        {projectCategories.map((category, index) => (
          <React.Fragment key={category.id}>
            <ProjectSection
              title={category.title}
              description={category.description}
              projects={category.projects}
              index={index}
            />
            {index < projectCategories.length - 1 && (
              <div className={`container w-full h-[1px] opacity-10
                ${theme === 'light' ? 'bg-light-secondary' : ''}
                ${theme === 'dark' ? 'bg-dark-secondary' : ''}
                ${theme === 'neon' ? 'bg-neon-secondary' : ''}
              `} />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;